import React from 'react'
import user from "../assets/user-icon/user.svg"
import arrow from "../assets/user-icon/arrow.svg"
import file from "../assets/user-icon/file.svg" 
import account from "../assets/user-icon/account.svg"
import '../User/User.css'
import logout from "../assets/user-icon/logout.svg"
import payment from "../assets/user-icon/payments.svg" 
import { useEffect } from 'react'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function User(props) {
  const host = "http://localhost:5050"
  let navigate=useNavigate();
  const [data, setData] = useState([])

  let names = localStorage.getItem('name')
  let email = localStorage.getItem('email')
  let mobile = localStorage.getItem('mobile')
 
  //GET ALL NOTES

  const getUser = async()=>{
    const response = await fetch(`${host}/api/shico/profile/getProfile`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+sessionStorage.getItem('token')
        }
    }) 
if(!response.ok){
    navigate(`/error/${json.message}`)
}
const json = await response.json()
    if(json.success){
        setData(json.data)
        
    }
    else{
        navigate(`/error/${json.message}`)
    }
  }

  useEffect(()=>{
    getUser()
  },[])
 
   function handleClick(){
    sessionStorage.removeItem('token')
    alert('Logged out successfully')
    navigate('/')
   }

  return (
    <>
        <div className="user-container">
        <div className="user-left-container">
            <div className="account-name">
                <img src={user} alt="" height="52px" width="52px"/>
                <div>
                    <h5>Hello,</h5>
                    <h3>{data.name}</h3>
                </div>
            </div>
            <div className="user-section">
                <div className="content" style={{"alignItems":"center"}}>
                    <img src={file} alt=""/>
                    <Link to='/cart' style={{"color":"black"}}>MY CARTS</Link>
                    <img src={arrow} className="arrow" alt=""/>
                </div>

                <div className="not-flex">
                <div className="content">
                    <img src={account} alt=""/>
                    <h5>ACCOUNT SETTINGS</h5>
                    
                </div>
                <div className="down-content">
                    <h5>Manage Profile</h5>
                    <h5>Manage Addresses</h5>
                </div>
            </div>

                <div className="content">
                    <img src={payment}alt=""/>
                    <h5>PAYMENTS</h5>
                </div>

                <div className="content" onClick={handleClick}>
                    <img src={logout} alt=""/>
                    <h5 style={{"cursor":"pointer"}}>Logout</h5>
                </div>
            </div>
        </div>
        <div className="right-container">
            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Personal Information</h4>
                    <h5>Edit</h5>
                </div>
                <input type="text" value={data.name}/>
            </div>

            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Email Address</h4>
                    <h5>Edit</h5>
                </div>
                <input type="email" value={data.email}/>
            </div>

            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Mobile Number</h4>
                    <h5>Edit</h5>
                </div>
                <input type="number" value={data.mobile}/>
            </div>

        </div>
    </div>
    </>
  )
}

export default User