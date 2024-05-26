import React from 'react'
import img from '../assets/new-arrivals-img/1.webp'
import './CartList.css'

function CartList() {
  return (
    <>
    <div className="cart-container flex-content">
   
        <img className="product-img cart-img-list" src={img} />
        <div className="cart-right">
        <div className="cart-title">Power Plush Longwear Foundation</div>
        <div className="price">₹279</div>
        <div className="flex-content m-0">

        <div className="remove">Remove</div>
        <div className="remove">Buy This</div>
            
        </div>
        </div>
        

    </div>
  
    </>
  )
}

export default CartList