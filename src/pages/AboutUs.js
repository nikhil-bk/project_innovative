import React from 'react'
import Footer from '../components/Footer'
import AboutUS from "../images/about-us-hero-section.png"
import Suneeth from "../images/Profile/R_Suneeth.jpeg"
import Chandru from "../images/Profile/CHANDHRU.jpeg"
import Anudeep from "../images/Profile/ANUDEEP.jpeg"

const AboutUs = () => {
    return (
        <div className='mt-5 bg-light'>
            <div className="position-relative">
                <img src={AboutUS} alt="service" style={{ width: "100%", height: "50vh", filter: "brightness(70%)" }} />
                <h5 className="position-absolute top-50 start-50 translate-middle text-center display-3 text-white fw-normal">ABOUT US</h5>
            </div>

            <div className='container p-5'>
                <h5 className='display-6 fw-normal text-center'>About Our <span className='col_1'>Company</span></h5>
                <div className='container'>
                    <div className='row py-4'>

                        <div className='col-sm-6 my-2'>

                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">What We <span className='col_1'>Do</span></h5>

                                    <p className="card-text" style={{ textAlign: "justify" }}>At Innovative Electrical Solutions, we specialize in a wide range of electrical services, catering to residential, commercial, and industrial clients. With decades of experience in the field, our team of certified electricians is well-equipped to handle projects of any size and complexity.</p>

                                </div>
                            </div>

                        </div>
                        <div className='col-sm-6 my-2'>
                            <div className="card h-100 " >
                                <div className="card-body ">
                                    <h5 className="card-title">Why We <span className='col_1'>Exists</span></h5>

                                    <p className="card-text" style={{ textAlign: "justify" }}>At Innovative Electrical Solutions, we believe in powering progress. We exist to make a difference in the electrical industry by providing innovative, sustainable, and high-quality solutions. Our passion for excellence drives us to constantly push boundaries and set new standards.</p>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <h5 className='display-6 fw-normal text-center'>Companies under <span className='col_1'>INNOVATIVE</span></h5>
                <div className='container'>

                    <div className='row py-4'>

                        <div className='col-sm-4 my-2'>

                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">INNOVATIVE ELECTRICAL SOLUTIONS
                                    </h5>



                                </div>
                            </div>

                        </div>
                        <div className='col-sm-4 my-2'>
                            <div className="card h-100 " >
                                <div className="card-body ">
                                    <h5 className="card-title">JEEVA ENTERPRISES
                                    </h5>


                                </div>
                            </div>

                        </div>
                        <div className='col-sm-4 my-2'>
                            <div className="card h-100 " >
                                <div className="card-body ">
                                    <h5 className="card-title">B R S ENTERPRISES
                                    </h5>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <h5 className='display-6 fw-normal text-center'>Our <span className='col_1'>Team</span></h5>
                <div className='row clearfix'>


                    <div className='col-sm-4 my-2'>
                        <div className="card h-100 shadow-lg" style={{width:"auto"}}>
                            <img src={Suneeth} className="card-img-top d-flex justify-content-center" alt="Suneeth" style={{ height: "350px" }} />
                            <div class="card-body">
                                <h5 className="card-title"><span className="col_1">R Suneet</span></h5>
                                <p className='p-0 m-0'>Designation</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                                <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                            </ul>

                        </div>
                    </div>
                    <div className='col-sm-4 my-2'>
                        <div className="card h-100 shadow-lg" style={{width:"auto"}}>
                            <img src={Chandru} className="card-img-top " alt="Chandru" style={{ height: "350px" }} />
                            <div className="card-body">
                                <h5 className="card-title"><span className="col_1">Chandru</span></h5>
                                <p className='p-0 m-0'>Designation</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                                <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                            </ul>

                        </div>
                    </div>
                    <div className='col-sm-4 my-2'>
                        <div className="card h-100 shadow-lg" style={{width:"auto"}} >
                            <img src={Anudeep} className="card-img-top" alt="Anudeep" style={{ height: "350px" }} />
                            <div class="card-body">
                                <h5 className="card-title"><span className="col_1">Anudeep</span></h5>
                                <p className='p-0 m-0'>Designation</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                                <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs