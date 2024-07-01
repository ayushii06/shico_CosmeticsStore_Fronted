import React from 'react'
import ProductItem from '../Product/ProductItem'

function Slider(props) {
  let header = props.header
  return (
    <>
        <div className="slider-heading p-26 sp-btw" style={{"width":"100%"}}>
            <p className="heading-product">{header}</p>
            <p className="link-pink">View All</p>
        </div>
        <div className="grid slider ">
            <ProductItem/>
        
         
        </div>
      

    </>
  )
}

export default Slider