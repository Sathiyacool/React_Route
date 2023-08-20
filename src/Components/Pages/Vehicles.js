import React from 'react'
import '../Styles/Vehicles.css'
import VehicleBGImg from '../Images/Tesla-model-3.jpg'



const Vehicles = () => {

  return (
  <div className="home-container">
  <img src={VehicleBGImg}   
     width="1290vw" height="539vh"  alt="" />
       <div className="home-text-section">
        
        <div>
          <h5 className="primary-Heading">
            Model 3
          </h5>
         {/*  <div className="Heading">
            <h5 className="secondary-Heading">
            5-Star Rating
            </h5>
        
            <h5 className="secondary-Heading">
            Top Safety Pick+
            </h5> 
            <p className='text'>
              Safety is the most important part of every Tesla.
            </p>
          </div> */}
          <br />
          <button className="button">Order Now</button>
        </div>
       
     </div> 
 </div>
  )
}

export default Vehicles