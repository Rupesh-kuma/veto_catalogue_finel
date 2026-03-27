

const Springs = () => {
    return(
        <>
        <div id="catalogue111" className="footer_bg">
            <div className="container py-2 px-0">
                <div className="w-100 ps-4 ">
                    <img src="../images/logo.png" alt="logo" className="w-25" />
                </div>
                <div className="product_info_main">
                    <h1 className="fs-3 ">Springs</h1>
                    <p>VETO offers high-performance industrial springs engineered for consistent force, durability, and reliability, providing essential support for smooth and efficient operation across various tooling and machinery applications.</p>
                </div>
                <div className="product-list my-4 p-4 product_list_main produ_list_hmain">
                    <div className="row row-cols-1 row-cols-md-3 g-2 mb-4">
                        <div className="col">
                            <a className="card border-0 bg-transparent " data-page="5">
                                <img src="../images/CoilSprings.webp" alt="Product 1" className="card-img-top product_image_hei" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Coil Springs</p>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent " data-page="5">
                                <img src="../images/dieSprings.webp" alt="Tapped-End-Clamps" className="card-img-top product_image_hei" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Die Springs</p>

                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a className="card border-0 bg-transparent " data-page="5">
                                <img src="../images/GasSprings.webp" alt="Tapped-End-Clamps" className="card-img-top product_image_hei" />
                                <div className="card-body bg-white position-absolute  w-100" style={{ top: "93%" }}>
                                    <p className="card-title text-center text-dark mb-0">Gas Springs</p>

                                </div>
                            </a>
                        </div>

                        
                         

                    </div>
                </div>
            </div>

        </div>
        
        
        
        
        </>
    )
}
export default Springs;