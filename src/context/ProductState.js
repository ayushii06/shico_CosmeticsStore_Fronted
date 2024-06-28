import React from "react";
import ProductContext from "./ProductContext";
import { useState } from "react";

const ProductState = (props) => {
  const host = "http://localhost:5050"
  const productInitial = []
  const [product, setProduct] = useState(productInitial)

  //GET ALL NOTES
  const getProduct = async () => {
    //API CALL
    const response = await fetch(`${host}/api/shico/product/getallProducts`,
     {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token')
      },
    });

    const json = await response.json()

    if(json.success){
        setProduct(json.products)
    }
    else{
        alert("server error")
    }
    
  }


  return (

    <ProductContext.Provider value={{product,getProduct}}>
      {props.children}
    </ProductContext.Provider>

  )
}


export default ProductState;