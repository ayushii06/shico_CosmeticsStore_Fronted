import React, { useState } from 'react'
// import img from '../assets/new-arrivals-img/1.webp'
// import changeimg from '../assets/new-arrivals-img/2.webp'

import { Link } from 'react-router-dom'

function ProductCard(props) {
    
     let [over,setOver]=useState(false)
     function onMouseOver(){
      setOver(true)
      }
      function onMouseOut(){
       setOver(false)
      }

    let {product_name,desc,market_price,selling_price,category,imgsrc,imghoversrc,profit}=props;
    
  return (
    <>
    <div className="card-grid">
        
        <div className="image-container">
        <img className='product-img' onMouseOver={onMouseOver} onMouseOut={onMouseOut} src={over?imghoversrc:imgsrc} />

    </div>
          <div className="name">{product_name}</div>
            <div className="flex m-16">
              <div className="sp">₹{selling_price}</div>
              <div className="mp">
              ₹{market_price}</div>
              <div className="profit">{profit}%</div>
              </div>

        <div className="flex-content">
        <div className="addcart" >ADD TO CART </div>
        <Link to='/productdesc'><div className="addcart">BUY NOW</div></Link>
        </div>
    </div>

</>
  )
}

export default ProductCard