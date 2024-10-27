import React from 'react';

function CertificateCard(props) {
  return (
    <div className='bg-white border border-yellow-500 rounded-lg flex flex-col md:flex-row items-center justify-between p-5 m-5 hover:shadow-lg transition-shadow duration-300'>
      <div className='flex flex-col items-start justify-start p-3'>
        <h1 className='font-Sansation font-bold text-2xl md:text-3xl mb-2'>{props.name}</h1>
        <h2 className='font-Sansation font-bold text-xl md:text-2xl mb-2'>by {props.company}</h2>
        <p className='text-gray-700 mb-4'>Change Your Career as {props.name}</p>
        <button className='bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300'>See More</button>
      </div>
      <img
        className="h-48 w-48 md:h-64 md:w-44 object-cover rounded-lg"
        src={`${process.env.PUBLIC_URL}${props.location}`} 
        alt={props.location}
      />
    </div>
  );
}

export default CertificateCard;
