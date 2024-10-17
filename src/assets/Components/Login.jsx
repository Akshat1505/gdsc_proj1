import React from 'react'
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase/firebase"
import './Login.css'
import {useNavigate} from "react-router-dom"

const Login = () => {

  let navigate=useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const email=e.target[0].value
    const pass=e.target[1].value
    try {
      const resp=await signInWithEmailAndPassword(auth,email,pass)
      console.log(resp)
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
  <div className='login-page'>  
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='emailBox'>
            <input type="email" placeholder='Your Email' required />
        </div>
        <div className='passBox'>
            <input type="password" placeholder='Your Password' required />
        </div>
        <button>Login</button>
      </form>
    </div>
  </div>  
  )
}

export default Login
