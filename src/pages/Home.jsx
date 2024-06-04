import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import usefetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../slices/wishlistSlice';
import { addtocart } from '../slices/cartslice';

function Home() {


  const data = usefetch('https://dummyjson.com/products')

  const dispatched = useDispatch()

  return (

    <Row className='ms-5 me-3' style={{marginTop:'150px'}}>

      {
        data?.length>0?
        data?.map((item)=>
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title>{item.title.slice(0,20)}...</Card.Title>
          <Card.Text>
          <p> {item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>Price : $ {item.price}</p>
          </Card.Text>
          <div className="d-flex align-items-center justify-content-between">
          <Button variant="outline-danger" onClick={()=>dispatched(addtowishlist(item))}><i class="fa-solid fa-heart"></i></Button>
          <Button variant="outline-success" onClick={()=>dispatched(addtocart(item))}><i class="fa-solid fa-cart-shopping"></i></Button>
          </div>
        </Card.Body>
      </Card>
        </Col>)
     :<p>Nothing to display</p>
}
    </Row>
    
  )
}

export default Home