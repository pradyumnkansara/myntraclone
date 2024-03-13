import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { maincontext } from '../../Context/MainContext'
import { faDroplet, faLayerGroup, faList, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'


export default function Dashboard() {
  let { changeMenu, setChangeMenu } = useContext(maincontext)

  return (
    <>
      <Container fluid className='px-0'>
        <div className='shadow' style={{ height: '100vh' }}>
          <div className="accordion accordion-flush" id="accordionExample" >
            <div className="accordion-item text-uppercase">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-uppercase d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  {
                    changeMenu
                      ?
                      <FontAwesomeIcon icon={faProductHunt} className='fs-5 me-3' />
                      :
                      <>
                        <FontAwesomeIcon icon={faProductHunt} className='fs-5 me-3' />
                        PRODUCT
                      </>
                  }
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body overflow-auto">
                  <ul>
                    <Link to="/addproduct">
                      <li> ADD PRODUCT</li>
                    </Link>
                    <Link to="/viewproduct">
                      <li>VIEW PRODUCT</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item text-uppercase">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {
                    changeMenu
                      ?
                      <FontAwesomeIcon icon={faLayerGroup} className='fs-5 me-3' />
                      :
                      <>
                        <FontAwesomeIcon icon={faLayerGroup} className='fs-5 me-3' />
                        CATEGORY
                      </>
                  }
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body overflow-auto">
                  <ul>
                    <Link to="/addcategory">
                      <li>ADD CATEGORY</li>
                    </Link>
                    <Link to="/viewcategory">
                      <li> VIEW CATEGORY</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item text-uppercase">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  {
                    changeMenu
                      ?
                      <FontAwesomeIcon icon={faList} className='fs-5 me-3' />
                      :
                      <>
                        <FontAwesomeIcon icon={faList} className='fs-5 me-3' />
                        SUB CATEGORY
                      </>
                  }
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body overflow-auto">
                  <ul>
                    <Link to="/addsubcategory">
                      <li>ADD Sub CATEGORY</li>
                    </Link>
                    <Link to="/viewsubcategory">
                      <li> VIEW Sub CATEGORY</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item text-uppercase">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {
                    changeMenu
                      ?
                      <FontAwesomeIcon icon={faSliders} className='fs-5 me-3' />
                      :
                      <>
                        <FontAwesomeIcon icon={faSliders} className='fs-5 me-3' />
                        SLIDER
                      </>
                  }
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body overflow-auto">
                  <ul>
                    <Link to="/addslider">
                      <li>ADD SLIDER</li>
                    </Link>
                    <Link to="/viewslider">
                      <li> VIEW SLIDER</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item text-uppercase">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-uppercase d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  {
                    changeMenu
                      ?
                      <FontAwesomeIcon icon={faDroplet} className='fs-5 me-3' />
                      :
                      <>
                        <FontAwesomeIcon icon={faDroplet} className='fs-5 me-3' />
                        Color
                      </>
                  }
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body overflow-auto">
                  <ul>
                    <Link to="/">
                      <li>ADD Color</li>
                    </Link>
                    <Link to="/">
                      <li> VIEW Color</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item text-uppercase">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  {
                    changeMenu
                      ?
                      <FontAwesomeIcon icon={faUser} className='fs-5 me-3' />
                      :
                      <>
                        <FontAwesomeIcon icon={faUser} className='fs-5 me-3' />
                        USERS
                      </>
                  }
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body overflow-auto">
                  <ul>
                    <Link to="/viewuser">
                      <li> VIEW User</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>


  )
}
