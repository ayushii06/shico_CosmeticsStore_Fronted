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
  const productId = window.location.pathname.split('/')[2]
  console.log(productId)
  let [count,setCount]=useState(1);
  let [product,setProduct]=useState({})

  const host = "http://localhost:5050"
  const getDetails = async() =>{
    const response = await fetch(`${host}/api/shico/product/fetchAllData`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify({
          prodId: productId
        })
      })

     
      const json = await response.json()

      if(json.success){
        setProduct(json.product)
        console.log(json.message)
      }
      else{
        console.log(json.message)
      }
    
  }

  useEffect(()=>{
    getDetails()
  },[])
  function incCount(){
    setCount(count+1)
  }

  function decCount(){
    setCount(count-1)
  }
 

  return (
    <>
    {!product ? <div>Loading...</div> : 
    <>
      <div className='flex-content top'>
        <div className='left-content'>
          <div className="flex-start">
          <img className="image-svg" src={left} /> <p className="upper-p">Back</p></div>
          <img className='product-img leftcontent-img' src={product.imgsrc}></img>
          
        </div>
        <div className="right">
   
            <div className='title-content'>
              <p className="title">{product.product_name}</p>
              <img className="image-svg" src={heartsvg} />
            </div>
            <div className="price-tag">₹ {product.selling_price}</div>
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
            <p className="desc">{product.desc}</p>

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
      </div></>}
    </>
  )
}

export default ProductDesc