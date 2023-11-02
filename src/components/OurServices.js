import React from 'react'
import CableLaying from "../images/CableLaying/IMG_20221020_104746.jpg"
import CableTrayFixture from "../images/CableTrayFixtures/IMG20230408154748.jpg"
import CableWorks from "../images/CableWork/20220306_082139.jpg"
import HighBayLightFixture from "../images/HighBayLightFixtures/IMG20230414110831.jpg"
import LTPanelBoardManufacturing from "../images/LTPanelBoardManufacturingAndService/IMG20230811164946.jpg"
import NewLayoutElectrification from "../images/NewLayoutElectrification/IMG_20220716_135428.jpg"
const OurServices = () => {
    return (
        <section className='my-4'>
            <div className="container">
                <div className="text-center clearfix">
                    <div className="col-sm-12">
                        <h1 className="mgt">Our <span className="col_1">Services</span></h1>
                    </div>
                    <div className='row clearfix'>
                        <div className='col-sm-4  mt-2 '>
                            <img src={CableLaying} className="rounded-3" alt="..." style={{ width: "100%", height: "208px" }} />
                            <h5 className='mt-2'>Cable Laying</h5>
                        </div>
                        <div className='col-sm-4 mt-2 '>
                            <img src={CableTrayFixture} className="rounded-3" alt="..." style={{ width: "100%", height: "208px" }} />
                            <h5 className='mt-2'>Cable Tray Fixtures</h5>
                        </div>
                        <div className='col-sm-4 mt-2 '>
                            <img src={HighBayLightFixture} className="rounded-3" alt="..." style={{ width: "100%", height: "208px" }} />
                            <h5 className='mt-2'>High Bay Light Fixtures</h5>
                        </div>
                        <div className='col-sm-4 mt-2 '>

                            <img src={LTPanelBoardManufacturing} className="rounded-3" alt="..." style={{ width: "100%", height: "208px" }} />
                            <h5 className='mt-2'>LT Panel board manufacturing and service</h5>
                        </div>
                        <div className='col-sm-4 mt-2 '>

                            <img src={NewLayoutElectrification} className="rounded-3" alt="..." style={{ width: "100%", height: "208px" }} />
                            <h5 className='mt-2'>New Layout Electrification</h5>
                        </div>
                        <div className='col-sm-4 mt-2  '>
                            <img src={CableWorks} className="rounded-3" alt="..." style={{ width: "100%", height: "208px" }} />
                            <h5 className='mt-2'>Cable Works</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices