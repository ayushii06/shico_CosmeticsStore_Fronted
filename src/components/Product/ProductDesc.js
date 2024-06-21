import React, { useEffect, useState } from 'react'
import './ProductItem.css'
import img from '../assets/new-arrivals-img/1.webp'
import heartsvg from '../assets/svg/heartsvg.svg'
import '../Product/ProductDesc.css'
import star from '../assets/svg/star.svg'
import starfill from '../assets/svg/starfill.svg'
import location from '../assets/svg/location.svg'
import plus from '../assets/svg/plus-solid.svg'
import minus from '../assets/svg/minus-solid.svg'
import ProductItem from './ProductItem'
import left from '../assets/svg/left.svg'

function ProductDesc() {
  let [count,setCount]=useState(1);

  function incCount(){
    setCount(count+1)
  }

  function decCount(){
    setCount(count-1)
  }
  // useEffect(()=>{
  //   fetch("http://localhost:5050/",{
  //     method:"GET",
  //   })
  //   .then((res)=>{res.json()})
  //   .then((data)=>{console.log(data,"productdata")})
  // },[])

  return (
    <>
      <div className='flex-content top'>
        <div className='left-content'>
          <div className="flex-start">
          <img className="image-svg" src={left} /> <p className="upper-p">Back</p></div>
          <img className='product-img leftcontent-img' src={img}></img>
          
        </div>
        <div className="right">
   
            <div className='title-content'>
              <p className="title">Power Plush Longwear Foundation</p>
              <img className="image-svg" src={heartsvg} />
            </div>
            <div className="price-tag">₹ 279</div>
            <div className="reviews">
              <img className="image-svg star" src={starfill} />
              <img className="image-svg star" src={starfill} />
              <img className="image-svg star" src={starfill} />
              <img className="image-svg star" src={starfill} />
              <img className="image-svg star" src={star} />
            </div>
            <div className="delivery">
              <div className="delivery-uppercontent">
              <img className="image-svg" src={location} />
              <p className="">Deliver to</p>
              </div>
              
                <input className="input" placeholder='Your Address' />
            
              <div className="lower-content">Delivery by 12 Apr, Friday</div>

            </div>
          

          <div className="flex-content gap">
          <div className="addcart add">
            
            <img className="image-svg " onClick={decCount} style={{'height':'12px'}} src={minus} /> {count} <img className="image-svg " onClick={incCount}  style={{'height':'12px'}} src={plus} /> 
            </div>
            <div className="addcart">BUY NOW </div>
          </div>
         
        <p className="product-detail">Product Details</p>
            <p className="desc">My Power Plush Longwear foundation is a hydrating, instantly smoothing foundation with medium, buildable coverage and up to 12 hours of comfortable wear. This weightless formula seamlessly blends into the skin to blur fine lines, pores, and texture. It leaves a soft, cushiony feel with an airbrushed, satin finish that’s not too dewy, not too matte, but the perfect in between.

</p>

        </div>
      </div>
      <div className="suggest-gallery">
        <p className="heading-new">Similar Products</p>
        <div className="grid">
        <ProductItem/>
         <ProductItem/>
         <ProductItem/>
         <ProductItem/>
        </div>
      </div>
    </>
  )
}

export default ProductDesc