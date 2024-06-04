import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removecart } from '../slices/cartslice';


function Cart() {
  const cartarray = useSelector((state)=>state.cartreducer)

  const dispatch = useDispatch()
  return (
    <div style={{marginTop:'100px'}}>

    <div className="row">
      { cartarray?.length>0?
        <div className="col-lg-6 m-5">
      <table className='table shadow border '>
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Image</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
        {cartarray?.map((item,index)=>(
          <tr>
  <td>{index+1}</td>
  <td>{item.title}</td>
  <td><img style={{width:'100px',height:'100px'}} src={item.thumbnail}  /></td>
  <td>{item.price}</td>
  <td><Button variant="outline-danger" onClick={()=>dispatch(removecart(item.id))} ><i class="fa-solid fa-trash"></i></Button></td>
</tr>
        ))
  
        }
       
    </tbody>
   </table>
      </div>:
       <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center flex-column">
       <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no images" height={'400px'} />
       <h3>Your Cart is empty</h3>
      <button className='btn btn-success mt-2'><Link style={{textDecoration:'none' , color:'white'}} to={'/'}><i class="fa-solid fa-arrow-left" ></i>Back to Home</Link></button> 
     </div>
      }
      
    </div>
  



  </div>
   
  )
}

export default Cart