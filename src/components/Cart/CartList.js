import React from 'react'
import img from '../assets/new-arrivals-img/1.webp'
import './CartList.css'

function CartList(props) {
  const host = "http://localhost:5050"
  const {productId,productName,price, imgsrc } = props
 


  const handleDelete = async() =>{
    console.log(`${host}/api/shico/cart/delete/${productId}`)
    const response = await fetch(`${host}/api/shico/cart/delete/${productId}`,{
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('token')
      }
    })

    if(!response.ok){
        alert("Error in deleting item")
        console.log(response.message)
    }

    const json = await response.json();
    console.log(json)

    if(json.success){
        alert("Item deleted successfully")
    }
    else{
        alert(json.message)
    }

  }

  return (
    <>
    <div className="cart-container flex-content">
   
        <img className="product-img cart-img-list" src={imgsrc} />
        <div className="cart-right">
        <div className="cart-title">{productName}</div>
        <div className="price">₹{price}</div>
        <div className="flex-content m-0">

        <div className="remove" onClick={handleDelete}>Remove</div>
        <div className="remove">Buy This</div>
            
        </div>
        </div>
        

    </div>
  
    </>
  )
}

export default CartList