import React from 'react'
import AboutUsPicture from "../images/about_us_picture.jpg"

const AboutUsComponent = () => {
    return (
        <section id="about_home">
            <div className="container">
                <div className="row">
                    <div className="about_home_1  clearfix">
                        <div className="col-sm-12">
                            <h1 className="mgt text-center">About <span className="col_1">Us</span></h1>
                            <p className='text-justify'>Welcome to <span className='col_1 fw-bold'>Innovative Electrical Support,</span> your one-stop destination for top-notch electrical contracting services. With a proven track record of excellence and a team of dedicated professionals, we are your reliable partner for all your electrical needs.</p>
                        </div>
                    </div>
                    <div className="about_home_2 clearfix row">
                        <div className="col-sm-5 justify-content-center">
                            <div className="about_home_2l justify-content-center clearfix">
                                <img src={AboutUsPicture} className="iw" alt="abc" />
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="about_home_2r clearfix">
                                <p className="mgt" style={{ textAlign: "justify" }}>We are presenting service in Karnataka particularly inside the area of Bangalore, Tumkur, Kolar, Chitradurga.(BESCOM AND KPTCL regions). Our installation services are always done promptly and safely.We're proud to serve in numerous purposeful areas as follows.</p>
                                <ul>
                                    <li><i className="fa fa-check col_1"></i> HT-LT installation</li>
                                    <li><i className="fa fa-check col_1"></i> Wiring and installation/upgrades</li>
                                    <li><i className="fa fa-check col_1"></i> Engineering of electrical Works in Substations</li>
                                    <li><i className="fa fa-check col_1"></i> Distribution & Transmission lines</li>
                                </ul>
                                <h5><a className="button" href="/services"><ion-icon name="flame-outline"></ion-icon>Know More</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsComponent