import React from 'react';

function NavBar() {
  return (
    <div className='border border-black'>
         <div className="fixed top-0 left-0 w-full grid grid-rows-1 grid-cols-12 gap-4  bg-white">
      <div className="col-span-2">
        <a href='/'><img className='max-h-16 pl-10' src={process.env.PUBLIC_URL + '/img/banner-img.png'} alt="Banner"/></a>
      </div>
      <div className="col-span-4 flex items-center justify-center ">
       <div className=' border border-yellow-500 rounded-2xl min-w-full'>
         <input className='rounded-2xl  p-2.5 min-w-full' type='text' placeholder='Search For Your all Courses'></input>
       </div>
      </div>
      <div className="col-span-1 flex items-center justify-center">
          <button className="bg-yellow-500 text-black font-regular py-2 px-4 rounded-2xl shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out"> Search</button>
     </div>
      <div className="col-span-2 flex items-center">
            <a href="#home" className="mx-6 hover:text-yellow-500">Teach On TechHub</a>
      </div>
      <div className="col-span-2 flex items-center justify-center gap-0">
        <button className="border border-yellow-500 text-black font-bold py-2 px-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"onClick={() => window.location.href = '/signin'}>Sign up</button>
        <button className="bg-yellow-500 text-black font-bold py-2 px-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out" onClick={() => window.location.href="/login"}>Log in</button>
      </div>
    </div>
      <div className='absolute w-full top-16 bg-yellow-500 flex flex-row justify-center'>
            <a href="/" className='text-black text-bold p-2 px-5 hover:text-white'>Home</a>
            <a  href="/courses" className='text-black text-bold p-2 px-5 hover:text-white'>Courses</a>
            <a  href="/aboutus" className='text-black text-bold p-2 px-5 hover:text-white'>About us</a>
      </div>
    </div>
  );
}

export default NavBar;
