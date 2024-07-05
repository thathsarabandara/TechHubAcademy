import React from 'react'

function CourseCard() {
  return (
    <div className='bg-white border border-yellow-500 rounded-xl flex flex-col items-right'>
        <img className='h-fit p-3 object-cover' src={process.env.PUBLIC_URL + '/img/CourseThumnail/Python Developing.jpeg'} />
        <div className='flex flex-row justify-around items-center m-2'>
            <div className='flex flex-col p-2 items-start'>
                <h1 className='font-Sansation font-bold text-lg'>IBM</h1>
                <h1 className='font-Sansation font-bold'>Python programming</h1>
            </div>
            <button className='border border-yellow-500 text-black font-bold bg-yellow-500 rounded-lg p-4'>See Details</button>
        </div>
        <h1 className='pl-6 p-1'>Course</h1>
    </div>
  )
}

export default CourseCard