import React, { useState } from 'react'
import user from '../assets/svg/user.svg'
import cart from '../assets/svg/cart.svg'
import logo from '../assets/logo/logo.png'
import bars from '../assets/svg/bars.svg'
import cross from '../assets/svg/cross.svg'
import '../Home/Home.css'
import { Link } from 'react-router-dom'
import search from '../assets/svg/search.svg'
import down from '../assets/svg/angle-down-solid.svg'


function Navbar() {

 
  const [val,setVal]=useState('')
  const [click,setClick]=useState(false)
  const [crossed,setCrossed]=useState(false)

  function handleChange(e){
    setVal(e.target.value);
  }

  function onClick(){
    setClick(true)
    setCrossed(true)
  }
  function onClicks(){
  setClick(false)
    setCrossed(false)
  }
  
  
  return (
    <div className="navbar">
        <div className="svg-sidebar">
          {!crossed? <img src={bars} alt="" id="bar" className="image-svg user" onClick={onClick}/>: <img src={cross} alt="" id="bar" className="image-svg user" onClick={onClicks}/>}
       
   
            <div className="logo"><img className="logo" src={logo} alt=""/></div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newarrivals">New Arrivals</Link></li>
          
        
</ul>
<div className="search-box"><img className="image-svg" src={search}/><input className="" placeholder='Search for products'  value={val} onChange={handleChange}/></div>
        </div>
        
   
       <div className="visible">
            {!localStorage.getItem('token')? <Link to='/login'><img className="image-svg user" src={user} alt=""/>Login</Link>:<Link to='/user'><img className="image-svg user" src={user} alt=""/>User</Link>}
          <Link to='/cart'><img className="image-svg" src={cart} alt=""/>Cart</Link>
            
        </div>
{click? <div className="media-query" id="dropdown">
            <div className="navbar-container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newarrivals">New Arrivals</Link></li>
            <li><Link to="/cosmetic">Cosmetics</Link></li>
            <li><Link to="/makeup">Makeup</Link></li>
            <li><Link to="/fragrance">Fragrance</Link></li>
            </div>
        </div>:<></>}
       
    </div>
  )
}

export default Navbar