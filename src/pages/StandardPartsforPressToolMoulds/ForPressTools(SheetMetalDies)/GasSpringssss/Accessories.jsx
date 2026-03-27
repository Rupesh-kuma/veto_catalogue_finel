const Accessories = () => {
    return (
        <>
            <div id="catalogue128" className="footer_bg">
                <div className="d-flex align-items-center py-2 px-3 justify-content-between">
                    <span className="line_pro_h"></span>
                    <h5 className="line_pro_h_hd">
                        Standard Parts for Press Tool & <mark>Moulds</mark>
                    </h5>
                </div>


                <div className="container">
                    {/* Product 1 */}
                    <div className="product-block">
                        <div className="section-title">Accessories that redefine efficiency.</div>
                        <div class="row mt-1">
                            <div className="col-md-7">
                                <p className="mb-1"><strong>Shock Absorbing Pressure Plate:</strong></p>
                                <p>Mounted between tool and the piston rod of the gas spring, Shock absorbing Pressure Plates are designed to reduce-</p>
                                <ul >
                                    <li>Extreme impact loads</li>
                                    <li>Consequent high costs for press maintenance</li>
                                    <li>High noise levels</li>
                                    <li>Risk of production of lower quality parts</li>Accessories1.webp
                                </ul>
                                <img src="../images/Accessories1.webp" alt="Shock Absorbing Pressure Plate" className="w-75" />
                            </div>
                            <div className="col-md-5" style={{ height: "400px" }}>
                                <p className="mb-1"><strong>Installation example</strong></p>
                                <img src="../images/gassprings1.webp" alt="gas springs installation example" className="w-100" style={{ height: "90%" }} />
                            </div>

                        </div>
                        <div class="row border-top pt-1">
                            <div className="col-md-7">
                                <p className="mb-1"><strong>Manifold System & Composite Plates:</strong></p>
                                <p>Composite plate consists of multiple nitrogen cylinders and a control panel, which are connected to one another via boreholes in the lower plate. It provides all the benefits of the self-contained gas spring in the linked system.</p>
                                <ul className="mb-0">
                                    <li>Ready to install</li>
                                    <li>No external hose system required</li>
                                    <li>Less expensive</li>
                                    <li>Better performance</li>
                                    <li>Easy to maintain</li>
                                    <li>Fitted with pressure reservoir, the pressure increase can be reduced resulting in more consistent force</li>
                                </ul>
                                <img src="../images/Accessories2.webp" alt="Shock Absorbing Pressure Plate" className="w-100 h-50" />
                            </div>
                            <div className="col-md-5">
                                <p className="mb-1"><strong>Compact Gas Booster:</strong></p>
                                <p>Developed to compress nitrogen gas, it increases the output pressure of the nitrogen cylinders considerably.</p>
                                <ul>
                                    <li>Compact design & Light weight</li>
                                    <li>Increase in utilization capacity</li>
                                    <li>Reduction in cylinder replacement time</li>
                                    <li>Minimization of number of cylinders</li>
                                    <li>Simple installation directly on all standard nitrogen cylinders</li>
                                </ul>
                                <img src="../images/Accessories3.webp" alt="gas springs installation example" className="w-75" />
                            </div>

                        </div>

                    </div>
                </div >

                <p className="product_category">Springs (Gas Springs)</p>
            </div >
        </>
    )
}
export default Accessories;