import React from 'react'
import Header from '../Common/Header'
import { Col, Container, Row } from 'react-bootstrap'

export default function ContactUs() {
  return (
    <>
     <Header />
     <Main/>
     <Middle/>
    </>

   
  )
}

function Main(){
    return(
        <>
       <Container fluid>
       <Container >
        <div className='cointainer border-bottom' >
        <Row>
            <Col lg={3}>
             <div>
                <h4>HELP CENTER</h4>
                <p>We are here to help you</p>
             </div>
            </Col>
            <Col lg={9}>
            <div>
            <Row>
                <Col>
                 <Row className='border'>
                    
                    <Col>
                    <div className='p-2' style={{fontSize:"12px", fontWeight :"700px"}}>TRACK, CANCEL, RETURN/EXCHANGE
                        <br/>
                        <h6 style={{ fontSize: '12px' }}>Manage your purchases </h6>
                    </div>
                    </Col>
                    <Col>
                <div className='text-end'>
                    <button className='m-2 px-3 py-2 rounded' style={{border:"1px solid #14cda8" ,background:"white" ,fontSize:"12px" ,color:"#14cda8" ,fontWeight:"700"}}>ORDERS
                    </button></div>
                </Col>

                 </Row>
                </Col>
                
            </Row>
            </div>
            </Col>

        </Row>
        </div>
        
       </Container>
       
       </Container>
        </>
    )
}
function Middle(){
    return(
        <>
     <Container fluid> 
        <Container>
         <div className='cointainer middle'> 
        <Row>
            <Col lg={3}>
              <div className='pe-3 border-end position-relative middle' >
               <p>SELECT QUERY TYPE</p>
               <ul className='m-0 p-0'>
                <li className='mb-2 '>Order Related Queries</li>
                <li className='mb-2 '> Non-order Related Issues </li>
                <li className='mb-4  '>Recent Issues</li>
               </ul>
               <p className='pt-3 border-top'>Frequently Asked Questions</p>
               <div className='position-absolute side-bottom '>Want to reach us old style? Here is our</div>
              </div>
              
            </Col>
            <Col lg={9}>
            <div className='p-3 text-center' style={{background : "#f5f5f5"}}>
                <div className='bg-white p-3'>
           <p className='text-center '> Please Log In, if you have queries related to your recent purchases.</p>
           <button className='py-2  ' style={{width :"200px" ,border:"1px solid #14cda8" ,background:"white" ,fontSize:"14px" ,color:"#14cda8" ,fontWeight:"700"}} >LOG IN</button>
           </div>
              </div>
            </Col>

        </Row>
         </div>
        </Container>
     </Container>
        </>
    )
}