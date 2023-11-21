import React from 'react'
import Footer from '../components/Footer'
import OurServicePageImage from "../images/services_page_image.jpg"
import PowerSanction from "../images/services/power_sanction.jpg"
import CEIGApprovals from "../images/services/ceig_approval.jpg"
import LTPanel from "../images/services/LTPanel.jpg"
import LTPanel2 from "../images/services/LTPanel2.jpg"
import MCB from "../images/services/mcb.jpg"
import PS_Slide5 from "../images/services/power_sacntions/5.png"
import PS_Slide6 from "../images/services/power_sacntions/6.jpg"
import PS_Slide8 from "../images/services/power_sacntions/8.jpg"
import PS_Slide9 from "../images/services/power_sacntions/9.jpg"
import PS_Slide10 from "../images/services/power_sacntions/10.jpg"
import Panel_Image_Slide1 from "../images/services/panel_images/1.jpg"
import Panel_Image_Slide2 from "../images/services/panel_images/2.jpg"
import Panel_Image_Slide3 from "../images/services/panel_images/3.jpg"
import Electrical_Service_Slide1 from "../images/services/electrical_services/1.jpg"
import Electrical_Service_Slide2 from "../images/services/electrical_services/2.jpg"
import Electrical_Service_Slide3 from "../images/services/electrical_services/3.jpg"
import Carousel2 from '../components/Carousel2'

