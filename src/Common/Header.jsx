import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../img/myntra.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import searchicon from '../img/8666693_search_icon.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-white shadow-sm">
            <Container fluid className='px-4'>
                <Navbar.Brand href="#">
                    <img src={logo} width={100} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand`}
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                            <img src={logo} width={100} />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='justify-content-between align-items-center '>
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='fw-bold text-black text-uppercase position-relative '>
                                Men
                                <ul className='sub-cat position-absolute top-100 left-0 bg-white shadow p-0'>
                                    <li className='px-4 py-2 pe-5'>
                                        <Link>Topwear</Link>
                                    </li>
                                    <li className='px-4 py-2 pe-5'>
                                        <Link>Topwear </Link>
                                    </li>
                                    <li className='px-4 py-2 pe-5'>
                                        <Link>Topwear</Link>
                                    </li>
                                    <li className='px-4 py-2 pe-5'>
                                        <Link>Topwear</Link>
                                    </li>
                                    <li className='px-4 py-2 pe-5'>
                                        <Link>Topwear</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link className='fw-bold text-black text-uppercase'>Women</Nav.Link>
                            <Nav.Link className='fw-bold text-black text-uppercase'>Kids</Nav.Link>

                        </Nav>
                        <Form className="pe-5 position-relative ms-auto me-5 me-lg-0" >
                            <input type="text" className='search-box bg-secondary-subtle p-2  border-0 rounded-1 me-5 ps-5' placeholder='Search for products,brands and more' />
                            <img src={searchicon} width={20} className='position-absolute ' style={{ top: '10px', left: '10px' }} />
                        </Form>

                        <Nav className='align-items-center flex-row'>

                            <Nav.Link href="#action1" className='fw-semibold text-black px-2 fs-5' >
                                <div className='text-center'>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    <div className='fw-medium' style={{ fontSize: '12px' }}>
                                        Bag
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action1" className='fw-bold text-black px-2 fs-5'>
                                <div className='text-center'>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <div className='fw-medium' style={{ fontSize: '12px' }}>
                                        Whishlist
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#action1" className='fw-bold text-black px-2 fs-5'>
                                <div className='text-center'>
                                    <FontAwesomeIcon icon={faUser} />
                                    <div className='fw-medium' style={{ fontSize: '12px' }}>
                                        Profile
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
