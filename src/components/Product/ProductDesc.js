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
import Review from './Review'
import { useNavigate } from 'react-router-dom'

function ProductDesc() {
  const navigate = useNavigate();
  const productId = window.location.pathname.split('/')[2]
  console.log(productId)
  let [count, setCount] = useState(1);
  const [rating, setRating] = useState([])
  let [product, setProduct] = useState({})

  const host = "http://localhost:5050"
  const getDetails = async () => {
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
    console.log(json)

    if (json.success) {
      setProduct(json.product)
      setRating(json.product.ratings)
      console.log(json.message)
      console.log(rating)
    }
    else {
      console.log(json.message)
    }

  }

  useEffect(() => {
    getDetails();
    

  }, [])
  
  function incCount() {
    setCount(count + 1)
  }

  function decCount() {
    setCount(count - 1)
  }

  const [buyed, setBuyed] = useState(false)
  const handleReview = async () => {
    const response = await fetch(`${host}/api/shico/rating/productBuyed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        productId: productId
      })
    })
    const json = await response.json()


    if (json.success) {
      navigate(`/addreview/${productId}`)
    }
    else {

      navigate(`/error/${json.message}`)
    }


  }

  function handleBack(){
    navigate(-1)
  }

  const handleCart = async() =>{
    const response = await fetch(`${host}/api/shico/cart/addtocart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('token'),
        },
        body: JSON.stringify({
          productId: productId,
          quantity: count,
        })
      })

      const json = await response.json();
      console.log(json)

      if(json.success){
        alert('Product added to cart successfully')
      }
      else{
        alert(json.message)
      }
  }
  return (
    <>
      {!product ? <div>Loading...</div> :
        <>
          <div className='flex-content top' style={{ "alignItems": "normal" }}>
            <div className='left-content'>
              <div className="flex-start">
                <img onClick={handleBack} className="image-svg" src={left} /> <p onClick={handleBack} className="upper-p" style={{"cursor":"pointer"}}>Back</p></div>
              <img className='product-img leftcontent-img' src={product.imgsrc}></img>

            </div>
            <div className="right" style={{ "gap": "22px" }}>

              <div className='title-content'>
                <p className="title">{product.product_name}</p>
                <img className="image-svg" src={heartsvg} onClick={handleCart} />
              </div>
              <div className="flex">
                <div className="price-tag sp">₹ {product.selling_price}</div>
                <div className="price-tag mp">₹ {product.market_price}</div>
              </div>
              <div className="reviews">
                <img className="image-svg star" src={starfill} />
                <img className="image-svg star" src={starfill} />
                <img className="image-svg star" src={starfill} />
                <img className="image-svg star" src={starfill} />
                <img className="image-svg star" src={star} />
                <div className="review">(1)</div>
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

                  <img className="image-svg " onClick={decCount} style={{ 'height': '12px' }} src={minus} /> {count} <img className="image-svg " onClick={incCount} style={{ 'height': '12px' }} src={plus} />
                </div>
                <div className="addcart">BUY NOW </div>
              </div>

              <p className="product-detail">Product Details</p>
              <p className="desc">{product.desc}</p>

            </div>
          </div>
          <div className="">
            <div className="flex">
              <p className="heading-new">Rating and Reviews</p>
              <div className="review-btn" onClick={handleReview}>Write a review</div>

            </div>
            {rating.length === 0 ? <div className='title' style={{'margin':"12px 32px"}}>No one has rated this yet</div> :
              rating.map((rate) => {
                return <Review key={rate._id} star={rate.rate} desc={rate.desc} />
              })
            }

          </div>
          <div className="suggest-gallery">
            <p className="heading-new">Similar Products</p>
            <div className="grid">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>

        </>}
    </>
  )
}

export default ProductDesc