import React from 'react'
import {FcLike} from 'react-icons/fc'

const Card = ({course}) => {

  function clickHandler(){
    
  }

  return (
    <div className='w-[300px] bg-opacity-80 bg-bgDark rounde-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}/>
            <div className=' grid place-items-center w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3'>

            <button onClick={clickHandler}>
                <FcLike/>
            </button>

        </div>
        </div>
        
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>{course.description}</p>

        </div>
    </div>
  )
}

export default Card