import React from 'react';
import '../Styles/Shop.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ChargingIMG from '../Images/0x0-Charging_22.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ImageCardComponent = ({ title, content, imageSrc }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="outline-dark">Buy Now</Button>{' '}
      </Card.Body>
    </Card>
  );
};


const Shop = () => {

  const cards = [
    {
      title: 'Model S Car Cover',
      content: '$325 - $400',
      imageSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1017723-00-A_alt.jpg', 
    },
    {
      title: 'Model 3 Roof Rack',
      content: '$400',
      imageSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_1_2000.jpg', 
    },
    {
      title: 'Model 3/Y Key Fob',
      content: '$175',
      imageSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_1.jpg',
    },
  ];
  return (
   
    <div className="container">
      <br />
      <br />
      <br />
    {/* <h3>Exterior</h3> */}
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-md-4" key={index}>
          <ImageCardComponent
            title={card.title}
            content={card.content}
            imageSrc={card.imageSrc}
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Shop