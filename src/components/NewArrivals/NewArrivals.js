import React,{ useEffect, useState } from 'react'
import '../Product/ProductItem.css'
import { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import ProductCard from '../Product/ProductCard.js'

function NewArrivals(props) {
  const [len,setLen]=useState('0')
  const context = useContext(ProductContext);
    const {product,getProduct}=context;
    useEffect(()=>{
      getProduct()
      setLen(product.length)
    },[])
  return (
    <>
 <div className="box">
        <div className="flex-horizontal">
            <div className="heading-new">New Arrivals
            <p>Total {len} Items</p> 
            </div>

            <div className="flex">
                <button className="user-input">
                    sort-by
                </button>
                <button className="user-input">filter</button>

            </div>
        </div>
        <div className="grid">
{
          product.map((product) => {
            return <ProductCard key={product._id} product_name={product.product_name} desc={product.desc} selling_price={product.selling_price} market_price={product.market_price} profit={product.profit} imgsrc={product.imgsrc} imghoversrc={product.imghoversrc} category={product.category}/>
        })
    
   
        }
              </div>
    </div>


    </>
  )
}

export default NewArrivals