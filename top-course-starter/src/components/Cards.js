import React from 'react'
import Card from './Card'

export const Cards = ({data}) => {

    let coArray=[];

    let getCourse=()=>{Object.values(data).forEach(filter=>{
        filter.forEach((course)=>{
            coArray.push(course);

        })
     //   console.log(coArray)
    })
    return coArray;
}

    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourse().map((course)=>{
                return <Card course={course} key={course.id}></Card>
            })

        }
      
    </div>
  )
}

export default Cards
