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
        <Navbar expand="lg" className="bg-body-white shadow-sm p-0">
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
                            <Link className='fw-bold text-black text-uppercase position-relative d-block px-2 py-lg-4 py-2 cat'>
                                Men
                                <ul className='sub-cat position-absolute left-0 bg-white shadow p-0 m-0' style={{ top: '100%', width: '200px' }}>
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
                            </Link>
                            <Link className='fw-bold text-black text-uppercase position-relative d-block px-2 py-lg-4 py-2 cat'>
                                Women
                                <ul className='sub-cat position-absolute left-0 bg-white shadow p-0 m-0' style={{ top: '100%', width: '200px' }}>
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
                            </Link>
                            <Link className='fw-bold text-black text-uppercase position-relative d-block px-2 py-lg-4 py-2 cat'>
                                Kids
                                <ul className='sub-cat position-absolute left-0 bg-white shadow p-0 m-0' style={{ top: '100%', width: '200px' }}>
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
                            </Link>

                        </Nav>
                        <Form className="pe-5 position-relative ms-auto me-5 me-lg-0" >
                            <input type="text" className='search-box bg-secondary-subtle p-2  border-0 rounded-1 me-5 ps-5' placeholder='Search for products,brands and more' />
                            <img src={searchicon} width={20} className='position-absolute ' style={{ top: '10px', left: '10px' }} />
                        </Form>

                        <Nav className='align-items-center flex-row'>
                            <Link href="#action1" className='fw-semibold text-black px-2 fs-5 py-lg-3 py-2 position-relative profile' >
                                <div className='text-center'>
                                    <FontAwesomeIcon icon={faUser} />
                                    <div className='fw-medium' style={{ fontSize: '12px' }}>
                                        Profile
                                    </div>
                                </div>
                                <div className='position-absolute top-100 bg-white text-secondary shadow p-3 profile-box' style={{ width: '250px', right: '-150%' }}>
                                    <div className='border-bottom pb-3'>
                                        <h6 className='m-0' style={{ lineHeight: '0.3' }}>Welcome</h6>
                                        <span className='' style={{ fontSize: '12px' }}>To aceess account and manage order</span>
                                        <div>
                                            <button className='text-uppercase p-2 bg-white fw-bold border login-btn mt-2' style={{ fontSize: '14px', color: '#FF3F6c' }}>login/signup</button>
                                        </div>
                                    </div>
                                    <ul className='sub-profile m-0 p-0 py-2 border-bottom'>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                    </ul>
                                    <ul className='sub-profile m-0 p-0 py-2 '>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                        <li>
                                            <Link className=' text-secondary'>Orders</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Link>
                            <Link href="#action1" className='fw-bold text-black px-2 fs-5 py-lg-3 py-2'>
                                <div className='text-center'>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <div className='fw-medium' style={{ fontSize: '12px' }}>
                                        Whishlist
                                    </div>
                                </div>
                            </Link>
                            <Link href="#action1" className='fw-bold text-black px-2 fs-5 py-lg-3 py-2'>
                                <div className='text-center'>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    <div className='fw-medium position-relative' style={{ fontSize: '12px' }}>
                                        Bag
                                    </div>
                                </div>
                            </Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
