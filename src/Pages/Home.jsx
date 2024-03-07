import React from 'react'
import coupon from '../img/8a548caf-aa4d-4f30-a711-aaed83066d3d1709149370029-500.webp'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Common/Header'
import banlft from '../img/1d6a73f0-baea-4b6d-9aeb-81675e4678f61709192319365-DESKTOP-HP-BANNER_01.jpg'
import banrgt from '../img/01ed67ac-1f01-4c37-806c-95dde9faa97b1709192350168-DESKTOP-HP-BANNER_02.jpg'
import couponcorner from '../img/7f305074-ff06-4951-9794-1c34333656a01709191564322-COUPONS-CORNER-----5.webp'
import lftcopn from '../img/b3dbb935-67af-4262-9ae3-3b61c1e89dcb1709191327030-MYNTRA100-----6.webp'
import rgtcopn from '../img/1d662365-2b22-49fc-b5ff-e37e24a136081709191017933-MYNTRA200-----7.webp'
import categoryshop from '../img/756078d0-dae6-4e01-8368-faffc1d4ee4e1709191522084-Shop-By-Category--1-.webp'
import Footer from '../Common/Footer'
import ethnicwear from '../img/d9266e24-722e-4f45-94c7-795ee4abfb561709191799077-Shop-By-Category_HP_02.webp'
import offer from '../img/f15c73a7-d1ab-43e8-83c7-e128f5791c761709190632097-App-Install-Banner-----5.webp'

export default function Home() {
    return (
        <>
            <Header />
            <Coupon />
            <Banner />
            <Corner />
            <Category />
            <Offer />
            <Footer />
        </>
    )
}

function Coupon() {
    return (
        <>
            <Container fluid className='px-0'>
                <img src={coupon} width="100%" />
            </Container>
        </>
    )
}
function Banner() {
    return (
        <>
            <Container fluid className='d-flex justify-content-center'>
                <Row className='w-100'>
                    <Col xs={6} className='p-0'>
                        <a href="" ><img src={banlft} width="100%" /></a>
                    </Col>
                    <Col xs={6} className='p-0'>
                        <a href="" ><img src={banrgt} width="100%" /></a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
function Corner() {
    return (
        <>
            <Container fluid className='p-0'>
                <Row>
                    <Col xs={12}>
                        <img src={couponcorner} width="100%" />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs={6}>
                        <div>
                            <a href=""><img src={lftcopn} width="100%" /></a>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <a href=""><img src={rgtcopn} width="100%" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
function Category() {
    return (
        <>
            <Container fluid className='p-0'>
                <Row>
                    <Col xs={12}>
                        <img src={categoryshop} width="100%" />
                    </Col>
                </Row>
                <Row className='row-cols-lg-5 justify-content-center '>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <a href="">
                                <img src={ethnicwear} alt="" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
function Offer() {
    return (
        <>
            <Container fluid className='p-0 my-4'>
                <div className='text-center'>
                    <a href="">
                        <img src={offer} width="100%" />
                    </a>
                </div>
            </Container>
        </>
    )
}