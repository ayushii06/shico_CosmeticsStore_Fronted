import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SellerHomePage() {
  const navigate = useNavigate()
  const [click,setClick] = useState(false)
  const handleClick = () => {
    navigate('/addproduct')
  }
  return (
    <>
    <div className="center" style={{"margin":"30vh auto"}}>
    <div className='p-12 heading-product'>Welcome Seller ,</div>
    <div className='fs-3'>Here you can add your products. Click on Add Product to add your products</div>
    <button className='' onClick={handleClick}>Add Product</button>
    </div>
    </>
  )
}

export default SellerHomePage