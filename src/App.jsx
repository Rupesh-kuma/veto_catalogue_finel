// src/App.jsx
import React from "react";
import Catalogue from "./Catalogue";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cataloguepdf from "./cataloguepdf";

export default function App() {
  return (
    <div className="app">
      {/* <h1 data-outline="Introduction" data-level="1">Introduction</h1>
      <h2 data-outline="Overview" data-level="2">Overview</h2>
      <h2 data-outline="Features" data-level="2">Features</h2>

      <h1 data-outline="Products" data-level="1">Products</h1>
      <h2 data-outline="Injection Moulding" data-level="2">
        Injection Moulding
      </h2> */}
      <Routes>
        <Route path="/*" element={<Cataloguepdf />} />
        {/* <Route path="/*" element={<Catalogue />} /> */}
      </Routes>

    </div>
  );
}
