import React,{useEffect, useState} from 'react'
import './Cart.css'
import './CartList.css'
import CartList from './CartList'

function CartData() {
    const host="http://localhost:5050"
    const cartInitial = []
    const [cart, setCart] = useState(cartInitial)
    const getCart = async() =>{
        const response = await fetch(`${host}/api/shico/cart/getcart`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
            })
        
            if(!response.ok){
                alert("Error in getting cart")
                console.log(response.error)
            }

            const json = await response.json();
            console.log(json)

            if(json.success){
                setCart(json.cart)
                console.log(json)
            }
            else{
                alert(json.error)
            }
    }

    useEffect(() => {
        getCart()
    }, [])

  return (
    <>
    <div className="cart-responsive top flex-content ">
        <div className="cart-left">
            {cart.length===0 ? <div className="empty-cart">Your cart is empty</div>:
            
                <div className="cart-list">
                    {cart.map((item)=>{
                        return <CartList key={item._id} product_id={item._id}/>
                    })}
                </div>
            }

        
        </div>
        <div className="cart-right price-container">
            <p className="">Price Details</p>
            <hr></hr>
            <div className="price-details">
                <div className="price-row">Price</div>
                <div className="price">₹5,795</div>
            </div>
            <div className="price-details">
                <div className="price-row">Discount</div>
                <div className="price">− ₹3,639</div>
            </div>
            <div className="price-details">
                <div className="price-row">Coupons for you</div>
                <div className="price">− ₹21</div>
            </div>
            <div className="price-details">
                <div className="price-row">Delivery Charges</div>
                <div className="price">Free</div>
            </div>
            <hr></hr>
            <div className="price-details">
                <div className="amount bold">Total Amount</div> 
                <div className="price-total bold">₹2,135</div>
                </div>
           <hr></hr>
           <div className="green bold">You will save ₹3,660 on this order</div>
           <button className="">Place Order</button>
        </div>
       
    </div>
 
    </>
  )
}

export default CartData