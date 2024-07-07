import React from 'react'

function About() {
  return (
    <div className='mt-20'>
      <div className='flex bg-yellow-500 items-center justify-center'>
        <img className='w-64 h-fit shadow p-3 ' src={process.env.PUBLIC_URL + '/img/banner-img.png'} alt="img-3"></img>
      </div>
      <div className='bg-white border border-yellow-500 m-5 rounded-2xl mx-32'>
        <h1 className='text-center text-black font-sansita font-bold text-4xl p-2'>Our Vision</h1>
        <h1 className='text-left text-black font-sansita font-bold text-4xl px-5'>"</h1>
        <h1 className='text-center text-black font-sansita font-bold text-2xl p-5'>
        Empowering learners worldwide to achieve their fullest potential through innovative, accessible, and comprehensive online education.
        </h1>
        <h1 className='text-right text-black font-sansita font-bold text-4xl px-5'>"</h1>
      </div>
      <div className='bg-white border border-yellow-500 m-5 rounded-2xl mx-32'>
        <h1 className='text-center text-black font-sansita font-bold text-4xl p-2'>Our Mission</h1>
        <h1 className='text-left text-black font-sansita font-bold text-4xl px-5'>"</h1>
        <h1 className='text-center text-black font-sansita font-bold text-2xl p-5'>
        "Our mission is to provide high-quality, engaging, and flexible e-learning experiences that cater to diverse learning needs. We aim to bridge the skills gap by offering courses in cutting-edge fields such as web development, cybersecurity, data science, and more. Through expert instruction, hands-on projects, and a supportive learning community, we strive to equip our students with the knowledge and skills necessary to thrive in today's fast-paced and ever-evolving technological landscape.
        </h1>
        <h1 className='text-right text-black font-sansita font-bold text-4xl px-5'>"</h1>
      </div>
      <div className='bg-yellow-500 m-5 border border-yellow-600 rounded-3xl flex flex-col items-center justify-center p-6 shadow-lg'>
      <h1 className='text-center text-white font-sansita font-bold text-4xl p-2'>
        Subscribe Our Newsletter
      </h1>
      <h2 className='text-center text-black font-sansita font-bold text-2xl p-2'>
        Join now to receive personalized recommendations from us
      </h2>
      <img className='w-64 h-auto p-3' src={process.env.PUBLIC_URL + '/img/banner-img.png'} alt="Newsletter Banner" />
      <form className='flex flex-col md:flex-row items-center justify-center mt-4 w-full max-w-lg'>
        <input 
          type='email' 
          placeholder='Enter Your Email Here' 
          className='p-3 w-full md:w-auto border border-gray-300 rounded-l-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-yellow-600'
        />
        <button 
          type='submit' 
          className='bg-black text-white p-3 rounded-r-lg md:rounded-l-none hover:bg-gray-800 transition duration-300 w-full md:w-auto'
        >
          Subscribe
        </button>
      </form>
    </div>
    </div>
  )
}

export default About