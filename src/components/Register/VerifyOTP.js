import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OtpInput from '../Register/OtpInput'


const VerifyOTP = () => {
    const host = "http://localhost:5050"
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({otp1: "" , otp2: "", otp3: "", otp4: "", otp5: ""});
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async(e)=>{
        
        navigate("/register")
    }
    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
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
            <button className="" onClick={handleSubmit}>Send OTP</button>
    

        <div className="footer">
            <div className="first-text">didn't receive an OTP?</div>
            <div className="register"><Link to='/login'>Resend OTP</Link></div>
        </div>
    </div>
   </>
  )
}

export default VerifyOTP
