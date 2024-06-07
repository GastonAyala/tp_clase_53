import React from 'react'
import SideBar from '../components/Dashboard/SideBar'
import TopBar from '../components/Dashboard/TopBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            <TopBar />

            <Outlet />

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Root