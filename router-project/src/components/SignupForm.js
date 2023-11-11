import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import Template from './Template'
import toast from 'react-hot-toast'
const SignupForm = ({setLogged}) => {
    let navigate=useNavigate();
    const [showpass,setPass]=useState(false)
    const [formData,setForm]=useState({
        firstName:"",lastName:"",email:"",password:"",
        confirmpassword:""

    })
    function changeHandler(event){
        setForm((prev)=>{
            return {
                ...prev,[event.target.name]:event.target.value
            }
        })
    }
    function submitHandler(event){
        setLogged(true);
        toast.success('logged in');
        navigate('/dashboard')

    }
  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            <div>
            <lable>
                <p>First Name</p>
                <input type="text" required
                name="firstName"
                onChange={changeHandler}
                placeholder='Enter Name'
                value={formData.firstName}
                />
            </lable>
            <lable>
                <p>last Name</p>
                <input type="text" required
                name="lastName"
                onChange={changeHandler}
                placeholder='Enter Name'
                value={formData.lastName}
                />
            </lable>
            </div>
           <div><lable>
                <p>email</p>
                <input type="text" required
                name="email"
                onChange={changeHandler}
                placeholder='Enter email'
                value={formData.email}
                />
            </lable></div>
            
            <div>
            <lable>
                <p>password</p>
                <input required
                name="password"
                onChange={changeHandler}
                placeholder='Enter password'
                value={formData.passowrd}
                type={showpass? "text":"password"}
                />
                 <span onClick={()=>{
                setPass(!showpass);
            }}>
                
                {showpass? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
            </span>
            </lable>

            <lable>
                <p>confirm passoword</p>
                <input type="password" required
                name="confirmpassword"
                onChange={changeHandler}
                placeholder='password'
                value={formData.confirmpassword}
                />
            </lable>
            </div>
            <button type='submit'>Create Account</button>
           
        </form>

    </div>
  )
}

export default SignupForm