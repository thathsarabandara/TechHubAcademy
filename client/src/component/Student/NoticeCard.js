import React from 'react'

function NoticeCard(props) {
  return (
    <div className='flex flex-col items-center justify-start border border-5 border-yellow-500 rounded-lg bg-white m-2 w-1/4'>
        <img className='h-32 wide full object-cover p-3 pb-0' src={`${process.env.PUBLIC_URL}${props.location}`} alt={props.location} />
        <h1 className='text-black text-center font-Sansation font-bold sm:text-base md:text-sm lg:font-lg p-5'>{props.heading}</h1>
    </div>
  )
}

export default NoticeCard