import React, { useState } from 'react'
import styles from '../Register/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { response } from 'express';

function Otp() {

  const host = "http://localhost:5050"

  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  const onChange = (e) => { setEmail(e.target.value)}

  const handleSubmit = async (e) => {
    const response = await fetch(`${host}/api/shico/user/otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    })

    const json = await response.json();
    if (json.success) {
      navigate("/verifyOTP")
    }
    else {
      alert(json.error, "OTP could not be sent")
    }
  }

  return (
    <>
      <div className="flex column container login-container">
        <h1 className="login-heading">Create your account</h1>
        <p className="">Enter your email to sign up </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="email" className='form-control' onChange={onChange} name="name" placeholder="someone@example.com" />
          </div>
          <button className="">Send OTP</button>
        </form>

        <div className="footer">
          <div className="first-text">already have an account ?</div>
          <div className="register"><Link to='/login'>Log in </Link></div>
        </div>
      </div>

    </>
  )
}

export default Otp