import React from 'react'

function Reviewcard(props) {
  return (
    <div className='bg-white border border-10-yellow-500 rounded-2xl flex flex-col m-4'>
        <h1 className='text-yellow-500 text-xl text-left font-saira-stencil font-bold m-8'>"</h1>
        <p className='text-black text-base text-center font-saira-stencil'>{props.description}</p>
        <h1 className='text-yellow-500 text-xl text-right font-saira-stencil font-bold m-8'>"</h1>
        <div className='flex flex-row items-center'>
         <img className="w-20 p-3" src={`${process.env.PUBLIC_URL}${props.location}`} alt={props.location} />
          <div className='flex flex-col'>
            <h1 className='text-xl text-black font-saira-stencil font-bold'>{props.name}</h1>
            <h1 className='text-xl text-black font-saira-stencil'>{props.position}</h1>
          </div>
        </div>
    </div>
  )
}

export default Reviewcard