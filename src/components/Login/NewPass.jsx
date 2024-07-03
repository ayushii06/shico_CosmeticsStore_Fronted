import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const NewPass=()=> {
    let navigate = useNavigate();

    const token = window.location.pathname.split('/')[2]
    console.log(token)

    const [credentials , setCredentials] = useState({pass:"",cpass:""})

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    
    const host = "http://localhost:5050"

    const handleSubmit = async(e)=>{
        console.log("pass", credentials.pass,"cpass" , credentials.cpass)
        e.preventDefault()
        const response = await fetch(`${host}/api/shico/user/resetpassword`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                token:token,
                password:credentials.pass,
                confirmPassword:credentials.cpass,
            }),
  
        })
        const json = await response.json();
        console.log(json)

        if(json.success){
            alert('Password reset successfully')
        }
        else{
            alert(json.message)
        }
    }
        
    
    return (
      <>
     
      <div className="login-container container flex column">          
          <form action="post" onSubmit={handleSubmit}>
          <p className="">Set your new password</p>
             <div className=" flex-column">
                  <input type="password" id="email"  onChange={onChange} name="pass" placeholder="Enter your password"/>
                  <input type="password" id="email" onChange={onChange} name="cpass" placeholder="Confirm your password"/>
              </div>
              <button className="">Reset</button>
             
          </form> 
         
      </div>
      </>
    )
  }

export default NewPass