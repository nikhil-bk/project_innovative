import React from 'react'
import Carousel from "../components/Carousel"
import Slide1 from "../images/pref_1.jpg"
import Slide2 from "../images/pref_2.jpg"
import Slide3 from "../images/pref_3.jpg"
import Slide4 from "../images/pref_4.jpg"
import AboutUsComponent from '../components/AboutUsComponent'
import VissionMisson from '../components/VissionMisson'
import AreaofExpertise from '../components/AreaofExpertise'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'

const Home = () => {
  let slides = [Slide1, Slide2, Slide3, Slide4]
  return (
    <div className='w-full'>
      <Carousel slides={slides} />
      <AboutUsComponent />
      <VissionMisson/>
      <AreaofExpertise/>
      <OurServices/>
      <Footer/>
      
    </div>
  )
}

export default Home
