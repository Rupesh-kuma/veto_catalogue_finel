const About = () => {
    return (
        <div id="catalogue1" className="full_pdf_about">
            <div className="about-banner px-2" id="Introduction">
                <div className="container">
                    <div className="row align-items-center py-4">
                        <img src="../images/logo.png" alt="log" className="col-3 p-1 bg-white rounded d-block" />
                        {/* <h1 className="text-white col-9 text-center fs-3 fw-bold" data-outline="Introduction" data-level="1">INTRODUCTION</h1> */}
                    </div>
                </div>
            </div>
            <div className="container">
              
                <div className="row row-cols-1 row-cols-md-1 g-2">
                    <div className="col">
                         
                         <p className="about_text">We specialize in the design and manufacture of Clamping Systems, Standard Parts for Tool & Die, and Smart Press Shop Solutions — all built to enhance <b>Efficiency, Accuracy & Productivity</b> on the shop floor. Our solutions cater to critical sectors including Automotive, Injection Moulding, Railways, Heavy Engineering, & more.</p>
                        <p className="about_text">What truly sets us apart is our commitment to combining <strong>world-class engineering</strong> with <strong>smart, value-driven sourcing</strong>. We collaborate with <strong>renowned German technology partners</strong> and incorporate components from <b>globally trusted brands</b>, ensuring that every VETO product meets the highest standards of performance, durability, and innovation.</p>
                        <p className="about_text">At VETO, every solution is a reflection of our core values: <b>Precision, Performance & Partnership.</b> As we continue to shape the future of Smart Manufacturing, we invite you to partner with us in <b>Redefining Excellence</b> - Every step of the Way.</p>
                        <div className="catalog">
                            {/* A */}
                            <a href="#catalogue2" className="catalog-item pdf-link">
                                <div className="catalog-left">
                                    <span className="catalog-letter">A</span>
                                    <img src="../images/Clamping-Work-Holding-Application-2.webp" alt="Home" className="icon" />
                                </div>
                                <div className="catalog-content">
                                    <h2>CLAMPING &amp; WORK HOLDING APPLICATION</h2>
                                    <p>High-precision clamping elements and work holding devices</p>
                                    <p>Ensures stability, accuracy, and efficiency in machining operations</p>
                                </div>
                                <div className="catalog-right">
                                    <span>
                                        <i className="fa-solid fa-file-pdf icon"></i>
                                    </span>
                                </div>
                            </a>
                            {/* B */}
                            <a className="catalog-item pdf-link" href="#catalogue40">
                                <div className="catalog-left">
                                    <span className="catalog-letter">B</span>
                                    <img src="../images/Smart-Press-Shop-Solutions.png" alt="Home" className="icon" />
                                </div>
                                <div className="catalog-content">
                                    <h2>STANDARD PARTS FOR PRESS TOOL &amp; MOULDS</h2>
                                    <p>Durable and reliable components for toolmakers and manufacturers</p>
                                    <p>Precision fitment with superior material quality for long life</p>
                                </div>
                                <div className="catalog-right">
                                   <span>
                                        <i className="fa-solid fa-file-pdf icon"></i>
                                    </span>
                                </div>
                            </a>
                            {/* C */}
                            <a className="catalog-item pdf-link" href="https://veto-india.com/wp-content/uploads/2026/03/SMART-PRESS-SHOP-SOLUTIONS.pdf.pdf">
                                <div className="catalog-left">
                                    <span className="catalog-letter">C</span>
                                    <img src="../images/Standard-Parts-for-Press-Tool-Moulds-2.webp" alt="Home" className="icon" />
                                </div>
                                <div className="catalog-content">
                                    <h2>SMART PRESS SHOP SOLUTIONS</h2>
                                    <p>Advanced press shop automation and process optimization</p>
                                    <p>Improves efficiency, safety, and production output</p>
                                </div>
                                <div className="catalog-right">
                                   <span>
                                        <i className="fa-solid fa-file-pdf icon"></i>
                                    </span>
                                </div>
                            </a>
                            {/* D */}
                            <a className="catalog-item pdf-link"  href="#catalogue51">
                                <div className="catalog-left">
                                    <span className="catalog-letter">D</span>
                                    <img src="../images/CNC-Turning-Milling-Accessories.webp" alt="Home" className="icon" />
                                </div>
                                <div className="catalog-content">
                                    <h2>CNC TURNING &amp; MILLING ACCESSORIES</h2>
                                    <p>Tool holders, modular fixtures, and precision accessories</p>
                                    <p>Ensures rigidity, accuracy, and global machining standards</p>
                                </div>
                                <div className="catalog-right">
                                   <span>
                                        <i className="fa-solid fa-file-pdf icon"></i>
                                    </span>
                                </div>
                            </a>
                        </div>
                       
                    </div>
                    
                </div>
                {/* <img src="../images/about_banner.jpg" alt="about image" className="w-100"/> */}
            </div>
            <span className="page_number">Page 01</span>
        </div>
    )
}
export default About;