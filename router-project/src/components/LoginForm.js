import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import toast from 'react-hot-toast'

const LoginForm = ({setLogged}) => {
    const [formData,setData]=useState({
        email:"",password:""
    })

    const navigate=useNavigate();

    const [showpass,setPass]=useState(false)

    function changeHandler(event){
        setData((prevData)=>{
            return {
            ...prevData,[event.target.name]:event.target.value
            }

        })
    }
    function submitHandler(event){
      //  event.prevenDefault();
        setLogged(true);
        toast.success('Logged In');
        navigate('/dashboard');

    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email address<sup>*</sup></p>
            <input
            required 
            type="email"
            value={formData.email}
            onChange={changeHandler}
            name='email'
            placeholder='enter email'
            />
        </label>

        <label>
            <p>Password<sup>*</sup></p>
            <input
            required 
            type={showpass? "text":"password"}
            value={formData.password}
            onChange={changeHandler}
            name='password'
            placeholder='enter passoword'
            />
            <span onClick={()=>{
                setPass(!showpass);
            }}>
                {showpass? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
            </span>
            <Link to='#'>
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>
        <button>sign in</button>
    </form>
  )
}

export default LoginForm