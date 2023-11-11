import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';



const Navbar = (props) => {
    let isLogged=props.isLogged;
    let setLogged=props.setLogged;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
     <Link to='/'>
        <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
    </Link>    
    <nav>
    <ul className='text-white  flex gap-x-6'>
        <li>
        <Link to="/">Home</Link>   
        </li>
        <li>
        <Link to="/">About</Link>
        </li>
        <li>
        <Link to="/">Contact</Link>
        </li>
        
        </ul>     
        
    </nav>  

    <div className='flex items-center gap-x-4 '>
        { !isLogged&&
            <Link to="/login">
                <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700'>login</button>
            </Link>
        }

   { !isLogged&&
            <Link to="/signup" >
                <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700'>signup</button>
            </Link>
        }
         { isLogged&& 
            <Link to="/" >
                <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700' onClick={()=>{
                   setLogged(false);
                   toast.success("logged out") 
                }}>logout</button>
            </Link>
        }

   { isLogged &&
            <Link to="/dashboard">
                <button className='bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700'>dashboard</button>
            </Link>
        }
    </div>
        
   </div>
  )
}

export default Navbar