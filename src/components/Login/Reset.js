import React , {useState} from 'react'
import '../Login/login.css'
import { Link, useNavigate} from 'react-router-dom'

const Reset=()=> {
    let navigate = useNavigate();
    
    const [email,setEmail] =useState("")
    const onChange = (e) => {
        setEmail(e.target.value)
    }
    
    const host = "http://localhost:5050"

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const response = await fetch(`${host}/api/shico/user/generateResetToken`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email}),
  
        })
        const json = await response.json();
        console.log(json)

        if(json.success){
            alert('Password reset link sent to your email!')
        }
        else{
            alert(json.message)
        }
    }
        
    
    return (
      <>
     
      <div className="login-container container flex column">          
          <form action="post" onSubmit={handleSubmit}>
          <p className="">Reset link will be sent to email</p>
             <div className=" flex-column">
                  <input type="email" id="email" value={email} onChange={onChange} name="email" placeholder="Enter your email"/>
              </div>
              <button className="">Send Link</button>
             
          </form> 
         
      </div>
      </>
    )
  }
  

export default Reset