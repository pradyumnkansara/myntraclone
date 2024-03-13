import React, { useContext } from 'react'
import AdminHeader from '../../Common/admincommon/AdminHeader'
import Dashboard from '../../Common/admincommon/Dashboard'
import { Col, Container, Row } from 'react-bootstrap'
import { maincontext } from '../../Context/MainContext'

export default function Viewcategory() {
  let { changeMenu, setChangeMenu } = useContext(maincontext)

  return (
    <>
      <AdminHeader />
      <Container fluid className='ps-0 '>
        <Row>
          <Col lg={changeMenu ? 1 : 2} style={{transition:'0.5s'}}>
            <div>
              <Dashboard />
            </div>
          </Col>
          <Col lg={8}>
            <div className='ms-5 mt-5'>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Category Description</th>
                    <th scope="col">Category Image</th>
                    <th scope="col">Category Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Men</td>
                    <td>descript</td>
                    <td>image</td>
                    <td>Active</td>
                    <td>
                      <button className='mx-1 p-1 rounded-2 text-white bg-black'>Delete</button>
                      <button className='mx-1 p-1 rounded-2 text-white bg-black'>Update</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
