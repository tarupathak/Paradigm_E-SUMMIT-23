import React from 'react'
import './Customer.css'
import Header from '../Components/Header'
import logo2 from '../Images/logo2.svg'

const Customer = () => {
  return (
    <div>
    <Header />
    <p id="discription">Welcome enter all the details to proceed furthur.</p>
    <img src={logo2} id="img"/>
     <div id="card">
     <div>
      <label>Enter your name:</label>
      <input placeholder="Enter your name"/>
    </div>
      <p id="date">Date:27/01/2023</p>
      <p id="time">Time:14:53</p>
      <p id="bus">Business:Amazon</p>
      <p id="obj">Object:Electronic Watch</p>
      <p id="quan">Quantity:10</p>
     </div>
    </div>
  )
}

export default Customer