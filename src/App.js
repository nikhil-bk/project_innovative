import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavbarComponent from './components/Navbar'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Gallery from './pages/GalleryPage'



const App = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App