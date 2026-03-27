const PartingLocks = () => {
    return (
        <>
            <div id="catalogue2" className="footer_bg">
                <div className="d-flex align-items-center py-2 px-3 justify-content-between">
                    <span className="line_pro_h"></span>
                    <h5 className="line_pro_h_hd">
                        Standard Parts for Press Tool & <mark>Moulds</mark>
                    </h5>
                </div>

                <div className="container">
                    {/* Product 1 */}
                    <div className="product-block border-0">
                        <div className="section-title">Parting Locks</div>
                        <div className="row mt-2 g-1">
                            <div className="col-5">
                                <img
                                    src="../images/PartingLocks.webp"
                                    alt="strap Clamp"
                                    className="img-fluid product-image mb-0"
                                />
                            </div>

                            <div className="col-5">
                                <img
                                    src="../images/PartingLocks_second.webp"
                                    alt="strap Clamp"
                                    className="img-fluid product-image mb-0"
                                />
                            </div>
                            <div className="col-2">
                                <p className="mb-0 fw-bold" style={{ fontSize: "13px" }}>VC1.1</p>
                                <p className="mb-0" style={{ fontSize: "13px" }}>Parting Lock (VC1.1)</p>
                                {/* <p className="mb-0" style={{ fontSize: "13px" }}>Raw Material: EN36</p> */}
                                {/* <p style={{ fontSize: "13px" }}>Case Hardness:58-60 HRC</p> */}
                            </div>
                        </div>

                        <div className="row stp_table_padd mt-3">
                            <div className="col-12">
                                <table className="table table-bordered table-striped table-sm text-center align-middle mb-0  border-dark">
                                    {/* <caption>VB2.3 Data (001-040)</caption> */}
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>d1</th>
                                            <th>d2</th>
                                            <th>d3</th>
                                            <th>L</th>
                                            <th>L1</th>
                                            <th>L2</th>
                                            <th>W</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>VC1.1/10</strong></td>
                                            <td>10</td>
                                            <td>M5</td>
                                            <td>8.5</td>
                                            <td>30</td>
                                            <td>18</td>
                                            <td>3</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td><strong>VC1.1/12</strong></td>
                                            <td>12</td>
                                            <td>M6</td>
                                            <td>11</td>
                                            <td>33</td>
                                            <td>20</td>
                                            <td>3.5</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><strong>VC1.1/13</strong></td>
                                            <td>13</td>
                                            <td>M6</td>
                                            <td>11</td>
                                            <td>33</td>
                                            <td>20</td>
                                            <td>3.5</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><strong>VC1.1/16</strong></td>
                                            <td>16</td>
                                            <td>M8</td>
                                            <td>14</td>
                                            <td>40</td>
                                            <td>25</td>
                                            <td>4</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td><strong>VC1.1/20</strong></td>
                                            <td>20</td>
                                            <td>M10</td>
                                            <td>16</td>
                                            <td>44</td>
                                            <td>30</td>
                                            <td>5.5</td>
                                            <td>8</td>
                                        </tr>
                                        <tr>
                                            <td><strong>VC1.1/25</strong></td>
                                            <td>25</td>
                                            <td>M10</td>
                                            <td>16</td>
                                            <td>44</td>
                                            <td>30</td>
                                            <td>5.5</td>
                                            <td>8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="ordering-note">
                            <strong>Legend:</strong> <span className="stock-badge"></span> Ex-stock |
                            <span className="out-of-stock-badge"></span> Against Order |
                            <strong>Ordering Example:</strong> Code - Quantity | VC1.1/25 - 20 Pcs
                        </p>
                        <p>Parting locks are used in moulds for pulling the plates to a desired limit.They act like pullers. The unique design
                            and selection of right material makes the performance of application more better.</p>
                        {/* O40 Table */}
                        <h2 className="fs-4">Guidelines to use Parting lock:</h2>
                        <div className="row g-1">
                            <div className="col-6">
                                <ul>
                                    <li>Place the Parting lock bolt on moving side of the mould</li>
                                    <li>Install min. 4 Pcs. on one mold, 2 Pcs. each on both sides of the plate</li>
                                    <li>After placement of the Parting locks on the plate, turn the bolt to 90° and plastic lock will expand</li>
                                    <li>Do not apply any lubricant on plastic part. Doing so will reduce the friction and grip</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul style={{ fontSize: "15px" }}>
                                    <li>Use H7 Reamer in hole of the mold plate with +0.1 mm range</li>
                                    <li>Mould weight &#10216; kgs, use 4 Pcs. of VC1.1/12 x 20</li>
                                    <li>Mould weight &#10216; 500 kgs, use 4 Pcs. of VC1.1/16 x 25</li>
                                    <li>Mould weight &#10216; 1000 kgs, use 4 Pcs. of VC1.1/20 x 30</li>
                                    <li>If more load to be pulled then above limit then use more numbers of Parting locks to be used. i.e. 6 or 8Pcs</li>
                                </ul>
                            </div>
                            <div className="col-12">
                                <img src="../images/spppp.png" alt="Parting Lock Installation Guide" className="w-100" />
                            </div>
                        </div>



                    </div>
                </div>
                <span className="page_number">Page 02</span>
                <p className="product_category">Three Plate Mould accessories (Parting Locks)</p>
            </div >
        </>
    )
}
export default PartingLocks;