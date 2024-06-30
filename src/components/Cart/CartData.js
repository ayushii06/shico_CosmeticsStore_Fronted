import React,{useEffect, useState} from 'react'
import './Cart.css'
import './CartList.css'
import CartList from './CartList'

function CartData() {
    const host="http://localhost:5050"
    const cartInitial = []
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [price, setPrice] = useState(0)

    const getCart = async() =>{
        const response = await fetch(`${host}/api/shico/cart/getcart`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem('token')
            }
            })
        
            if(!response.ok){
                alert("Error in getting cart")
                console.log(response.error)
            }

            const json = await response.json();
           
            if(json.success){
                setCart(json.cart[0].products)
                console.log(json.cart[0].products)
                console.log(json.cart)    
                await calculatePrice()         
             
            }
            else{
                alert(json.error)
            }

        
        }

        const calculatePrice = async() =>{
            console.log("function called")
            let price=0
             cart.map((item)=>{
                price+=item.cartTotal
            })
            setPrice(price)
            console.log(price)
            setDiscount(price*0.1)
            setTotal(price-price*0.1)
        }
       

    useEffect(() => {
        getCart()
    }, [])

  return (
    <>
    <div className="cart-responsive top flex-content ">
        <div className="cart-left">
            {cart===null? <div className="empty-cart">Your cart is empty</div>:
            
                <div className="cart-list">
                    {cart.map((item)=>{
                        return <CartList key={item._id} cart_id={item._id} productId={item._id} price={item.price} productName={item.productName} imgsrc={item.imgsrc} />
                    })}
                </div>
            }

        
        </div>
        <div className="cart-right price-container">
            <p className="">Price Details</p>
            <hr></hr>
            <div className="price-details">
                <div className="price-row">Price</div>
                <div className="price">₹{price}</div>
            </div>
            <div className="price-details">
                <div className="price-row">Discount(10%)</div>
                <div className="price">− ₹{discount}</div>
            </div>
            <div className="price-details">
                <div className="price-row">Coupons for you</div>
                <div className="price">− NULL</div>
            </div>
            <div className="price-details">
                <div className="price-row">Delivery Charges</div>
                <div className="price">Free</div>
            </div>
            <hr></hr>
            <div className="price-details">
                <div className="amount bold">Total Amount</div> 
                <div className="price-total bold">₹{total}</div>
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