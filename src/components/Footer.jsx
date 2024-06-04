import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column bg-primary text-light '>
<div className="footer d-flex justify-content-evenly align-items-center w-100">
<div className="websites" style={{width:'400px'}}>
    <h4 className='mb-3 m-3'>  <i class="fa-solid fa-cart-shopping "></i>
        E-Kart</h4>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Sapiente suscipit, soluta quasi molestiae nisi <br />
        non consequatur est libero vero dolor a inventore obcaecati blanditiis earum? Suscipit tempore aspernatur quaerat!</h6>
</div>
<div className="links d-flex flex-column">
    <h4 className='mb-3'>Links</h4>
    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
    <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart </Link>
    <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
</div>
<div className="guides d-flex flex-column">
<h4 className='mb-3' style={{overflowY:'hidden'}}>Guides</h4>
    <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap </Link>
    <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
</div>
<div className="contacts ">
    <h4 className='mb-3'>Contact Us</h4>
    <div className=" d-flex mb-3 ">
        <input type="text" className='form-control' />
        <button className='btn btn-warning ms-2'>Subscribe</button>
    </div>
    <div className="d-flex justify-content-evenly align-items-center">
    <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
    <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
    <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

</div>
</div>


</div>
<p className='mt-5'> Copyright @ 2023 media player.Built with React</p>
    </div>
  )
}

export default Footer