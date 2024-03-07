import React from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <>
            <Header />
            <Container fluid className='px-lg-0 w-100' style={{backgroundColor:'#fdeeec',height:'100vh'}}>
                <Container>
                    <Row className='justify-content-center pt-5'>
                        <Col lg={4} xs={12} className='bg-white'>
                            <div className='p-3'>
                                <h4 className='fw-bold pt-5' style={{color:'#424553'}}>Login to your account</h4>
                                <form action="">
                                    <input type="text" placeholder='Email or Mobile Number' className='w-100 my-3 p-2 border username-box'/>
                                    <input type="text" placeholder="Password" className='w-100 my-3 p-2 border'/>
                                    <input type="submit" value='login' className='w-100 py-2 text-white fw-bold text-uppercase border-0 my-3' style={{backgroundColor:'#FF3F6c'}} />
                                    <div className='py-3' style={{fontSize:'12px'}}>
                                        Forgot your password?<Link className='fw-bold' style={{color:'#ff3f6c'}}>Reset here</Link>
                                    </div>
                                    <div className='py-3 mb-5' style={{fontSize:'12px'}}>
                                        Have trouble Logging in?<Link className='fw-bold' style={{color:'#ff3f6c'}}>Get help</Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
