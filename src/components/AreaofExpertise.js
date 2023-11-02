import React from 'react'
import ResedentialService from "../images/resedential_service.jpg"
import CommercialService from "../images/commercial_services.jpeg"
import IndustrailService from "../images/industrail_service.jpeg"

const AreaofExpertise = () => {
    return (
        <section className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="text-center clearfix">
                        <div className="col-sm-12">
                            <h1 className="mgt">Area of <span className="col_1">Expertise</span></h1>
                            {/* <p>At <span className='col_1 fw-bold'>Innovative Electrical Solutions</span>, we specialize in a wide range of electrical services, catering to residential, commercial, and industrial clients. With decades of experience in the field, our team of certified electricians is well-equipped to handle projects of any size and complexity.</p> */}
                        </div>
                        <div className='row clearfix'>

                    
                        <div className='col-sm-4 my-2'>
                            <div className="card h-100 shadow-lg" >
                                <img src={ResedentialService} className="card-img-top" alt="..." style={{height:"250px"}} />
                                <div class="card-body">
                                    <h5 className="card-title"><span className="col_1">Residential Services</span></h5>
                                    <p className="card-text" style={{textAlign:"justify"}}>For homeowners, we offer a comprehensive array of residential electrical services. From simple outlet installations and lighting upgrades to complete home wiring, we ensure the safety and functionality of your electrical systems. Our focus is on providing solutions that meet your specific needs while adhering to the highest safety standard.</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-sm-4 my-2'>
                            <div className="card h-100 shadow-lg" >
                                <img src={CommercialService} className="card-img-top " alt="..." style={{height:"250px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title"><span className="col_1">Commercial Services</span></h5>
                                    <p className="card-text" style={{textAlign:"justify"}}>In the commercial sector, we understand the critical role that electrical systems play in the smooth operation of businesses. Innovative Electrical Solutions offers a full suite of services, including electrical panel upgrades, energy-efficient lighting installations, and emergency backup systems. We work closely with businesses to ensure minimal disruption during installations or repairs, keeping your operations running smoothly.</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-sm-4 my-2'>
                            <div className="card h-100 shadow-lg" >
                                <img src={IndustrailService} className="card-img-top" alt="..." style={{height:"250px"}}  />
                                <div class="card-body">
                                    <h5 className="card-title"><span className="col_1">Industrial Services</span></h5>
                                    <p className="card-text" style={{textAlign:"justify"}}>In the industrial sector, reliability is paramount. We have extensive experience working with industrial clients to maintain and upgrade their electrical infrastructure. Our services include motor control, industrial automation, power distribution, and machinery installation. We prioritize safety, efficiency, and precision in every project we undertake.</p>
                                </div>

                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AreaofExpertise