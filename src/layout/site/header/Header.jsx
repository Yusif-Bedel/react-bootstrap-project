import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='navLeft'>
        <Link style={{fontSize:"20px"}} to={"/"}>StartBootstrap</Link>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/admin"}>Admin</Link>
          <Link to={"/#"}>Shop <i class="fa-solid fa-caret-down"></i></Link>
        </div>
      </div>
      <div className="navRight">
        <Link className='salam' style={{color:"black"}} to={"/shop"}><i class="fa-solid fa-cart-shopping"></i></Link>
        <p>Cart</p>
        <span>0</span>
      </div>
    </nav>
  )
}

export default Header
