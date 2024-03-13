import React from 'react'
import Header from '../../Common/webcommon/Header'
import { Col, Container, Row } from 'react-bootstrap';
import collage1 from '../../img/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.avif'
import Footer from '../../Common/webcommon/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faShoppingBag, faStar, faTruck, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';
import morecolor from '../../img/fa62b245-7ad3-4832-8e1f-ee97c5737a841694061938902-Stormborn-Men-Tshirts-1351694061938486-1.webp'
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function ProductDetails() {
    return (
        <>
            <Header />
            <Container fluid>
                <Container className='py-5'>
                    <Row>
                        <Col lg={7} xs={12}>
                            <div>
                                <Row className='g-2'>
                                    <Col xs={12} lg={6} className=''>
                                        <div className='overflow-hidden'>
                                            <div className='detail-img'>
                                                <img src={collage1} width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className=''>
                                        <div className='overflow-hidden'>
                                            <div className='detail-img'>
                                                <img src={collage1} width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className=''>
                                        <div className='overflow-hidden'>
                                            <div className='detail-img'>
                                                <img src={collage1} width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className=''>
                                        <div className='overflow-hidden'>
                                            <div className='detail-img'>
                                                <img src={collage1} width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className=''>
                                        <div className='overflow-hidden'>
                                            <div className='detail-img'>
                                                <img src={collage1} width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className=''>
                                        <div className='overflow-hidden'>
                                            <div className='detail-img'>
                                                <img src={collage1} width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={5} xs={12}>
                            <div className='mt-3 mt-lg-0'>
                                <div className='border-bottom pb-3'>
                                    <h4 className='fw-bold mb-1'>Stormborn</h4>
                                    <p className='lh-sm' style={{ color: '#535665', fontSize: '20px' }}>
                                        Graphic Printed Drop Shoulder Sleeves Pure Cotton Oversized T-shirt
                                    </p>
                                    <button className='border bg-white rating-box'>
                                        <span className='fw-bold mx-1'>4.1</span>
                                        <FontAwesomeIcon icon={faStar} className='mx-1' style={{ color: 'green' }} />
                                        |
                                        <span className='mx-1'>1.1 Ratings</span>
                                    </button>
                                </div>
                                <div className='py-2 border-bottom'>
                                    <div style={{ fontSize: '20px' }}>
                                        <h4 className='fw-bold d-inline-block me-2'>₹539</h4>
                                        <span className='text-secondary'>MRP</span> <span className='text-decoration-line-through text-secondary'>₹999</span>
                                        <span className='text-uppercase fw-bold ms-2' style={{ color: '#ff905a' }}>(46%off)</span>

                                    </div>
                                    <p className='text-success fw-bold' style={{ fontSize: '15px' }}>
                                        inclusive of all taxes
                                    </p>
                                    <div>
                                        <span className='text-uppercase fw-bold' style={{ fontSize: '15px' }}>more color</span>
                                        <div className='mt-3'>
                                            <Link>
                                                <img src={morecolor} width={60} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='pt-4 mb-3'>
                                        <span className='text-uppercase fw-bold me-5'>SELECT SIZE</span>
                                        <span className='text-uppercase fw-bold' style={{ color: '#FF3F6c' }}>
                                            size chart
                                            <FontAwesomeIcon icon={faChevronRight} className='ms-1' style={{ fontSize: '14px' }} />
                                        </span>
                                    </div>
                                    <div className='d-flex '>
                                        <div className='d-flex me-1 justify-content-center align-items-center border rounded-circle size-box' style={{ width: '50px', height: '50px' }}>
                                            S
                                        </div>
                                        <div className='d-flex mx-1 justify-content-center align-items-center border rounded-circle size-box' style={{ width: '50px', height: '50px' }}>
                                            M
                                        </div>
                                        <div className='d-flex mx-1 justify-content-center align-items-center border rounded-circle size-box' style={{ width: '50px', height: '50px' }}>
                                            L
                                        </div>
                                        <div className='d-flex mx-1 justify-content-center align-items-center border rounded-circle size-box' style={{ width: '50px', height: '50px' }}>
                                            XL
                                        </div>
                                        <div className='d-flex mx-1 justify-content-center align-items-center border rounded-circle size-box' style={{ width: '50px', height: '50px' }}>
                                            XLL
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <button className='text-uppercase text-white border-0 w-100 py-3 mt-4 mb-2 fw-bold rounded-1' style={{ backgroundColor: '#FF3F6c', }}>
                                                        <FontAwesomeIcon icon={faShoppingBag} className='me-3' />
                                                        add to bag
                                                    </button>
                                                </div>
                                            </Col>
                                            <Col xs={4}>
                                                <div>
                                                    <button className='text-uppercase bg-white border w-100 py-3 mt-4 mb-2 fw-bold rounded-1 btn-whish'>
                                                        <FontAwesomeIcon icon={faHeart} className='me-3' />
                                                        whishlist
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <div className='text-uppercase fw-bold'>
                                        DELIVERY OPTIONS
                                        <FontAwesomeIcon icon={faTruck} className='ms-3' />
                                    </div>
                                    <form className='mt-3'>
                                        <input type="text" className='border border-end-0 p-2' placeholder='Enter pincode ' />
                                        <input type="submit" value="Check" className='border border-start-0 bg-white p-2 fw-bold' style={{ color: '#FF3F6c' }} />
                                        <span className='d-block my-2' style={{ fontSize: '12px' }}>
                                            Please enter PIN code to check delivery time & Pay on Delivery Availability
                                        </span>
                                    </form>
                                    <div className='py-3 text-secondary lh-lg' >
                                        100% Original Products <br />
                                        Pay on delivery might be available<br />
                                        Easy 14 days returns and exchanges<br />
                                        Try & Buy might be available
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
}

