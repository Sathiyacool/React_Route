import React from 'react'
import { useState } from 'react';
import carouselFirst from '../Images/0x0-0x0-Service_10.jpg'
import  carouselSecond from '../Images/tesla-employees-program.jpg';
import  carouselThird from '../Images/08_0x0-Semi_Delivery_Event_08.jpg';
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


const Home = () => {
 
  return (
      
       <Row className="justify-content-center align-items-center">
       <Col lg={12}>
         <Carousel>
           <Carousel.Item interval={2000}>
             <img
               className="d-block w-100"
               src={carouselFirst}
               alt="First slide"
               height="539vh"
               fluid
             />
             <Carousel.Caption>
               <h3></h3>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item interval={2000}>
             <img
               className="d-block w-100"
               src={carouselSecond}
               height="539vh"
               fluid
             />

             <Carousel.Caption>
               <h3></h3>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item interval={2000}>
             <img
               className="d-block w-100"
               src={carouselThird}
               alt="Third slide"
               height="539vh"
               fluid
             />

             <Carousel.Caption>
               <h3></h3>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
       </Col>
     </Row>
   
  )
}

export default Home