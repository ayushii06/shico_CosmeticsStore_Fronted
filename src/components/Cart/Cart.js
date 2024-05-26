import React from 'react'
import emptycartimg from '../assets/image/cartbg.webp'
import { Link } from 'react-router-dom'
import '../Cart/Cart.css'
import CartData from './CartData'

function Cart() {
  return (
    <>
    {!localStorage.getItem('token')? <div className="height top bg-white">
        <img className="product-img cart-img" src={emptycartimg} />
        <p className="">Missing Cart Items ? </p>
        <p className="">Login to see the items you added previously
 </p>
        <Link to='/login' className="addcart">Login</Link>
    </div>
    :<CartData/>}
   
    
    </>
  )
}

export default Cart