import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frameImage from '../assets/frame.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons' // Replace 'react-icons/ai' with the correct package name


const Template = ({ title, desc1, desc2, image, formtype, setLogged }) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

      <div className=''>
        <h1 className='text-richblack-5 font-semibold text-[1.78rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading[1.625rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span>
          <br></br>
          <span className='text-blue-100'>{desc2}</span>
        </p>

        {formtype === 'signup' ? <SignupForm setLogged={setLogged} /> : <LoginForm setLogged={setLogged} />}
        <div className='flex w-full items-centermy-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading[1.375rem] '>OR</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button>
            <p>Sign up with google</p>
        </button>
       
      </div>
      <div>
        <img src={frameImage} width={558} height={584} loading='lazy'/>
        <img src={image} width={558} height={584} loading='lazy'/>
      </div>
    </div>
  )
}

export default Template;
