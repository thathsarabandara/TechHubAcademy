import React from 'react';
import './pages.css';
import Reviewcard from '../component/Reviewcard';
import NoticeCard from '../component/NoticeCard';

function Home() {
    const reviews = [
        {
          description: "I recently completed a full-stack development course at TechHub Academy, and I couldn't be happier with the experience. The instructors are knowledgeable and always available for questions. The course content is up-to-date with the latest industry standards, which has really helped me in my current job. I also appreciated the hands-on projects that allowed me to apply what I learned in real-world scenarios. Highly recommend TechHub Academy to anyone looking to advance their tech skills!",
          location: "/img/1.jpeg",
          name: "Thathsara",
          position: "FullStack Developer"
        },
        {
            description: "TechHub Academy has been a game-changer for my career. The flexibility of the online courses allowed me to learn at my own pace while balancing my job and family responsibilities. The platform is user-friendly, and the customer support team is incredibly responsive. I especially enjoyed the community forums where I could interact with fellow learners and instructors. The courses are well-structured and provide a comprehensive understanding of each topic. I’ve already secured a new job thanks to the skills I gained here!!",
            location: "/img/3.jpeg",
            name: "Nathasha",
            position: "Devops Developer"
         },
        {
            description: "As someone new to the tech field, I was initially overwhelmed by the amount of information out there. TechHub Academy made the learning process smooth and enjoyable. The step-by-step tutorials and interactive exercises helped me build a solid foundation in programming. The real-world projects included in the curriculum were particularly beneficial, giving me practical experience that I could showcase in my portfolio. The support from the TechHub Academy community was fantastic.",
            location: "/img/2.jpeg",
            name: "Bandara",
            position: "BackEnd Developer"
        },
    ];
    const newses = [
        {
            location:"/img/news/1.png",
            heading:"AI Revolution: New Breakthroughs in Machine Learning Transform Industry Standards"
        },
        {
            location:"/img/news/2.png",
            heading:"Cybersecurity Alert: Latest Threats and How Companies are Fortifying Defenses"
        },
        {
            location:"/img/news/3.png",
            heading:"5G Expansion: How the Next Generation Network is Accelerating Global Connectivity"
        },
        {
            location:"/img/news/4.png",
            heading:"Quantum Computing Milestone Achieved: Experts Predict Paradigm Shift in Technology"
        }
    ];

  return (
    <div>
      <div className='bg-img flex items-center justify-left  p-6 md:p-12 lg:p-16'>
        <div className='text-left max-w-3xl'>
          <h1 className='font-inter font-bold subpixel-antialiased text-xl md:text-3xl lg:text-6xl'>
            Unlock Your Potential with TechHub Academy
          </h1>
          <h2 className='font-inter subpixel-antialiased sm:text-xs md:text-lg lg:text-xl mt-4 m-3'>
          Welcome to Sara Academy, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.  
          </h2>
          <div className='mt-8'>
            <button className='bg-yellow-500 text-black text-base md:text-lg lg:text-xl font-bold py-4 px-6 rounded-2xl shadow-md hover:bg-white transition duration-300 ease-in-out'onClick={() =>window.location.href = "/login"}>
              Start Learning
            </button>
          </div>
        </div>
      </div>
      <div className='bn-white mx-8 lg:mx-32'>
         <h1 className='text-black text-3xl text-center font-Sansation font-bold p-5'>Welcome to TeachHub Academy</h1>
         <div className='flex flex-row  items-center justify-around'>
            <div className='flex flex-col'>
                <h1 className='text-black text-3xl text-center font-Sansation font-bold p-5'>Empowerment</h1>
                <img className='w-fit p-3 hover:transition duration-300 ease-in-out' src={process.env.PUBLIC_URL + '/img/1.jpeg'} alt="img-1"></img>
            </div>
            <div className='flex flex-col hover:transition duration-300 ease-in-out'>
                <h1 className='text-black text-3xl text-center font-Sansation font-bold p-5'>Transformation</h1>
                <img className='w-fit p-3' src={process.env.PUBLIC_URL + '/img/2.jpeg'} alt="img-2"></img>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-black text-3xl text-center font-Sansation font-bold p-5'>Enlightenment</h1>
                <img className='w-fit p-3' src={process.env.PUBLIC_URL + '/img/3.jpeg'} alt="img-3"></img>
            </div>
         </div>
      </div>
      <div className='bg-yellow-500 m-2 flex flex-row items-center justify-around border rounded-xl lg:m-16'>
         <div className='flex flex-col items-center justify-around p-6'>
            <h1 className='font-Sansation font-bold text-5xl text-center text-black '>250+</h1>
            <p className='font-Sansation font-bold text-base text-center text-black '>Total Courses</p>
         </div>
         <div className='flex flex-col items-center justify-around p-6'>
            <h1 className='font-Sansation font-bold text-5xl text-center text-black'>1000+</h1>
            <p className='font-Sansation  font-bold text-base text-center text-black'>Total Learning Hours</p>
         </div>
         <div className='flex flex-col items-center justify-around p-6'>
            <h1 className='font-Sansation font-bold text-5xl text-center text-black'>15+</h1>
            <p className='font-Sansation  font-bold text-base text-center text-black'>Total Instructers</p>
         </div>
         <div className='flex flex-col items-center justify-around p-6'>
            <h1 className='font-Sansation font-bold text-5xl text-center text-black'>2500+</h1>
            <p className='font-Sansation  font-bold text-base text-center text-black'>Total Students</p>
         </div>
      </div>
      <div className='p-3 flex-col items-left justify-center xl:mx-32'>
        <h1 className='text-2xl text-black font-Sansation font-bold text-left'>What Our Customers Says About US</h1>
        <h1 className='text-2xl text-black font-Sansation font-bold text-left'>About <span className='text-2xl text-yellow-500 font-Sansation font-bold text-left'>Our Courses</span></h1>
        <div className='flex flex-row items-center justify-around '>
            {reviews.map((review, index) => (
                <Reviewcard
                key={index}
                description={review.description}
                location={review.location}
                name={review.name}
                position={review.position}
                />
            ))}
        </div>
      </div>
      <div className='bg-gradient-to-b from-white to-yellow-500 gap-0 justify-around flex flex-col'>
        <h1 className='text-2xl text-black font-Sansation font-bold text-center m-4'>TechHub News</h1>
        <div className='flex flex-row  xl:mx-96 '>
        {
            newses.map((news , index) =>(
                <NoticeCard 
                    key={index}
                    location={news.location}
                    heading={news.heading}
                />  
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default Home;
