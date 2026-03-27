const CoilSprings = () => {
    return (
        <>
            <div id="catalogue112" className="footer_bg">
                <div className="d-flex align-items-center py-2 justify-content-between">
                    <span className="bg-dark line_pro_h"></span>
                    <h5 className="line_pro_h_hd">
                        Standard Parts for Press Tool & <mark>Moulds</mark>
                    </h5>
                </div>


                <div className="container">
                    {/* Product 1 */}
                    <div className="product-block">
                        <div className="section-title">Coil Springs</div>
                        <div className="row mt-2">
                            <div className="col-md-4">
                                <img
                                    src="../images/CoilSpringss.webp"
                                    alt="c clamps"
                                    className="img-fluid w-100"
                                />
                            </div>
                            <div className="col-md-8">
                                <p>
                                    <strong>RECTANGULAR WIRE COIL SPRINGS – ISO 10243</strong>
                                </p>
                                <p>
                                    These coil springs are widely used in mould applications to push ejector plates and release moulded parts, as well as in sheet metal dies for retracting tool plates after stamping, punching, piercing, drawing, and blanking operations. Imported from FIBRO, these springs are manufactured as per ISO standards using high-grade spring steel with a rectangular wire profile, ensuring superior strength, durability, and consistent performance in demanding industrial applications.
                                </p>
                                <p>
                                    <strong>Spring Selection</strong>
                                </p>
                            </div>
                            <div className="col-md-12">
                                <p>Spring selection is simplified through the tables provided in our catalogue, which indicate load and stroke values based on two different working deflection conditions. The following table summarizes the calculated deflection range for each spring series, helping users choose the most suitable option for their application.</p>
                            </div>
                        </div>

                        <div className="row stp_table_padd mt-3">
                            <div className="col-12">
                                <div className="table-container mb-0 divs_font_table cell_table_first-7">
                                    {/* <caption>VB2.3 Data (001-040)</caption> */}
                                    <div className="table-header">
                                        {/* <div className="table-row"> */}
                                            <span className="cell">STANDARD</span>
                                            <span className="cell">SERIES</span>
                                            <span className="cell">LOAD</span>
                                            <span className="cell">Y0<br />Long Life<br />Total Deflection</span>
                                            <span className="cell">CYCLES</span>
                                            <span className="cell">MAXIMUM WORKING<br />TOTAL DEFLECTION</span>
                                            <span className="cell">CYCLES</span>
                                        {/* </div> */}
                                    </div>
                                    <div className="table-body">
                                        <div className="table-row">
                                            <span className="cell">ISO 10243</span>
                                            <span className="cell" >1L</span>
                                            <span className="cell">Extra Light</span>
                                            <span className="cell">65%</span>
                                            <span className="cell">+3,000,000</span>
                                            <span className="cell">50%</span>
                                            <span className="cell">200,000</span>
                                        </div>
                                        <div className="table-row">
                                            <span className="cell">ISO 10243</span>
                                            <span className="cell" class="series-col light">1S</span>
                                            <span className="cell">Light</span>
                                            <span className="cell">30%</span>
                                            <span className="cell">+3,000,000</span>
                                            <span className="cell">40%</span>
                                            <span className="cell">200,000</span>
                                        </div>
                                        <div className="table-row">
                                            <span className="cell">ISO 10243</span>
                                            <span className="cell" class="series-col medium">2S</span>
                                            <span className="cell">Medium</span>
                                            <span className="cell">25%</span>
                                            <span className="cell">+3,000,000</span>
                                            <span className="cell">37.5%</span>
                                            <span className="cell">200,000</span>
                                        </div>
                                        <div className="table-row">
                                            <span className="cell">ISO 10243</span>
                                            <span className="cell" class="series-col heavy">3S</span>
                                            <span className="cell">Heavy</span>
                                            <span className="cell">20%</span>
                                            <span className="cell">+3,000,000</span>
                                            <span className="cell">30%</span>
                                            <span className="cell">200,000</span>
                                        </div>
                                        <div className="table-row">
                                            <span className="cell">ISO 10243</span>
                                            <span className="cell" class="series-col extra-heavy">4S</span>
                                            <span className="cell">Extra Heavy</span>
                                            <span className="cell">17%</span>
                                            <span className="cell">+5,000,000</span>
                                            <span className="cell">25%</span>
                                            <span className="cell">200,000</span>
                                        </div>
                                        <div className="table-row">
                                            <span className="cell">ISO 10243</span>
                                            <span className="cell" class="series-col super-heavy">5S</span>
                                            <span className="cell">Super Heavy</span>
                                            <span className="cell">10%</span>
                                            <span className="cell">+5,000,000</span>
                                            <span className="cell">15%</span>
                                            <span className="cell">500,000</span>
                                        </div>
                                        <div className="table-row">
                                            <span className="cell"></span>
                                            <span className="cell" class="series-col super-heavy"><img src="../images/SERIES.webp" alt="spring" className="w-75" style={{ height: "120px" }} /></span>
                                            <span className="cell"></span>
                                            <span className="cell"><img src="../images/SERIES.webp" alt="spring" className="w-75" style={{ height: "90px" }} /></span>
                                            <span className="cell"></span>
                                            <span className="cell"><img src="../images/SERIES.webp" alt="spring" className="w-75" style={{ height: "70px" }} /></span>
                                            <span className="cell"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <img src="./images/CoilSpringsFooter.webp" alt="footer image" className="w-100" />
                            </div>
                        </div>
                        


                    </div>
                </div>

                <p className="product_category">Springs (Coil Springs)</p>
            </div >
        </>
    )
}
export default CoilSprings;