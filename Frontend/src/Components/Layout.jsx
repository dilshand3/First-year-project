import React from 'react'
import Navbar from '/src/Components/One/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '/src/Components/Three/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout