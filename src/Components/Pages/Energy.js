import React from 'react'
import EnergyBGIMG from '../Images/0x0-Powerwall_04.jpg'
import Button from 'react-bootstrap/Button'
import '../Styles/Energy.css'

const Energy = () => {
  return (
    <div >
      {/* <img src={EnergyBGIMG}   
      width="1290vw" height="539vh"  alt="" /> */}
      <div className="background-image-container">
        <div className="overlay">
          <p>Backup Energy Storage</p>
          <p>Outage Protection</p>
          <p>Energy Independence</p>
          
            <div className="text-center mt-5 ">
            <Button variant="outline-light btn1">Order Powerwall</Button>{' '}
            </div>
            
        </div>
       </div>
    </div>
     
     
    
    
  )
}

export default Energy