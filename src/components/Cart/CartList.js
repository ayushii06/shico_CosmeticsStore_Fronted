import React from 'react'
import img from '../assets/new-arrivals-img/1.webp'
import './CartList.css'

function CartList(props) {
  const host = "http://localhost:5050"
  const {product_id } = props


  const handleDelete = async() =>{
    console.log(`${host}/api/shico/cart/delete/${product_id}`)
    const response = await fetch(`${host}/api/shico/cart/delete/${product_id}`,{
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })

    if(!response.ok){
        alert("Error in deleting item")
        console.log(response.error)
    }

    const json = await response.json();
    console.log(json)

    if(json.success){
        alert("Item deleted successfully")
    }
    else{
        alert(json.error)
    }

  }

  return (
    <>
    <div className="cart-container flex-content">
   
        <img className="product-img cart-img-list" src={img} />
        <div className="cart-right">
        <div className="cart-title">Power Plush Longwear Foundation</div>
        <div className="price">₹279</div>
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