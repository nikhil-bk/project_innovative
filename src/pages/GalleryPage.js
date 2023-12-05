import React from 'react'
import GalleryHero from "../images/gallery-hero.jpg"
import Footer from '../components/Footer'
import CableLaying from "../images/CableLaying/IMG_20221020_104746.jpg"
import CableTrayFixture from "../images/CableTrayFixtures/IMG20230408154748.jpg"
import CableWorks from "../images/CableWork/20220306_082139.jpg"
import HighBayLightFixture from "../images/HighBayLightFixtures/IMG20230414110831.jpg"
import LTPanelBoardManufacturing from "../images/LTPanelBoardManufacturingAndService/IMG20230811164946.jpg"
import NewLayoutElectrification from "../images/NewLayoutElectrification/IMG_20220716_135428.jpg"

const Gallery = () => {
    return (
        <div className='mt-5 bg-light'>
            <div className="position-relative">
                <img src={GalleryHero} alt="service" style={{ width: "100%", height: "50vh", filter: "brightness(60%)" }} />
                <h5 className="position-absolute top-50 start-50 translate-middle text-center display-3 text-white fw-normal">Gallery</h5>
            </div>
            <div className='container p-5'>
                <h5 className='display-6 fw-normal text-center'>Work Showcase</h5>

            </div>
            <div className='row clearfix mx-5 mb-5'>
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
                    <h5 className='mt-2'>LT Panel Board Manufacturing and Service</h5>
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
            <Footer />
        </div>
    )
}

export default Gallery