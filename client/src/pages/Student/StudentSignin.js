import React, { useState } from 'react';
import axios from 'axios';

function StudentSignin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5002/register', { username, email, password }, { withCredentials: true });
      if (response.status === 200) {
          setMessage("Registration Successful!");
      } else {
          console.log('iam')
          setMessage("Registration failed. Please try again.");
      }
    } catch (err) {
      setMessage("Registration failed. Please try again.");
    }
  }

  return (
    <div className='flex flex-row m-10 mt-16 items-center justify-between sm:mx-16 md:mx-32 xl:mx-64'>
      <div className='flex flex-col justify-between'>
        <h1 className='text-black text-2xl xl:text-4xl text-center p-6 font-Sansation font-bold'>Sign in to Start Your Learning Journey</h1>
        <form className='flex flex-col justify-around' onSubmit={handleSubmit} >
          <input 
              className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold mb-4' 
              type='text' 
              placeholder='Username' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <input 
              className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold mb-4' 
              type='email' 
              placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input 
              className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold mb-4' 
              type='password' 
              placeholder='Password' 
              value={password} // Fixed
              onChange={(e) => setPassword(e.target.value)} // Fixed
          />
          <input 
              className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold mb-12' 
              type='password' 
              placeholder='Confirm Password' // Fixed
              value={confirmPassword} // Fixed
              onChange={(e) => setConfirmPassword(e.target.value)} // Fixed
          />
          <button 
              className='border border-black border-5 w-full p-3 bg-gray-300 text-black font-bold cursor-pointer hover:bg-yellow-500' 
              type='submit' 
              value='Sign Up'>
              Register
          </button>
        </form>
        {message && <p className='mt-4 text-red-500'>{message}</p>}
        <p className=''>Already have an account? <a className='font-bold hover:text-yellow-500' href='/login'>Log in</a></p>
      </div>
      <img className='w-1/2' src={process.env.PUBLIC_URL + '/img/sign in.jpg'} alt='login-image' />
    </div>
  )
}

export default StudentSignin;
