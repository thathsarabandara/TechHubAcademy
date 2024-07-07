import React from 'react'

function StudentSignin() {
  return (
    <div className='flex flex-row m-10 mt-16 items-center justify-between sm:mx-16 md:mx-32 xl:mx-64'>
      <div className='flex flex-col justify-between'>
        <h1 className='text-black text-2xl xl:text-4xl text-center p-6 font-Sansation font-bold'>Sign in to Start Your Learning Journey</h1>
        <form className='flex flex-col justify-around'>
          <input className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold mb-4' type='text' placeholder='FullName' />
          <input className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold mb-4' type='email' placeholder='Email' />
          <input className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold mb-12' type='password' placeholder='Password' />
          <input className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold cursor-pointer hover:bg-yellow-500' type='submit' value='Sign Up' />
        </form>
        <p className=''>Already have an account? <a className='font-bold hover:text-yellow-500' href='/login'>Log in</a></p>
      </div>
      <img className='w-1/2' src={process.env.PUBLIC_URL + '/img/sign in.jpg'} alt='login-image' />
    </div>
  )
}

export default StudentSignin