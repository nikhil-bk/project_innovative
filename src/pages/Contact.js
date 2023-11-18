import React, { useState } from 'react'
import Footer from '../components/Footer'
import ContactUs from "../images/contact-us-page.jpg"
import Whatsapp from "../images/contact/whatsapp.png"
// import Location from "../images/contact/location-pin.png"
import Location from "../images/contact/location.png"
import WorkingHours from "../images/contact/working-time.png"
import WorkingHours2 from "../images/contact/workinghours.png"
import Gmail from "../images/contact/gmail.png"
import axios from 'axios'


const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [contact_details, set_contact_details] = useState({
        name: "",
        email: "",
        phone_number: "",
        message: "",
        company_name: "",
        enquiry_about:""

    })
    let [options, setOptions] = useState([
        { value: "choose_options", label: 'Choose Options', checked: false },
        { value: "lt_panel_boards", label: 'LT Panel Boards', checked: false },
        { value: "periodical_ceig_approvals", label: 'Periodical CEIG Approvals', checked: false },
        { value: "electrical_switch_gears", label: 'Electrical Switch Gears', checked: false },
        { value: "electrical_sevices", label: 'Electrical Services', checked: false },
        { value: "industries_power_sanction", label: 'Industrial Power Sanction (LT-5, HT)', checked: false },
        { value: "commercial_power_sanction", label: 'Commercial Power Sanction (LT-3)', checked: false },
        { value: "domestic_power_sanction", label: 'Domestic Power Sanction (LT-2)', checked: false },
        { value: "temporary_power_sanction", label: 'Temporary Power Sanction (LT-7)', checked: false },
        { value: "new_layout_electrififcation_work", label: 'New layout Electrification work (Overhead and UG cable type layout)', checked: false },
        { value: "ms_building_electrification", label: ' M S Building Electrification', checked: false },
        { value: "irrigation_power_sanction", label: 'Irrigation Power Sanction', checked: false },
        { value: "pole_shiftiing", label: 'Pole shifting and erection work and etc', checked: false },

    ]);
    const handleChange = (prop) => (event) => {
        set_contact_details({ ...contact_details, [prop]: event.target.value })
    }
    function handleSubmit(event) {
        // event.stopPropogation()
        setLoading(true)
        console.log("submit clicked")
        const BASE_URL="https://project-innovative-backend-git-master-nikhil-bk.vercel.app/api/ies/v1/enquiry/email"
        const LOCAL_BASE_URL="http://localhost:5000/api/ies/v1/enquiry/email"
        axios.post(BASE_URL, contact_details).then(res => {
            setLoading(false)
            set_contact_details({
                name: "",
                email: "",
                phone_number: "",
                message: "",
                company_name: "",
                enquiry_about:"Choose Options"
            })
            alert("Form submitted Successfully!!")
        }).catch(err => {
            setLoading(false)
            set_contact_details({
                name: "",
                email: "",
                phone_number: "",
                message: "",
                company_name: "",
                enquiry_about:"Choose Options"
            })
            console.log(err)
        })
    }
    return (
        <div className='mt-5 bg-light'>
            <div className="position-relative">
                <img src={ContactUs} alt="service" style={{ width: "100%", height: "50vh", filter: "brightness(60%)" }} />
                <h5 className="position-absolute top-50 start-50 translate-middle text-center display-3 text-white fw-normal">CONTACT US</h5>
            </div>
            <div className='container p-2'>

                <div className='container'>
                    <div className='row py-4'>

                        <div className='col-sm-6 my-2'>
                            <h5 className='display-6 fw-normal'>Let's make something awesome <span className='col_1'>together</span></h5>
                            <div className='row'>
                                <div className='col-sm-6 d-flex justify-content-center' >
                                    <div className='p-2 text-center   rounded-5 ' >
                                        <div className='p-2'>
                                            <img src={Whatsapp} alt="whatsapp" width={50} />
                                        </div>
                                        <div>
                                            <h5>
                                                Phone Number
                                            </h5>
                                            <p>
                                                +91 9876543210
                                            </p>

                                        </div>

                                    </div>
                                </div>
                                <div className='col-sm-6 d-flex justify-content-center' >
                                    <div className='p-2 text-center   rounded-5 ' >
                                        <div className='p-2'>
                                            <img src={Gmail} alt="whatsapp" width={50} />
                                        </div>
                                        <div>
                                            <h5>
                                                Email
                                            </h5>
                                            <p>
                                                abcdef@gmail.com
                                            </p>

                                        </div>

                                    </div>
                                </div>
                                <div className='col-sm-6 d-flex justify-content-center' >
                                    <div className='p-2 text-center   rounded-5 ' >
                                        <div className='p-2'>
                                            <img src={Location} alt="whatsapp" width={50} />
                                        </div>
                                        <div>
                                            <h5>
                                                Address
                                            </h5>
                                            <p>
                                                Innovative Electrical Solution,2nd main,MG Road, Tumkur,Karnataka
                                            </p>

                                        </div>

                                    </div>
                                </div>
                                <div className='col-sm-6 d-flex justify-content-center' >
                                    <div className='p-2 text-center rounded-5 ' >
                                        <div className='p-2'>
                                            <img src={WorkingHours2} alt="working-hours" width={70} />
                                        </div>
                                        <div>
                                            <h5>
                                                Working Hours
                                            </h5>
                                            <p>
                                                Mon-Sat : 9:00am - 5:00pm
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-sm-6 my-2'>
                            <div className="card" >
                                <div className='card-title m-auto p-3'>
                                    <h5><span className='col_1'>Discover, Inquire, Connect.</span> Your questions make a difference.</h5>
                                </div>
                                <div className="card-body pt-0 ">


                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Full Name</label>
                                            <input type="text" value={contact_details.name} onChange={handleChange("name")} className="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Email</label>
                                            <input type="email" value={contact_details.email} onChange={handleChange("email")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Your Email" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Phone Number</label>
                                            <input type="number" value={contact_details.phone_number} onChange={handleChange("phone_number")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Your Phone" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Company Name</label>
                                            <input type="text" value={contact_details.company_name} onChange={handleChange("company_name")} className="form-control bg-light" id="exampleInputEmail1" placeholder="Your Company" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Enquiry About</label>
                                            <select className="form-control bg-light" onChange={handleChange("enquiry_about")}>
                                          
                                                {options.map((each) => (
                                                    <option key={each.value} value={each.label}>{each.label}</option>
                                                ))}
                                            </select>

                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Write Message</label>
                                            <textarea className="form-control bg-light" value={contact_details.message} onChange={handleChange("message")} id="exampleFormControlTextarea1" placeholder="Your Enquiry" rows="5"></textarea>
                                        </div>

                                    </form>
                                    <button disabled={loading} onClick={(e) => handleSubmit(e)} className="btn text-white fw-bold m-2" style={{ backgroundColor: "#f47629" }}>{loading ? "Submitting" : "Submit"}</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-2'>
                <h5 className='display-5 text-center'>Our Presence In <span className='col_1'>Karnataka</span></h5>
            </div>
            <div className='row clearfix  m-5'>


                <div className='col-sm-4 my-2'>
                    <div className="card h-100 shadow-lg">

                        <div class="card-body">
                            <h5 className="card-title text-center"><span className="">Tumkur</span></h5>
                            <div className='m-auto' style={{ border: "2px solid orange", width: "4rem" }}></div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i className="fa-solid fa-location-dot col_1"></i> company-1 name, 1st main,1st accross, MG road, Tumkur 572102</li>
                            <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                            <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                        </ul>

                    </div>
                </div>
                <div className='col-sm-4 my-2'>
                    <div className="card h-100 shadow-lg" >

                        <div className="card-body">
                            <h5 className="card-title text-center"><span className="">Bangalore</span></h5>
                            <div className='m-auto' style={{ border: "2px solid orange", width: "4rem" }}></div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i className="fa-solid fa-location-dot col_1"></i> Company-2 name, 1st main,1st accross, MG road, Bangalore 572102</li>
                            <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                            <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                        </ul>

                    </div>
                </div>
                <div className='col-sm-4 my-2'>
                    <div className="card h-100 shadow-lg ">

                        <div class="card-body">
                            <h5 className="card-title text-center"><span className="">Kolar</span></h5>
                            <div className='m-auto' style={{ border: "2px solid orange", width: "4rem" }}></div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i className="fa-solid fa-location-dot col_1"></i> Company-3 name, 1st main,1st accross, MG road, Kolar 572102</li>
                            <li class="list-group-item"><i className="fa-solid fa-phone col_1"></i> 9876543210</li>
                            <li class="list-group-item"><i className="fa-solid fa-envelope col_1"></i> abc@gmail.com</li>

                        </ul>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact