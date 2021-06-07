import React from 'react'
import './Coins.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import img from './Card.png'

const Coin = ({ title, address, type, price }) => {
    return(
        
        <Card style={{width: '80%'}}>
          <Card.Img variant="top" src={img} />
          <Card.Text class="type">{type}</Card.Text>
          <Card.Body style={{background: '#F8F8F8', textAlign: 'left'}}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{address}</Card.Text>
            <Card.Text>New Properties for Sale from <strong>£{price}</strong></Card.Text>
          </Card.Body>
        </Card>
    )
}

export default Coin;