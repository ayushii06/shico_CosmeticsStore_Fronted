import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

function ProductCard(props) {
  const navigate = useNavigate()
  let [over, setOver] = useState(false)
  function onMouseOver() {
    setOver(true)
  }
  function onMouseOut() {
    setOver(false)
  }

  const host = "http://localhost:5050"
  const prodId = props.product_id

  async function handleClick() {
    console.log(prodId)
    if (sessionStorage.getItem('token')) {
      const response = await fetch(`${host}/api/shico/cart/addtocart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('token'),
        },
        body: JSON.stringify({
          productId: prodId,
          quantity: "1",
        })
      })

      if (!response.ok) {
        alert("Error in adding to cart")
        console.log(response.error)
      }

      const json = await response.json();
      console.log(json)
      if (json.success) {
        alert("Product added to cart")
        console.log(json)
      }
      else {
        alert(json.error)
      }
    }

    else {
      navigate('/login')

    }
  }

  const handleProduct =()=>{
    console.log("product clicked");
    navigate(`/productdesc/${prodId}`)
  }
  let { product_name, market_price, selling_price, imgsrc, imghoversrc } = props;

  const profit = market_price - selling_price;
  return (
    <>
      <div className="card-grid">

        <div className="image-container">
          <img className='product-img' onMouseOver={onMouseOver} onMouseOut={onMouseOut} src={over ? imghoversrc : imgsrc} />

        </div>
        <div className="name" onClick={handleProduct}>{product_name}</div>
        <div className="flex m-16">
          <div className="sp">₹{selling_price}</div>
          <div className="mp">
            ₹{market_price}</div>
          <div className="profit">{profit}%</div>
        </div>

        <div className="flex-content">
          <div className="addcart" onClick={handleClick} >ADD TO CART </div>
          <Link to='/productdesc'><div className="addcart">BUY NOW</div></Link>
        </div>
      </div>

    </>
  )
}

export default ProductCard