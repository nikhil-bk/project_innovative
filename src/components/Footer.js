import React from 'react'
import Logo from "../images/SquadLogo.png"
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (

        <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: '#e8e9e8' }}>

            <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>


                <div>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>

                </div>

            </section>



            <section className="">
                <div className="container text-center text-md-start mt-2">

                    <div className="row">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <img
                                    src={Logo}
                                    width="180"
                                    height="60"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </h6>
                            <p style={{ textAlign: 'justify' }}>
                                Your one-stop destination for top-notch electrical contracting services. With a proven track record of excellence and a team of dedicated professionals, we are your reliable partner for all your electrical needs.
                            </p>
                        </div>




                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Quick links
                            </h6>
                           
                            <p>
                                <Link to="/" className="text-reset link-item" onClick={()=>window.scrollTo(0, 0)}>Home</Link>

                            </p>
                            <p>
                                <Link to="/services" className="text-reset link-item" onClick={()=>window.scrollTo(0, 0)}>Services</Link>
                            </p>
                            <p>
                                <Link to="/gallery" className="text-reset link-item" onClick={()=>window.scrollTo(0, 0)}>Gallery</Link>
                            </p>
                            <p>
                                <Link to="/projects" className="text-reset link-item" onClick={()=>window.scrollTo(0, 0)}>Projects</Link>
                            </p>
                            <p>
                                <Link to="/about-us" className="text-reset link-item" onClick={()=>window.scrollTo(0, 0)}>About US</Link>
                            </p>


                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> Karibasveshwara Swamy Mata Complex, 1st Floor, Horapete, Tumkur, Karnataka, 572101</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i> electric@iesteam.in
                            </p>
                            <p><i className="fas fa-phone me-3"></i> +91 9019940229</p>
                            {/* <p><i className="fas fa-print me-3"></i> + 91 1236547890</p> */}
                        </div>

                    </div>

                </div>
            </section>



            <div className="text-center p-4" style={{ backgroundColor: "white", opacity: "0.5" }}>
                © {(new Date().getFullYear())} Copyright:
                <a className="text-reset fw-bold" href="/">iesteam.in</a>
            </div>

        </footer>

    )
}

export default Footer