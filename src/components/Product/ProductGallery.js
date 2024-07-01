import React ,{useState , useEffect}from 'react'
import ProductItem from '../Product/ProductItem'
import './ProductItem.css'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductGallery(props) {
    const host = "http://localhost:5050"
    const productInitial = []
    const [len,setLen]=useState('0');
    const [product, setProduct] = useState(productInitial)

    const category=props.category;

    const getProduct = async () => {
      //API CALL
      const response = await fetch(`${host}/api/shico/product/?category=${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json()
      console.log(json)
     setLen(json.length)
      setProduct(json)}


      useEffect(() => {
          getProduct()
      },[])
       
        
    
  return (
    <>
      <div className="box">
        <div className="flex-horizontal">
            <div className="heading-new">{category}
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
            { product===null ? <h1>{console.log(product)}loading...</h1>:
                product.map((product)=>{
                    return <ProductCard  key={product._id} product_name={product.product_name} selling_price={product.selling_price} market_price={product.market_price} profit={product.profit} imgsrc={product.imgsrc} imghoversrc={product.imghoversrc}/>
                })
            }
        </div>
    </div>

    </>
  )
}

export default ProductGallery