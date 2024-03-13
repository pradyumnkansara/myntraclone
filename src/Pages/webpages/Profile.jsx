import React from "react";
import Header from "../../Common/webcommon/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Common/webcommon/Footer";

export default function Profile() {
  return (
    <>
      <Header />
      <ProfileBody />
      <Footer />
    </>
  );
}

function ProfileBody() {
  return (
    <>
      <Container fluid>
        <Container className="py-5">
          <div>
            <div style={{ fontSize: "18px", fontWeight: "800" }}>Account</div>
            <div style={{ fontSize: "12px" }}>Ankita</div>
          </div>
          <hr />
          <Row>
            <Col xs={12} lg={2}>
              <div className="border-end ">
                <div className="py-3" style={{ fontSize: "15px" }}> Overview</div>

                <div className=" py-2 border-top">
                  <div style={{ fontSize: "12px" }}> ORDERS</div>

                  <div className="py-2" style={{ fontSize: "15px" }}>Orders & Returns</div>
                </div>
                <div className="border-top py-2">

                  <div className="py-2" style={{ fontSize: "12px" }}>CREDITS</div>
                  <div>Coupons</div>
                  <div>Myntra Credits</div>
                  <div>MynCash</div>
                </div>
                <div className="border-top py-2">
                  <div className="py-2" style={{ fontSize: "12px" }}> ACCOUNT</div>

                  <div>Profile</div>
                  <div>Saved Cards</div>
                  <div>Saved UPI</div>
                  <div>Saved Wallets/BNPL</div>
                  <div>Addresses</div>
                  <div>Myntra Insider</div>
                </div>
                <div className="border-top">
                  <div className="py-3" style={{ fontSize: "12px" }}>LEGAL</div>
                  <div>Terms of Use</div>
                  <div>Privacy Policy</div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={10}>
              <div className="border p-2 p-lg-0">
                <div style={{ maxWidth: "450px", margin: "auto" }}>
                  <div className="text-start py-4 border-bottom" style={{ fontWeight: "600", fontSize: "18px" }}>Profile Details</div>
                </div>
                <div style={{ maxWidth: "390px", margin: "auto" }}>
                  <div className="d-flex justify-content-between pt-4">
                    <span>Full Name</span>
                    <span>Ankita</span>

                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <span>Mobile Number</span>
                    <span>9990000000</span>

                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <span>Email ID	</span>
                    <span>null</span>

                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <span> Gender</span>
                    <span>nulll</span>

                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <span>Date of Birth</span>
                    <span>9 feb</span>

                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <span>Location</span>
                    <span>- not added -</span>

                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <span>Alternate Mobile</span>
                    <span>- not added -</span>

                  </div>
                  <div className="d-flex justify-content-between py-4">
                    <span>Hint Name</span>
                    <span>- not added -</span>

                  </div>
                  <button className="my-5 py-2" style={{ width: "100%", color: "white", backgroundColor: "#FF3F6C", border: "0px", fontWeight: "800", cursor: "pointer", borderRadius: "2px" }}>EDIT</button>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
