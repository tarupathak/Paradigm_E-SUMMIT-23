import React from 'react'
import Header from '../Components/Header'
import './Lpage.css'
import logo from '../Images/logo.svg'

const Lpage = () => {
  return (
    <div>
       <Header />
       <p id="discription">Welcome to Shuttle , get your journey started here!</p>
       <button className="text1">Enter as Business</button>
       <button className="text2">Enter as Customer</button>
       <button className="text3">Enter as Admin</button>
       <img src={logo} id="logo_img"/>
    </div>
  )
}

export default Lpage