const Home=()=>{
    return(
        <>
        <div id="catalogue" className="full_pdf_bg" style={{ backgroundImage: 'url(../images/banner_main.png)', backgroundSize: '100%', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
        <div className="container cover">
          {/* Logo  */}
          {/* <div className="row"> */}
            {/* <div className="logo_secod col-5"> */}
              {/* <img src="../images/logo.png" alt="Logo" /> */}
              {/* <h1 className="col-7">About Us</h1> */}
              {/* <span className="fw-bold d-block">Trusted Engineering Partner</span> */}
            {/* </div> */}
            {/* <div className="col-6 home_description">
              <p className="card-text">VE TO Clamping Systems Pvt. Ltd. has emerged as a trusted name in the engineering and manufacturing industry. With over a decade of experience, we deliver precision-engineered, high-performance solutions for a wide range of industrial applications, tailored to meet the evolving needs of modern manufacturing.</p>
                                <p className="card-text">We specialize in the design and manufacture of clamping systems, standard parts for tool & die, and smart press shop solutions—all built to enhance efficiency, accuracy, and productivity on the shop floor. Our solutions cater to critical sectors including automotive, injection moulding, railways, heavy engineering, and more.</p>
                                <p className="card-text">At VE TO, every solution is a reflection of our core values: precision, performance, and partnership. As we continue to shape the future of smart manufacturing, we invite you to partner with us in redefining excellence—every step of the way.</p>
            </div> */}
            
          {/* </div> */}


          {/* Footer */}
          <div className="footer position-absolute">
            <div>
              {/* <strong>Follow Us</strong><br /> */}
              <div className="d-flex gap-2" style={{position:'absolute',bottom:'-22px'}}>
                <div className="media_lik home_contact_us"><i className="fa-solid fa-phone-volume"></i><div> <a href="tel:+919717724079">+91-9717724079</a><a href="+919311138731">+91-9311138731</a></div></div>
                <div to="mailto:info.vetoclamps@gmail.com" className="home_contact_us" ><i className="fa-solid fa-paper-plane"></i><div><a href="mailto:info.vetoclamps@gmail.com">info.vetoclamps@gmail.com</a><a href="mailto:bd.vetoclamps@gmail.com">bd.vetoclamps@gmail.com</a></div></div>
                <a to="#"><i className="fa-solid fa-location-crosshairs"></i>Plot No. 7, Kila No.-5, Gazipur Industrial Area, Sohna Road, Faridabad -121004</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Home;