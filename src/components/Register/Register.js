import React,{useState} from 'react'
import styles from '../Register/Register.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Register() {

  let navigate = useNavigate();
  const [seller,setSeller] = useState('seller')
  const [sellerclick,setSellerClick] = useState(false)
  const [buyerclick,setBuyerClick] = useState(false)

  const handleBuyer = ()=>{
    console.log("its buyer")
    setBuyerClick(true)
    setSeller('buyer')
  }

  const handleSeller = ()=>{
    setSellerClick(true)
    setSeller('seller')
  }
  
    const [credentials, setCredentials] = useState({ name: "",mobile:"", password: "", cpass:"" ,otp:"" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

   

    const email = localStorage.getItem('email')

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
            body: JSON.stringify({ name: credentials.name, email: email,mobile: credentials.mobile, password: credentials.password , cpass:credentials.cpass, accountType:"buyer"}),

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
         <div className="flex">
         <div className={sellerclick?"bg-black text-white":"bg-white"} style={{"padding":"12px","border":"1px solid black"}}  onClick={handleSeller}>Seller</div>
         <div className={sellerclick?"bg-black text-white":"bg-white"} style={{"padding":"12px","border":"1px solid black"}}  onClick={handleBuyer}>Buyer</div>
         </div>
        <form onSubmit={handleSubmit}>
           <div className="form-group">
                <input type="text" id="name" className='form-control' value={credentials.name} onChange={onChange} name="name" placeholder="Enter your name"/>
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