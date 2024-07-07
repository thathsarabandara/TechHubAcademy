import React from 'react'

function CourseCard(props) {
  return (
    <div className='bg-white border border-yellow-500 rounded-xl flex flex-col items-right transition duration-300 ease-in-out transform hover:scale-105 hover:border-black hover:bg-yellow-200 hover:cursor-pointer'>
        <img className='w-128 h-64 p-3 object-cover' src={`${process.env.PUBLIC_URL}${props.location}`} alt={props.location} />
        <div className='flex flex-row justify-around items-center m-2'>
            <div className='flex flex-col p-2 items-start'>
                <h1 className='font-Sansation font-bold text-lg'>{props.company}</h1>
                <h1 className='font-Sansation font-bold'>{props.heading}</h1>
            </div>
            <button className='border border-yellow-500 text-black font-bold bg-yellow-500 rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:border-black hover:bg-white hover:cursor-pointer'>See Details</button>
        </div>
        <h1 className='pl-6 p-1'>Course</h1>
    </div>
  )
}

export default CourseCard