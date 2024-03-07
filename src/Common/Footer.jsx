import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './footer.css';
import playstore from '../img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png'
import applestore from '../img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import hundred from '../img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png'
import forteen from '../img/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png'

export default function Footer() {
    return (
        <>
            <Container fluid style={{ backgroundColor: '#fafbfc' }}>
                <Container className='py-3 border-bottom'>
                    <Row>
                        <Col lg={2} xs={6}>
                            <div>
                                <div className='mb-2'>
                                    <h6 className='text-uppercase fw-bold' style={{ fontSize: '12px' }}>
                                        online Shopping
                                    </h6>
                                    <ul className='p-0 m-0 foot-list py-3'>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className='text-uppercase fw-bold' style={{ fontSize: '12px' }}>
                                        online Shopping
                                    </h6>
                                    <ul className='p-0 m-0 foot-list py-3'>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Corporate Information</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} xs={6}>
                            <div>
                                <div>
                                    <h6 className='text-uppercase fw-bold' style={{ fontSize: '12px' }}>
                                        CUSTOMER POLICIES
                                    </h6>
                                    <ul className='p-0 m-0 foot-list py-3'>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                        <li>
                                            <Link>Men</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} xs={6}>
                            <div>
                                <div className='mb-4'>
                                    <h6 className='text-uppercase fw-bold' style={{ fontSize: '12px' }}>
                                        EXPERIENCE MYNTRA APP ON MOBILE
                                    </h6>
                                    <div className='mt-4'>
                                        <a href="">
                                            <img src={playstore} width={140} className='me-3' />
                                        </a>
                                        <a href="">
                                            <img src={applestore} width={140} />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h6 className='text-uppercase fw-bold' style={{ fontSize: '12px' }}>
                                        Keep in touch
                                    </h6>
                                    <ul className='m-0 p-0 social-list d-flex gap-3'>
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon icon={faFacebookSquare} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon icon={faYoutube} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon icon={faInstagramSquare} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} xs={6}>
                            <div>
                                <Row className='mb-4'>
                                    <Col xs={1}>
                                        <div>
                                            <img src={hundred} width={60} />
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <div className='ps-3 ps-lg-0' style={{ marginLeft: '30px' }}>
                                            <p className='fs-6 lh-sm'>
                                                <span className='fw-bold'>100% ORIGINAL</span> guarantee for all products at myntra.com
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='align-items-center'>
                                    <Col lg={1}>
                                        <div>
                                            <img src={forteen} width={60} />
                                        </div>
                                    </Col>
                                    <Col lg={8}>
                                        <div style={{ marginLeft: '30px' }}>
                                            <p className='fs-6 lh-sm'>
                                                <span className='fw-bold'>Return within 14days</span>  of receiving your order
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className='py-4'>
                    <Row>
                        <Col xs={6} >
                            <div>
                                <div className='mb-2'>
                                    <h6 className='text-uppercase fw-bold' style={{ fontSize: '15px' }}>
                                        Registered Office Address
                                    </h6>
                                    <p className='lh-base' style={{ color: '#696b79', fontSize: '15px' }}>
                                        Buildings Alyssa,<br />
                                        Begonia and Clover situated in Embassy Tech Village,<br />
                                        Outer Ring Road,<br />
                                        Devarabeesanahalli Village,<br />
                                        Varthur Hobli,<br />
                                        Bengaluru – 560103, India
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} className='align-self-end'>
                            <div className='text-end me-lg-5 pe-lg-5'>
                                <p style={{color: '#696b79',fontSize:'15px'}}>
                                    CIN: U72300KA2007PTC041799 <br/>
                                    Telephone: <a href="tel:+91-80-61561999">+91-80-61561999</a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
