import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import fs from "fs";
import {
  PDFDocument,
  PDFName,
  PDFNumber,
  PDFString,
  PDFNull
} from "pdf-lib";

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/generate-pdf", async (req, res) => {

  let browser;

  try {

    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    /* ---------- PERFECT A4 VIEWPORT ---------- */

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 1
    });

    await page.goto("http://localhost:5173/catalogue-pdf", {
      waitUntil: "networkidle0"
    });

    await page.evaluate(() => {
      document.body.style.margin = "0";
    });

    /* ---------- COLLECT LINK DATA ---------- */

    const linkData = await page.evaluate(() => {

      const links = [];

      document.querySelectorAll(".pdf-link").forEach(el => {

        const rect = el.getBoundingClientRect();
        const href = el.getAttribute("href");

        if (!href || !href.startsWith("#")) return;

        const target = document.querySelector(href);

        if (!target) return;

        const targetRect = target.getBoundingClientRect();

        links.push({
          top: rect.top + window.scrollY,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          destTop: targetRect.top + window.scrollY
        });

      });

      return links;

    });

    /* ---------- GENERATE PDF ---------- */

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px"
      },
      pageRanges: "2-"
    });

    /* ---------- LOAD PDF ---------- */

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const ctx = pdfDoc.context;

    /* ---------- REMOVE BLANK PAGE ---------- */

    if (pdfDoc.getPageCount() > 1) {
      const firstPage = pdfDoc.getPage(0);
      if (firstPage.getHeight() < 10) {
        pdfDoc.removePage(0);
      }
    }

    const pages = pdfDoc.getPages();

    const pageHeight = pages[0].getHeight();

    const pxToPt = px => px * 0.75;

    const pagePixelHeight = 1123;

    /* ---------- CREATE INTERNAL LINKS ---------- */

    linkData.forEach(link => {

      const sourcePageIndex = Math.floor(link.top / pagePixelHeight) - 1;
      const destPageIndex = Math.floor(link.destTop / pagePixelHeight) - 1;
      if (sourcePageIndex < 0 || destPageIndex < 0) return;

      const sourcePage = pages[sourcePageIndex];
      const destPage = pages[destPageIndex];

      if (!sourcePage || !destPage) return;

      const x1 = pxToPt(link.left);
      const x2 = pxToPt(link.left + link.width);

      const y1 = pageHeight - pxToPt(link.top % pagePixelHeight);
      const y2 = pageHeight - pxToPt((link.top % pagePixelHeight) + link.height);

      const goToAction = ctx.obj({
        S: PDFName.of("GoTo"),
        D: [
          destPage.ref,
          PDFName.of("FitH"),
          PDFNumber.of(destPage.getHeight())
        ]
      });

      const annotation = ctx.obj({
        Type: PDFName.of("Annot"),
        Subtype: PDFName.of("Link"),
        Rect: [x1, y2, x2, y1],
        Border: [0, 0, 0],
        A: goToAction
      });

      const annotationRef = ctx.register(annotation);

      let annots = sourcePage.node.lookup(PDFName.of("Annots"));

      if (!annots) {
        annots = ctx.obj([]);
        sourcePage.node.set(PDFName.of("Annots"), annots);
      }

      annots.push(annotationRef);

    });

    /* ---------- BOOKMARK SUPPORT ---------- */

    // Bookmarks.json मौजूद है या नहीं चेक करें
    const bookmarkPath = "./src/datas/Bookmarks.json";
    let outlineJSON = [];
    if (fs.existsSync(bookmarkPath)) {
      outlineJSON = JSON.parse(fs.readFileSync(bookmarkPath, "utf8"));
    }

    const rootOutline = ctx.obj({ Type: PDFName.of("Outlines"), First: null, Last: null, Count: PDFNumber.of(0) });
    const rootRef = ctx.register(rootOutline);
    pdfDoc.catalog.set(PDFName.of("Outlines"), rootRef);

    function buildOutline(items, parentDict, parentRef) {
      let count = 0;
      for (const item of items) {
        const pageIndex = Math.max(0, Number(item.page || 0));
        if (pageIndex >= pdfDoc.getPageCount()) continue; // Safety check

        const pageObj = pdfDoc.getPage(pageIndex);
        const pageRef = pageObj.ref;
        const pageHeight = pageObj.getHeight();

        const outlineItem = ctx.obj({
          Title: PDFString.of(item.title),
          Parent: parentRef,
          Dest: [pageRef, PDFName.of("XYZ"), PDFNumber.of(0), PDFNumber.of(pageHeight), PDFNull],
          Prev: null, Next: null, First: null, Last: null, Count: PDFNumber.of(0),
        });

        const outlineRef = ctx.register(outlineItem);
        const last = parentDict.get(PDFName.of("Last"));
        if (last) {
          ctx.lookup(last).set(PDFName.of("Next"), outlineRef);
          outlineItem.set(PDFName.of("Prev"), last);
        }
        if (!parentDict.get(PDFName.of("First"))) parentDict.set(PDFName.of("First"), outlineRef);
        parentDict.set(PDFName.of("Last"), outlineRef);

        if (item.children?.length) {
          const childCount = buildOutline(item.children, outlineItem, outlineRef);
          outlineItem.set(PDFName.of("Count"), PDFNumber.of(-childCount));
        }
        count++;
      }
      return count;
    }

    if (outlineJSON.length > 0) {
      const rootCount = buildOutline(outlineJSON, rootOutline, rootRef);
      rootOutline.set(PDFName.of("Count"), PDFNumber.of(-rootCount));
    }


    /* ---------- SAVE PDF ---------- */

    const finalPdf = await pdfDoc.save();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Veto_Catalogue.pdf"
    });

    res.send(Buffer.from(finalPdf));

  } catch (err) {

    console.error("PDF ERROR:", err);
    res.status(500).send("Internal Server Error");

  } finally {

    if (browser) await browser.close();

  }

});

app.listen(PORT, () =>
  console.log(`Server running http://localhost:${PORT}`)
);