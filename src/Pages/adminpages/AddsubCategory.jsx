import React, { useContext } from 'react'
import AdminHeader from '../../Common/admincommon/AdminHeader'
import Dashboard from '../../Common/admincommon/Dashboard'
import { Col, Container, Row } from 'react-bootstrap'
import prev from '../../img/generic-image-file-icon-hi.png'
import { maincontext } from '../../Context/MainContext'


export default function AddsubCategory() {
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
                    <Col lg={8}>
                        <div>
                            <form className='p-3 mt-5'>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium' style={{ fontSize: '18px' }}>
                                        Category
                                    </label>
                                    <select name="" id="" className='w-100 p-2 rounded-2'>
                                        <option value="Men">Men</option>
                                        <option value="Men">Men</option>
                                        <option value="Men">Men</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium' style={{ fontSize: '18px' }}>
                                        Sub Category
                                    </label>
                                    <input type="text" className='w-100 p-2 rounded-2' value='' />
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium' style={{ fontSize: '18px' }}>
                                        Sub Category Description
                                    </label>
                                    <textarea name="" className='w-100 p-2 rounded-2' id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className='mb-4 d-flex justify-content-between'>
                                    <input type="file" id='file-input' className='d-none' />
                                    <div>
                                        <label className='mb-2 fw-medium d-block' style={{ fontSize: '18px' }}>
                                            Sub Category Image
                                        </label>
                                        <input type="text" readOnly placeholder='Upload File' className='p-2 rounded-start-2' />
                                        <label id='file-input-label' for="file-input" className='p-2 rounded-end-2 border border-black'>
                                            Upload
                                        </label>
                                    </div>
                                    <div>
                                        <img src={prev} width={120} />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium' style={{ fontSize: '18px' }}>
                                        Sub Category Status
                                    </label>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex align-items-center me-5'>
                                            <label htmlFor="" className='me-2'>
                                                Active
                                            </label>
                                            <input type="radio" style={{ width: '20px', height: '20px' }} />
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <label htmlFor="" className='me-2'>
                                                De-active
                                            </label>
                                            <input type="radio" style={{ width: '20px', height: '20px' }} />
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className='p-2 px-3 my-3 rounded-2 bg-black text-white fw-bold' />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
