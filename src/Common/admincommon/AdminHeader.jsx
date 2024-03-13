import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../img/Myntra-Logo-768x432.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { maincontext } from '../../Context/MainContext'
import onlylogo from '../../img/myntra-1200x900.webp'
import { Link } from 'react-router-dom'

export default function AdminHeader() {

  let { changeMenu, setchangeMenu } = useContext(maincontext);

  return (
    <>
      <nav class="navbar shadow " data-bs-theme="white">
        <div class="container-fluid align-items-center">
          <div className='d-flex align-items-center'>
            <a class="navbar-brand">
              {
                changeMenu
                  ?
                  <img src={onlylogo} width={80} style={{transition:'0.5s'}}/>
                  :
                  <img src={logo} width={130} style={{transition:'0.5s'}}/>
              }
            </a>
            <FontAwesomeIcon icon={faBars} className='fs-4 ms-5' onClick={() => {
              setchangeMenu(!changeMenu)
            }} />
          </div>
          <form class="d-flex" role="search">
            <Link to={'/'}>
              <button class=" btn-outline-DARK bg-black p-2 rounded text-white" type="submit">Log out </button>
            </Link>
            <button class=" bg-black p-2 rounded ms-2 text-white" type="submit">MY PROFILE</button>
          </form>
        </div>
      </nav>
    </>
  )
}
