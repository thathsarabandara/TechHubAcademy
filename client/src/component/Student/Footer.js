import React from 'react'

function Footer() {
  return (
    <div>
        <div>
            <div className='bg-yellow-500 flex flex-row justify-around'>
                <div className='flex flex-col'>
                <img className='w-40 p-3 shadow' src={process.env.PUBLIC_URL + '/img/banner-img.png'} alt="Banner"></img>
                <h1>Empowering learners through accessible and engaging online education.<br />
                    Byway is a leading online learning platform dedicated to 
                    providing high-quality,<br /> flexible, and affordable educational experiences. 
                </h1> 
                </div>
                <div className='p-3'>
                    <h1 className='font-bold font-bold pt-5 p-2'>Get Help</h1>
                    <ul className='p-3'> 
                        <li className='p-1'>Contact US</li>
                        <li className='p-1'>FAQ's</li>
                    </ul>
                </div>
                <div className='p-3'>
                    <h1 className='font-bold pt-5 p-2'>Contact Us</h1>
                    <ul className='p-3'>
                        <li className='p-1'>Address: 123, Mainstreet,Galle.</li>
                        <li className='p-1'>Tel: 091 456 78996</li>
                        <li className='p-1'>Email:techhubacademy@gmail.com</li>
                    </ul>
                    <div className='flex flex-row justify-around p-3'>
                        <img className='w-16 p-3 shadow' src={process.env.PUBLIC_URL + '/img/social/facebook-icon.png'} alt="Banner"></img>
                        <img className='w-16 p-3 shadow' src={process.env.PUBLIC_URL + '/img/social/github-icon.png'} alt="Banner"></img>
                        <img className='w-16 p-3 shadow' src={process.env.PUBLIC_URL + '/img/social/call-icon.png'} alt="Banner"></img>
                        <img className='w-16 p-3 shadow' src={process.env.PUBLIC_URL + '/img/social/mail-logo.png'} alt="Banner"></img>
                    </div>
                </div>
            </div>
            <div className='bg-black flex flex-col p-3'>
                <h1 className='text-white text-center'>2024 TechHub Academy</h1>
                <h1 className='text-white text-center '>© All Rights Reserved by shadowsara <sup>TM</sup></h1>
            </div>
        </div>
    </div>
  )
}

export default Footer