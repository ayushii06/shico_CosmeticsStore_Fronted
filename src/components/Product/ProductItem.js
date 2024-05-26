import React,{ useEffect } from 'react'
import '../Product/ProductItem.css'
import { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import ProductCard from '../Product/ProductCard.js'

function ProductItem(props) {
    const context = useContext(ProductContext);
    const {product,getProduct}=context;

    var products = product.slice(0, 4);
   
    useEffect(()=>{
      getProduct()
    },[])
   
   return (
    <>   
        {
          products.map((product) => {
            return <ProductCard key={product._id} product_name={product.product_name} desc={product.desc} selling_price={product.selling_price} market_price={product.market_price} category={product.category} profit={product.profit} imgsrc={product.imgsrc} imghoversrc={product.imghoversrc}/>
        })
    
   
        }
    </>
    )
  }



export default ProductItem