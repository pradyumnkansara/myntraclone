import React, { useContext } from 'react'
import AdminHeader from '../../Common/admincommon/AdminHeader'
import Dashboard from '../../Common/admincommon/Dashboard'
import { Col, Container, Row } from 'react-bootstrap'
import { maincontext } from '../../Context/MainContext'

export default function AdminPage() {
    let { changeMenu, setChangeMenu } = useContext(maincontext)
    return (
        <>
            <AdminHeader />
            <Container fluid className='ps-0'>
                <Row>
                    <Col lg={changeMenu ? 1 : 2} style={{transition:'0.5s'}}>
                        <div>
                            <Dashboard />
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className='ms-5 mt-5'>
                            <h2>Welcome To Admin Panel</h2>
                            <Row>
                                <Col lg={3}>
                                    <div className='text-white rounded-3 p-3' style={{ background: 'rgb(125,160,250)' }}>
                                        <span>Today’s Bookings</span>
                                        <h2>4006</h2>
                                        <span>10.00% (30 days)</span>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className='text-white rounded-3 p-3' style={{ background: 'rgb(71,71,161)' }}>
                                        <span>Today’s Bookings</span>
                                        <h2>4006</h2>
                                        <span>10.00% (30 days)</span>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className='text-white rounded-3 p-3' style={{ background: 'rgb(121,120,233)' }}>
                                        <span>Today’s Bookings</span>
                                        <h2>4006</h2>
                                        <span>10.00% (30 days)</span>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className='text-white rounded-3 p-3' style={{ background: 'rgb(243,121,126)' }}>
                                        <span>Today’s Bookings</span>
                                        <h2>4006</h2>
                                        <span>10.00% (30 days)</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
