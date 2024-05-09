import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../layout/site/footer/Footer'
import Header from '../../layout/admin/header/Header'

const AdminRoot = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default AdminRoot
