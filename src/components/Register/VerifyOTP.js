import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OtpInput from '../Register/OtpInput'
import { set } from 'mongoose'


const VerifyOTP = () => {
    const host = "http://localhost:5050"
    const navigate = useNavigate();
    const email = localStorage.getItem("email")
    const onOtpSubmit = async(otp) => {
        console.log(otp)
        const response = await fetch(`${host}/api/shico/user/verifyotp`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email:email,otp: otp})
        })
        const json = await response.json();
        if(json.success){
            navigate("/register")
        }
        else{
            alert(json.error, "OTP could not be verified")
        }
    };
 
  return (
   <>
        <div className="flex column container login-container">
         <h1 className="login-heading">OTP Sent Successfully!</h1>
        <p className="">Enter the OTP sent to your email</p>
        <div>
                    <OtpInput length={4}
                        onOtpSubmit={onOtpSubmit} />
                </div>
            <button className="">verify OTP</button>
    

        <div className="footer">
            <div className="first-text">didn't receive an OTP?</div>
            <div className="register"><Link to='/login'>Resend OTP</Link></div>
        </div>
    </div>
   </>
  )
}

export default VerifyOTP
