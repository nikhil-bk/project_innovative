import React, { useContext, useEffect, useState } from 'react'
import Logo from "../images/SquadLogo.png"
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css"
import { DataContext } from '../context/GlobalContext';


const NavbarComponent = () => {
    const state = useContext(DataContext);
    const [isLogin, setIsLogin] = state.isLogin;
    const logOutSubmit = () => {
        localStorage.clear();
        setIsLogin(false);
        setShowOffcanvas(false);
        window.scrollTo(0, 0)
    }
    const [pathname, setPathname] = useState(window.location.pathname)
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICES", link: "/services" },
        { name: "GALLERY", link: "/gallery" },
        { name: "PROJECTS", link: "/projects" },
        { name: "ABOUT US", link: "/about-us" },
        { name: "CONTACT", link: "/contact-us" },
        { name: "ADMIN", link: "/admin" },
        { name: "LOGIN", link: "/login" }

    ]
    const handleLinkClick = (link) => {
        setPathname(link);
        setShowOffcanvas(false);
        window.scrollTo(0, 0) // Close offcanvas when a link is clicked
    };
    useEffect(() => {
        console.log(pathname)
    }, [pathname])
    return (
        <>

            <Navbar expand="lg" bg="light" data-bs-theme="light" fixed='top' className='shadow-lg w-full'>
                <Container fluid className='mx-4'>
                    <Navbar.Brand href="/" >
                        <img
                            src={Logo}
                            width="180"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={() => setShowOffcanvas(!showOffcanvas)} />
                    <Navbar.Offcanvas
                        show={showOffcanvas} onHide={() => setShowOffcanvas(false)}
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                <img
                                    src={Logo}
                                    width="180"
                                    height="60"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {Links.map((each, idx) => {
                                    if (each.link === "/admin") {
                                        return isLogin ? <Link to={each.link} onClick={() => handleLinkClick(each.link)} className={`link-item ${pathname === each.link ? 'active-link' : ''} mx-2 fs-5 fw-bold `} style={{ textDecoration: "None" }} >{each.name}
                                        </Link> : ''
                                    } else if (each.name === "LOGIN") {
                                        return <Link to={isLogin ? "/" : "/login"} onClick={logOutSubmit} className={`link-item ${pathname === each.link ? 'active-link' : ''} mx-2 fs-5 fw-bold `} style={{ textDecoration: "None" }} >{isLogin ? "LOGOUT" : "LOGIN"}</Link>
                                    }
                                    else {
                                        return <Link to={each.link} onClick={() => handleLinkClick(each.link)} className={`link-item ${pathname === each.link ? 'active-link' : ''} mx-2 fs-5 fw-bold `} style={{ textDecoration: "None" }} >{each.name}
                                        </Link>
                                    }


                                }

                                )}

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarComponent

{/* <div className='shadow-md w-full fixed top-0 left-0'>
{console.log(pathname)}
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div>
            <span>
                <img src={Logo} width={180} alt="logo" />
            </span>
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
          
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white transition-all duration-500 ease-in md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={link.link} onClick={()=>setPathname(link.link)}className={`text-gray-800 hover:text-gray-400 transition duration-300 hover:border-b-4 hover:border-orange-400 ${pathname===link.link? 'border-b-4 border-orange-400':''}`}>{link.name}</Link>
                </li>
            ))}
        </ul>
    </div>
</div> */}