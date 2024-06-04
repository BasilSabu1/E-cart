import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';



function Header() {
  const wishlist = useSelector((state)=>
    state.wishlistreduce)

  const cart = useSelector((state)=>state.cartreducer)
  return (

    <div>
       <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container>
        <Navbar.Brand  > <Link to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-store"></i>E-Kart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-2'> <Link to={'/wishlist'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-heart "
             style={{color:'red'}}></i>Wishlist <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded ' > <Link to={'/cart'} 
            style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-cart-shopping"></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header