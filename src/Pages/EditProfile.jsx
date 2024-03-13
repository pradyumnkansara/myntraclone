import React from 'react'
import Header from '../Common/Header'
import ProfileBody from "../Pages/Profile"
import { Col, Container, Row } from 'react-bootstrap'

export default function EditProfile() {
  return (
    <>
   <Header/>
   <Edit/>
   </>
  )
}

function Edit(){
    return(
        <>
         <Container fluid>
        <Container className="py-5" style={{ width: "980px" }}>
          <div>
            <div style={{fontSize:"18px",fontWeight:"800"}}>Account</div>
            <div style={{fontSize:"12px"}}>Ankita</div>
          </div>
          <hr />
          <Row>
            <Col lg={2}>
              <div className="border-end ">
                <div className="py-3" style={{fontSize:"15px"}}> Overview</div>

                <div className=" py-2 border-top">
                  <div style={{fontSize:"12px"}}> ORDERS</div>
                 
                  <div className="py-2" style={{fontSize:"15px"}}>Orders & Returns</div>
                </div>
                <div className="border-top py-2">
                 
                  <div className="py-2" style={{fontSize:"12px"}}>CREDITS</div>
                  <div>Coupons</div>
                  <div>Myntra Credits</div>
                  <div>MynCash</div>
                </div>
                <div className="border-top py-2">
                 <div className="py-2" style={{fontSize:"12px"}}> ACCOUNT</div>
                 
                  <div>Profile</div>
                  <div>Saved Cards</div>
                  <div>Saved UPI</div>
                  <div>Saved Wallets/BNPL</div>
                  <div>Addresses</div>
                  <div>Myntra Insider</div>
                </div>
                <div className="border-top">
                  <div className="py-3" style={{fontSize:"12px"}}>LEGAL</div>
                  <div>Terms of Use</div>
                  <div>Privacy Policy</div>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <div className="border">
                <div style={{width:"600px" ,margin:"auto"}}>
                <div className="text-start py-4 border-bottom" style={{fontWeight:"600" ,fontSize:"18px"}}>Edit Details</div>
                </div>
                <div style={{width:"550px" ,margin:"auto"}}>
                  <div className='d-flex justify-content-between border mt-4 p-2'>
                    <div>Mobile Number*
                       <div>9999999999</div>
                    </div>
                    <div><button>CHANGE</button></div>
                  </div>
                  <div className='my-4 '> 
                    <input type='text' className='py-2 ps-2' style={{width:"100%"}}/>
                  </div>
                  <div className='my-4'> 
                    <input type='text' className='py-2 ps-2' style={{width:"100%"}} placeholder='Email'/>
                  </div>
                  <div className='d-flex border'>
                    <div className=' py-2'>Male</div>
                    <div className=' py-2'>Female</div>

                  </div>
                  <div className='my-4'> 
                    <input type='text' className='py-2 ps-2' style={{width:"100%"}} placeholder='Birthday'/>
                  </div>
                  
                  <div>Alternate mobile details</div>
                  <div className='my-4'> 
                    <input type='text' className='py-2 ps-2' style={{width:"100%"}} placeholder='+91'/>
                  </div>
                  <div className='my-4'> 
                    <input type='text' className='py-2 ps-2 ' style={{width:"100%"}} placeholder='Hind Name'/>
                  </div>
                
                  
                 
                  <button className="my-5 py-2" style={{width:"100%",color:"white",backgroundColor:"#FF3F6C" ,border:"0px" ,fontWeight:"800",cursor:"pointer" , borderRadius:"2px"}}>SAVE DETAILS</button>
                </div>
               
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
        
        </>
    )
}
