import React from 'react'
import Footer from '../components/Footer'
import AboutUS from "../images/about-us-hero-section.png"
import Suneeth from "../images/Profile/R_Suneeth.jpeg"
import Chandru from "../images/Profile/CHANDHRU.jpeg"
import Anudeep from "../images/Profile/ANUDEEP.jpeg"
import Jeevan from "../images/Profile/Jeevan.jpg"

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

                                    <p className="card-text" style={{ textAlign: "justify" }}>At Innovative Electrical Support, we specialize in a wide range of electrical services, catering to residential, commercial, and industrial clients. With decades of experience in the field, our team of certified electricians is well-equipped to handle projects of any size and complexity.</p>

                                </div>
                            </div>

                        </div>
                        <div className='col-sm-6 my-2'>
                            <div className="card h-100 " >
                                <div className="card-body ">
                                    <h5 className="card-title">Why We <span className='col_1'>Exist</span></h5>

                                    <p className="card-text" style={{ textAlign: "justify" }}>At Innovative Electrical Support, we believe in powering progress. We exist to make a difference in the electrical industry by providing innovative, sustainable, and high-quality solutions. Our passion for excellence drives us to constantly push boundaries and set new standards.</p>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <h5 className='display-6 fw-normal text-center'>Companies under <span className='col_1'>IES</span> Team</h5>
                <div className='container '>

                    <div className='row py-4'>

                        <div className='col-sm-4 my-2 '>

                            <div className="card h-100 text-white fw-bold" style={{ backgroundColor: "#f47629", borderColor: "#f47629" }}>
                                <div className="card-body text-center px-0 d-flex align-items-center justify-content-center">
                                    <h5 className="card-title">Innovative Electrical Solutions
                                    </h5>



                                </div>
                            </div>

                        </div>
                        <div className='col-sm-4 my-2'>
                            <div className="card h-100 text-white fw-bold" style={{ backgroundColor: "#f47629", borderColor: "#f47629" }}>
                                <div className="card-body text-center px-0 ">
                                    <h5 className="card-title">Gurubhyo Namaha Jeeva Enterprises
                                    </h5>


                                </div>
                            </div>

                        </div>
                        <div className='col-sm-4 my-2'>
                            <div className="card h-100 text-white fw-bold" style={{ backgroundColor: "#f47629", borderColor: "#f47629" }}>
                                <div className="card-body  px-0 d-flex align-items-center justify-content-center">
                                    <h5 className="card-title">B R S Enterprises
                                    </h5>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <h5 className='display-6 fw-normal text-center'>Our <span className='col_1'>Team</span></h5>
                <div className='row clearfix justify-content-center'>


                    <div className='col-sm-3 my-2'>
                        <div className="card h-100 shadow-lg" style={{ width: "auto" }}>
                            <img src={Suneeth} className="card-img-top d-flex justify-content-center p-3" alt="Suneeth" style={{ height: "350px" }} />
                            <div class="card-body">
                                <h5 className="card-title"><span className="col_1">R Suneeth <sub style={{ fontSize: '12px' }}>M.Tech (PE), B. E (EEE)</sub></span></h5>
                                <p className='p-0 m-0'>Class 1 Electrical Contractor and Project Designer</p>
                            </div>
                            {/* <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                                <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                            </ul> */}

                        </div>
                    </div>
                    <div className='col-sm-3 my-2'>
                        <div className="card h-100 shadow-lg" style={{ width: "auto" }}>
                            <img src={Jeevan} className="card-img-top p-3" alt="Suneeth" style={{ height: "350px" }} />
                            <div class="card-body">
                                <h5 className="card-title"><span className="col_1">Jeevan Kumar M R
                                </span></h5>
                                <p className='p-0 m-0'>Class 1 Electrical Contractor and Projects Head
                                </p>
                            </div>
                            {/* <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                                <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                            </ul> */}

                        </div>
                    </div>
                    <div className='col-sm-3 my-2'>
                        <div className="card h-100 shadow-lg" style={{ width: "auto" }} >
                            <img src={Anudeep} className="card-img-top p-3" alt="Anudeep" style={{ height: "350px" }} />
                            <div class="card-body">
                                <h5 className="card-title"><span className="col_1">Anudeep K P  <sub style={{ fontSize: '12px' }}> B. E (EEE)
                                </sub></span></h5>
                                <p className='p-0 m-0'>Electrical supervisor Permit Grade 1 and Panel Board Manufacturing Head</p>
                            </div>
                            {/* <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                                <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                            </ul> */}

                        </div>
                    </div>
                    {/* <div className='col-sm-3 my-2'>
                        <div className="card h-100 shadow-lg" style={{ width: "auto" }}>
                            <img src={Chandru} className="card-img-top p-3" alt="Chandru" style={{ height: "350px" }} />
                            <div className="card-body">
                                <h5 className="card-title"><span className="col_1">Chandrashekar V</span></h5>
                                <p className='p-0 m-0'>Class 1 Electrical Contractor and Site Technical Engineer</p>
                            </div>
                            {/* <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                                <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                            </ul> 

                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs