import React, { useState } from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import stormborn from '../img/c097aded-8dfb-497d-87c0-e0ef5ec5c8761695179114326StormbornMenBrownPrintedPoloCollarPocketsT-shirt1.webp';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Footer from '../Common/Footer';

export default function Product() {
    return (
        <>
            <Header />
            <Catalog />
            <Footer />
        </>
    )
}
function Catalog() {
    return (
        <>
            <Container fluid>
                <Container className='py-5'>
                    <Row className='border-bottom pb-3'>
                        <Col lg={4} xs={6}>
                            <div>
                                <h6 className='fw-bold text-uppercase m-0 p-0'>
                                    Filters
                                </h6>
                            </div>
                        </Col>
                        <Col lg={8} xs={6}>
                            <div className='text-end'>
                                <select name="" id="my select" style={{ width: "200px" }}>
                                    <option value="">Sort by: Recommended</option>
                                    <option value="">Sort by: What's new</option>
                                    <option value="">Sort by: Popularity</option>
                                    <option value="">Sort by: Better Discount</option>
                                    <option value="">Sort by: Price low to high</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2} xs={4} className='border-end px-0'>
                            <div>
                                <div className='p-3 border-bottom'>
                                    <h6 className='text-uppercase fw-bold mb-3' style={{ fontSize: '15px' }}>
                                        CATEGORIES
                                    </h6>
                                    <ul className='m-0 p-0'>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className='p-3 border-bottom'>
                                    <h6 className='text-uppercase fw-bold mb-3' style={{ fontSize: '15px' }}>
                                        brand
                                    </h6>
                                    <ul className='m-0 p-0'>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Tshirt
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className='p-3 border-bottom'>
                                    <h6 className='text-uppercase fw-bold mb-3' style={{ fontSize: '15px' }}>
                                        price
                                    </h6>
                                    <ul className='m-0 p-0'>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Rs.124 to Rs.8343
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(122952)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Rs.124 to Rs.8343
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(122952)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Rs.124 to Rs.8343
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(122952)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Rs.124 to Rs.8343
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(122952)</span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                Rs.124 to Rs.8343
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(122952)</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className='p-3 border-bottom'>
                                    <h6 className='text-uppercase fw-bold mb-3' style={{ fontSize: '15px' }}>
                                        color
                                    </h6>
                                    <ul className='m-0 p-0'>
                                        <li>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                <div className='rounded-circle border mx-1 d-inline-block' style={{ width: '15px', height: '15px', backgroundColor: 'black' }}>
                                                </div>
                                                black
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                <div className='rounded-circle border mx-1 d-inline-block' style={{ width: '15px', height: '15px', backgroundColor: 'black' }}>
                                                </div>
                                                black
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                <div className='rounded-circle border mx-1 d-inline-block' style={{ width: '15px', height: '15px', backgroundColor: 'black' }}>
                                                </div>
                                                black
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                <div className='rounded-circle border mx-1 d-inline-block' style={{ width: '15px', height: '15px', backgroundColor: 'black' }}>
                                                </div>
                                                black
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                <div className='rounded-circle border mx-1 d-inline-block' style={{ width: '15px', height: '15px', backgroundColor: 'black' }}>
                                                </div>
                                                black
                                                <span className='ms-1' style={{ fontSize: "10px" }}>(127518)</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className='p-3 '>
                                    <h6 className='text-uppercase fw-bold mb-3' style={{ fontSize: '15px' }}>
                                        discount range
                                    </h6>
                                    <ul className='m-0 p-0'>
                                        <li className='d-flex align-items-center'>
                                            <input type="radio" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                10% and above
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="radio" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                10% and above
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="radio" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                10% and above
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="radio" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                10% and above
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="radio" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                10% and above
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="radio" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                10% and above
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <input type="radio" className='me-2 check' />
                                            <label htmlFor="" className='' style={{ fontSize: '14px', color: '#282c3f' }}>
                                                10% and above
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={10} xs={8}>
                            <div className='p-2 py-3'>
                                <Row className='row-cols-lg-5 row-cols-2 gy-4'>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='border product-box '>
                                            <Link style={{ color: '#282c3f' }}>
                                                <div className='position-relative product-img'>
                                                    <img src={stormborn} className='img-fluid' />
                                                    <div className='position-absolute px-3 py-2 bg-white w-100 product-pop'>
                                                        <button className='text-center bg-white text-uppercase p-2 w-100 fw-bold border mb-2' style={{ fontSize: "14px" }}>
                                                            <FontAwesomeIcon icon={faHeart} className='me-2' />
                                                            whishlist
                                                        </button>
                                                        <span>Size:xs</span>
                                                    </div>
                                                </div>
                                                <div className='p-2'>
                                                    <h6 className='fw-bold mb-0'>Stormborn</h6>
                                                    <p className='mb-1' style={{ fontSize: '14px', color: '#535766' }}>Pure Cotton Oversized T-shirt</p>
                                                    <div>
                                                        <span className='fw-bold' style={{ fontSize: '14px' }}>Rs.389</span>
                                                        <span className='text-decoration-line-through ms-1' style={{ fontSize: '12px' }}>Rs.1499</span>
                                                        <span className='ms-1 d-block d-lg-inline-block' style={{ fontSize: '12px', color: '#ff905a' }}>(74%OFF)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}