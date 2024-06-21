import React,{useState} from 'react'
import styles from '../Register/Register.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Register() {

  let navigate = useNavigate();
  const [seller,setSeller] = useState('seller')
    const [credentials, setCredentials] = useState({ name: "", email: "",mobile:"", password: "", cpass:"" , accountType:"",otp:"" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSeller = async(e)=>{
        setSeller('user')
        setCredentials({ ...credentials, accountType: seller })
    }

    const host = "http://localhost:5050"
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/api/shico/user/signup`, {
        origin: "http://localhost:3000",
        mode: "cors",
       method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email,mobile: credentials.mobile, password: credentials.password , cpass:credentials.cpass, accountType:credentials.accountType,otp:credentials.otp}),

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            navigate("/login")

        }
        else {
            alert(json.error, "Invalid Credentials")
        }


  }
  return (
    
    <>
         <div className="flex column container login-container">
         <h1 className="login-heading">Personal details</h1>
      
        <form onSubmit={handleSubmit}>
           <div className="form-group">
                <input type="text" id="name" className='form-control' value={credentials.name} onChange={onChange} name="name" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <input type="email" id="email" className='form-control' value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                <input type="number" id="number" className='form-control' value={credentials.mobile} onChange={onChange} name="mobile" placeholder="Enter your mobile number"/>
            </div>
            <div className="form-group">
                <input type="password" id="password" className='form-control' value={credentials.password} onChange={onChange} name="password" placeholder="Enter your password"/>
            </div>
            <div className="form-group">
                <input type="password" id="password" className='form-control' value={credentials.cpass} onChange={onChange} name="cpass" placeholder="Confirm your password"/>
            </div>
           
            <button className="">Register</button>
        </form>

        <div className="footer">
            <div className="first-text">already have an account ?</div>
            <div className="register"><Link to='/login'>Log in </Link></div>
        </div>
    </div>

    </>
  )
}

export default Register