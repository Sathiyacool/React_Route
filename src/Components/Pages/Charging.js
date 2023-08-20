import React from 'react'
import ChargingBGIMG from '../Images/0x0-Charging_18.jpg'
import Button from 'react-bootstrap/Button'
import '../Styles/Charging.css'

const Charging = () => {
  return (
    <div>

     <img src={ChargingBGIMG}   
      width="1290vw" height="539vh"  alt="" />
      <div>
        <div>
          <p>Charge Anytime</p>
          <p>Fast and Flexible</p>
          <p>Energize Your Savings</p>
        </div>  
       <Button variant="outline-secondary charging-btn">Order Charger</Button>{' '}
      </div>
     
    </div>
  )
}

export default Charging