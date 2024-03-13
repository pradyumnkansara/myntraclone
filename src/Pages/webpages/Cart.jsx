import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../img/myntra.png";
import secure from "../../img/sprite-secure.png";
import gift from "../../img/gift-big.webp";
import product from "../../img/2045ad67-e316-4b4b-8623-d03579c7bc291691494264967GUESSBrandLogoPrintedStructuredHandheldBag1.webp";

export default function Cart() {
  return (
    <>
      <Cartheader />
      <Cartbody />
      <Cartfoot />
    </>
  );
}

function Cartheader() {
  return (
    <>
      <Container fluid className="border-bottom">
        <div className="p-3">
          <Row className="justify-content-between align-items-center">
            <Col xs={6} lg={2}>
              <div>
                <img src={logo} width={100} />
              </div>
            </Col>
            <Col lg={8} className="d-none d-lg-block">
              <ul className="d-flex justify-content-center">
                <li className="p-2">BAG</li>
                <li className="divider"></li>
                <li className="p-2">ADDRESS</li>
                <li className="divider"></li>
                <li className="p-2">PAYMENT</li>
              </ul>
            </Col>
            <Col xs={6} lg={2}>
              <div className="d-flex justify-content-end align-items-center">
                <div>
                  <img src={secure} width={26} height={28} />
                </div>
                <div className="ms-3 text-end" style={{ letterSpacing: "3px", fontSize: "12px" }}>
                  100 % SECURE
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

function Cartbody() {
  return (
    <>
      <Container fluid>
        <Container>
          <Row>
            <Col xs={8} lg={7}>
              <div className="pt-4 ">
                <div
                  className="border rounded p-3 d-flex justify-content-between align-items-center"
                  style={{ background: "#fff6f4" }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>Check delivery time & services</span>
                  <span>
                    <button className="rounded py-2 px-3" style={{ color: "red", borderColor: "red", fontSize: "12px", fontWeight: "700", border: "1px solid red", background: "#fff6f4" }}>ENTER PINCODE</button>
                  </span>
                </div>
                <div className="border rounded p-3 mt-2">
                  <div>Available Offers</div>
                  <div>
                    10% Instant Discount on ICICI Bank Credit and Debit Cards on
                    a min spend of ₹3,500. TCA
                    <p>Show more</p>
                  </div>
                </div>
                <div className="py-4">
                  <div className="d-flex justify-content-between ">
                    <span>
                      <input type="checkbox" /> 1/1 ITEMS SELECTED{" "}
                    </span>
                    <span> REMOVE | MOVE TO WISHLIST</span>
                  </div>
                </div>
                <div className="border rounded p-3">
                  <Row>
                    <Col xs={6} lg={3}>
                      <div>
                        <img src={product} width={111} height={148} />
                      </div>

                    </Col>
                    <Col xs={6} lg={9}>

                      <div>
                        <div>Guess</div>
                        <div>Brand Logo Print Handheld Bag</div>
                        <div>Sold by : Supercorn Net</div>
                        <div className="d-flex">
                          <span className="px-2" style={{ background: "#f5f5f6" }}>Size: Onesize</span>
                          <span style={{ background: "#f5f5f6" }} className="ms-2 px-2">Qty: 1</span>

                        </div>
                        <div>10,799</div>
                        <div>7 Days return available</div>


                      </div>

                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={4} lg={5}>
              <div className="pt-4 py-1 px-2  ps-4  py-1 px-2  border-start">
                <p style={{ fontSize: "12px", fontWeight: "700" }}>COUPONS</p>
                <div className="d-flex justify-content-between">
                  <div style={{ fontSize: "14px", fontWeight: "700" }}>Apply Coupons</div>
                  <div className="">
                    <button className=" px-3 py-1" style={{ border: "1px solid red", fontSize: "12px", color: "red", fontWeight: "700", background: "white" }}>APPLY</button>
                  </div>
                </div>
                <div className="text-center mt-3" style={{ fontSize: "14px" }}>
                  <a className="" style={{ color: "red", fontWeight: "700" }}>Login</a>
                  <span> to get upto 500 off on first order</span>
                  <hr />
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "700" }}>
                    GIFTING AND PERSONALIZATION
                  </p>
                  <div className="d-lg-flex px-lg-3 rounded" style={{ background: "#fff1ec" }}>
                    <div className="px-1" style={{ height: "99px" }}>
                      <img src={gift} height={100} />
                    </div>
                    <div>
                      <div className="pt-2 px-2 px-lg-0" style={{ fontSize: "14px", fontWeight: "700" }}>Buying for loved one ?</div>
                      <p className="m-0 p-0" style={{ fontSize: "12px" }}>
                        Gift wrap and personalised message on card,
                        <br /> Only for 25
                      </p>
                      <span className="px-2 px-lg-0" style={{ fontSize: "12px", fontWeight: "700", color: "red" }}>ADD GIFT WRAP</span>
                    </div>
                  </div>
                  <div>
                    <p>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</p>
                    <input type="checkbox" /> Donate and make a differance
                  </div>
                  <div className="d-flex ">
                    <div className="ms-4 border rounded py-1 px-2 mt-2">10</div>
                    <div className="ms-4 border rounded py-1 px-2 mt-2">
                      {" "}
                      50
                    </div>
                    <div className="ms-4 border rounded py-1 px-2 mt-2">
                      100
                    </div>
                  </div>
                  <div>Know More</div>
                  <hr />
                </div>
                <div>
                  <div>PRICE DETAILS (1 item)</div>
                  <div className="d-flex justify-content-between">
                    <span>Total MRP</span>
                    <span>11,999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Discount on MRP</span>
                    <span>11,999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Coupon Discount</span>
                    <span>11,999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Platform Fee</span>
                    <span>11,999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>
                      Shipping Fee
                      <br />
                      <p>Free shipping for you</p>
                    </span>
                    <span>11,999</span>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Total amount </span>
                  <span>345</span>
                </div>
                <div className="text-center">
                  <button className="mt-2 py-2" style={{ border: "0px", width: "100%", fontSize: "14px", fontWeight: "700", color: "white", background: "rgb(255, 63, 108)", letterSpacing: "1px", cursor: "pointer" }}>PLACE ORDER</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

function Cartfoot() {
  return (
    <>
      <Container fluid>
        <Container
          className=" my-lg-5 pt-2"
          style={{ background: "#fff5f7" }}
        >
          <p className="border-top pt-1">You may also like:</p>
          <div className="d-flex ">
            <div className="" style={{ width: "172PX" }}>
              <div>
                <img src={product} className="border" />
              </div>
              <div className="border p-2">
                <div>Guess</div>
                <div>Brand Logo Print Handheld Bag</div>
                <div>15599</div>

                <div className="border-top text-center">ADD TO BAG</div>
              </div>
            </div>
            <div className="ms-2" style={{ width: "172PX" }}>
              <div>
                <img src={product} className="border" />
              </div>
              <div className="border p-2">
                <div>Guess</div>
                <div>Brand Logo Print Handheld Bag</div>
                <div>15599</div>

                <div className="border-top text-center">ADD TO BAG</div>
              </div>
            </div>
          </div>
        </Container>
        <hr />
      </Container>
    </>
  );
}
