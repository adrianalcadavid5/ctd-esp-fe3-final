import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from 'react-router-dom'
import Styles from "../Styles/Layout.module.css"

const Layout = () => {
  return (
    <div className={Styles.layoutContainer}>
      <Navbar/>
        <main className={Styles.layoutMain}>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default Layout
