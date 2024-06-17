import React from 'react'
import styles from '../Register/Register.css'

function Otp() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({email: "" });
  const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
const handleSubmit = async(e)=>{
  e.preventDefault();
  const response = await fetch("https://shico-cosmeticsstore-backend.onrender.com/api/shico/user/otp", {
      origin: "https://forthefuture.onrender.com",
      mode: "cors",
     method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials.email}),

      });
      const json = await response.json();
      console.log(json)
      if (json.success) {
         navigate("/register")
      }
      else {
          alert(json.error, "OTP could not be sent")
      }


}
  return (
    <>
         <div className="flex column container login-container">
         <h1 className="login-heading">Hi, Welcome to Shico!</h1>
        <p className="">Verify OTP</p>
        <form onSubmit={handleSubmit}>
           <div className="form-group">
                <input type="text" id="email" className='form-control' value={credentials.name} onChange={onChange} name="name" placeholder="Enter your email"/>
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