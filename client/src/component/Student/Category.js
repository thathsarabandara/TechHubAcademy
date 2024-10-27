import React from 'react';

function Category(props) {
  return (
    <div className='flex flex-row items-center border border-yellow-500 divide-8 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:border-black hover:bg-yellow-200 hover:cursor-pointer'>
      <img className='w-fit h-20 p-3 object-cover' src={`${process.env.PUBLIC_URL}${props.location}`} alt={props.location} />
      <h1 className='text-black text-xl font-Sansation font-bold mr-5'>{props.name}</h1>
    </div>
  );
}

export default Category;