const Services = () => {
    return (
        <div className='mt-5'>
            <div className="position-relative">
                <img src={OurServicePageImage} alt="service" style={{ width: "100%", height: "50vh", filter: "brightness(70%)" }} />
                <h5 className="position-absolute top-50 start-50 translate-middle text-center display-3 text-white fw-normal">OUR SERVICES</h5>
            </div>
            <div className='container mt-5'>

                <p style={{ textAlign: "justify" }}>Welcome to <span className='col_1'>Innovative Electrical Solutions</span>, your one-stop destination for top-notch electrical contracting services. With a proven track record of excellence and a team of dedicated professionals, we are your reliable partner for all your electrical need.We are presenting service in Karnataka particularly inside the area of Bangalore, Tumkur, Kolar, Chitradurga.(BESCOM AND KPTCL regions)</p>
                <div className='row gap-2 justify-content-center'>
                    <div class="card  col-sm-4 text-white fw-bold p-0 m-0" style={{ width: "fit-content", backgroundColor: "#f47629", borderColor: "#f47629" }}>
                        <div class="card-body">
                            COMMERCIAL COMPLEXES
                        </div>
                    </div>
                    <div class="card col-sm-4 text-white fw-bold p-0 m-0" style={{ width: "fit-content", backgroundColor: "#f47629", borderColor: "#f47629" }}>
                        <div class="card-body">
                            IT PARKS
                        </div>
                    </div>
                    <div class="card col-sm-4 text-white fw-bold p-0 m-0" style={{ width: "fit-content", backgroundColor: "#f47629", borderColor: "#f47629" }}>
                        <div class="card-body">
                            INDUSTRIES
                        </div>
                    </div>
                    <div class="card col-sm-4 text-white fw-bold p-0 m-0" style={{ width: "fit-content", backgroundColor: "#f47629", borderColor: "#f47629" }}>
                        <div class="card-body">
                            HOSPITALS
                        </div>
                    </div>
                    <div class="card col-sm-4 text-white fw-bold p-0 m-0" style={{ width: "fit-content", backgroundColor: "#f47629", borderColor: "#f47629" }}>
                        <div class="card-body">
                            APPARTMENTS
                        </div>
                    </div>
                    <div class="card col-sm-4 text-white fw-bold p-0 m-0" style={{ width: "fit-content", backgroundColor: "#f47629", borderColor: "#f47629" }}>
                        <div class="card-body">
                            NEW LAYOUTS
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-light mt-5'>
                <div className='row mx-5 py-4 clearfix'>
                    <div className='col-sm-6 '>
                        <div className="card p-2" >
                        <Carousel2 slides={[PS_Slide5,PS_Slide6,PS_Slide8,PS_Slide9,PS_Slide10]}/>
                            {/* <img src={PowerSanction} className="card-img-top" alt="power_sanction" style={{ width: "100%", height: "60vh" }} /> */}

                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="about_home_2r clearfix">
                            <h5 className='col_1'>Power sanction and Execution works</h5>
                            <p className="mgt" style={{ textAlign: "justify" }}>We provide services that involves the authorization and implementation of critical decision and action in the realm of Energy and administration ensuring the efficient allocation and execution of resources.</p>
                            <ul>
                                <li><i className="fa fa-check col_1"></i> Industrial Power Sanction (LT-5, HT)</li>
                                <li><i className="fa fa-check col_1"></i> Commercial Power Sanction (LT-3)</li>
                                <li><i className="fa fa-check col_1"></i> Domestic Power Sanction (LT-2)</li>

                                <li><i className="fa fa-check col_1"></i> Temporary Power Sanction (LT-7)</li>
                                <li><i className="fa fa-check col_1"></i> New layout Electrification work (Overhead and UG cable type layout)</li>
                                <li><i className="fa fa-check col_1"></i> M S Building Electrification</li>
                                <li><i className="fa fa-check col_1"></i> Irrigation Power Sanction</li>
                                <li><i className="fa fa-check col_1"></i> Pole shifting and erection work and etc</li>
                            </ul>


                        </div>
                    </div>

                </div>

            </div>
            <div className=''>
                <div className='row mx-5 py-4 clearfix'>

                    <div className='col-sm-6'>
                        <div className="about_home_2r clearfix">
                            <h5 className='col_1'> CEIG Approvals</h5>
                            <p className="mgt" style={{ textAlign: "justify" }}>Electrical Inspectorate Work (CEIG) involves rigorous assessments and compliance checks to ensure electrical systems meet safety standards, promoting secure and reliable power distribution for all. These inspections play a critical role in maintaining electrical safety and preventing potential hazards.</p>
                            <ul>
                                <li><i className="fa fa-check col_1"></i> Periodical Inspection Approval of Transformer</li>
                                <li><i className="fa fa-check col_1"></i> New Transformer Approvals</li>
                                <li><i className="fa fa-check col_1"></i> Periodical Inspection Approval of DG</li>
                                <li><i className="fa fa-check col_1"></i> New DG (Diesel Generator) Approvals</li>
                                <li><i className="fa fa-check col_1"></i> MS Building Approvals and etc</li>

                            </ul>


                        </div>
                    </div>
                    <div className='col-sm-6 '>
                        <div className="card p-2" >
                            <img src={CEIGApprovals} className="card-img-top" alt="power_sanction" style={{ width: "100%", height: "auto" }} />

                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-light'>
                <div className='row mx-5 py-4 clearfix'>
                    <div className='col-sm-6 '>
                        <div className="card p-2" >
                        <Carousel2 slides={[LTPanel2,Panel_Image_Slide1,Panel_Image_Slide2,Panel_Image_Slide3]}/>
                            {/* <img src={LTPanel2} className="card-img-top" alt="power_sanction" style={{ width: "100%", height: "60vh", backgroundColor: "#d3d3d3" }} /> */}

                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="about_home_2r clearfix">
                            <h5 className='col_1'>LT Panel Board Manufacturing and Services</h5>
                            <p className="mgt" style={{ textAlign: "justify" }}>Our Electrical Panel Board Manufacturing company is a cornerstone of innovation, crafting cutting-edge control panels that power the modern world. With precision engineering and quality assurance, we're your partner for reliable electrical solutions. Our main mission is to evaluate your energy needs and help you find solutions that are financially and technically net positive.</p>
                            <ul>
                                <li><i className="fa fa-check col_1"></i> Main Distribution Panel</li>
                                <li><i className="fa fa-check col_1"></i> Capacitor Panel </li>
                                <li><i className="fa fa-check col_1"></i> LT Kioska Panel</li>

                                <li><i className="fa fa-check col_1"></i>Power Control Center Panel
                                </li>
                                <li><i className="fa fa-check col_1"></i> Motor Control Center Panel
                                </li>
                                <li><i className="fa fa-check col_1"></i> 12 and 8 WAY Feeder Pillar Panel</li>
                                <li><i className="fa fa-check col_1"></i> All types of LT Panels</li>
                            </ul>


                        </div>
                    </div>

                </div>

            </div>
            <div className=''>
                <div className='row mx-5 py-4 clearfix'>

                    <div className='col-sm-6'>
                        <div className="about_home_2r clearfix">
                            <h5 className='col_1'>Electrical Material Supply & Installation</h5>
                            <p className="mgt" style={{ textAlign: "justify" }}>We are your trusted Electrical Supply and Installation experts, delivering seamless power solutions to meet your needs. From product sourcing to seamless installation, we power your world with reliability and excellence.</p>
                            <ul>
                                <li><i className="fa fa-check col_1"></i> MCB, MCCB, CONTACTOR, RELAYS and etc</li>
                                <li><i className="fa fa-check col_1"></i> Diesel Generator (DG)</li>
                                <li><i className="fa fa-check col_1"></i> Transformer (Oil and Dry type )</li>

                                <li><i className="fa fa-check col_1"></i> Load Break Switch (LBS)
                                </li>
                                <li><i className="fa fa-check col_1"></i> LT Kioska (MCCB & ACB )
                                </li>
                                <li><i className="fa fa-check col_1"></i> LCB, VCB, RMU
                                </li>
                                <li><i className="fa fa-check col_1"></i> Metering Cubicle
                                </li>
                                <li><i className="fa fa-check col_1"></i> LT & HT UG cables
                                </li>
                                <li><i className="fa fa-check col_1"></i> All Type of LT & HT Panels
                                </li>
                            </ul>


                        </div>
                    </div>
                    <div className='col-sm-6 '>
                        <div className="card p-2" >
                            <img src={MCB} className="card-img-top" alt="power_sanction" style={{ width: "100%", height: "auto" }} />

                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-light'>
                <div className='row mx-5 py-4 clearfix'>
                    <div className='col-sm-6 '>
                        <div className="card p-2" >
                        <Carousel2 slides={[LTPanel,Electrical_Service_Slide1,Electrical_Service_Slide2,Electrical_Service_Slide3]}/>
                            {/* <img src={LTPanel} className="card-img-top" alt="power_sanction" style={{ width: "100%", height: "60vh", backgroundColor: "#d3d3d3" }} /> */}

                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="about_home_2r clearfix">
                            <h5 className='col_1'>Electrical Services</h5>
                            <p className="mgt" style={{ textAlign: "justify" }}>Discover the pinnacle of service excellence with our dedicated team. We're committed to delivering tailored solutions that go beyond expectations, ensuring your needs are not just met but exceeded. Experience unparalleled service with us, where your satisfaction is our priority. Our services include.</p>
                            <ul>
                                <li><i className="fa fa-check col_1"></i> LT Panel Maintenance and Service</li>
                                <li><i className="fa fa-check col_1"></i> Transformer Oil Filtration & Service </li>
                                <li><i className="fa fa-check col_1"></i> LBS & Metering Cubicle Service</li>

                                <li><i className="fa fa-check col_1"></i> Testing of Transformer IR values and Report
                                </li>
                                <li><i className="fa fa-check col_1"></i> Testing of LT & HT UG cable
                                </li>
                                <li><i className="fa fa-check col_1"></i> Earth Pit Reconditioning and Testing Report</li>
                                <li><i className="fa fa-check col_1"></i> Calibration Test Eeport of KWH & CT Coil</li>
                                <li><i className="fa fa-check col_1"></i> Anti-rust painting of Transformer, LBS & metering cubicle</li>
                            </ul>


                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Services