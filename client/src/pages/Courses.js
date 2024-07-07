import React from 'react';
import CourseCard from '../component/CourseCard';
import Category from '../component/Category';
import CertificateCard from '../component/CertificateCard';

function Courses() {
  const Categories = [
    {
      location:"/img/category/1.png",
      name:"Web Development"
    },
    {
      location:"/img/category/2.png",
      name:"Cyber Security"
    },
    {
      location:"/img/category/3.png",
      name:"Data Science"
    },
    {
      location:"/img/category/4.png",
      name:"Software Development"
    },
    {
      location:"/img/category/5.png",
      name:"Project Management"
    },
    {
      location:"/img/category/6.png",
      name:"Cloud Computing"
    },
    {
      location:"/img/category/8.png",
      name:"Artifical Inteligence"
    },
    {
      location:"/img/category/8.png",
      name:"Machine Learning"
    }
  ];
  const courses = [
    {
      location:"/img/CourseThumnail/1.jpeg",
      company:"IBM",
      heading:"Python Programming"
    },
    {
      location:"/img/CourseThumnail/2.jpeg",
      company:"IBM",
      heading:"Javascript Bootcamp"
    },
    {
      location:"/img/CourseThumnail/3.jpeg",
      company:"Academy B",
      heading:"M E R N Stack"
    },
    {
      location:"/img/CourseThumnail/4.jpeg",
      company:"Meta",
      heading:"DJango Framework"
    },
    {
      location:"/img/CourseThumnail/5.jpeg",
      company:"Meta",
      heading:"Kotlin Programing"
    },
    {
      location:"/img/CourseThumnail/6.jpeg",
      company:"Meta",
      heading:"Version Control"
    },
    {
      location:"/img/CourseThumnail/7.jpeg",
      company:"IBM",
      heading:"MySQL Programming"
    },
    {
      location:"/img/CourseThumnail/8.jpeg",
      company:"IBM",
      heading:"UI/UX Principles"
    }
  ];
  const certificates = [
    {
      name:"Front End Developer",
      company:"meta",
      location:"/img/Certifications/1.jpeg"
    },
    {
      name:"Back End Developer",
      company:"meta",
      location:"/img/Certifications/2.jpeg"
    },
    {
      name:"Database Engineer",
      company:"meta",
      location:"/img/Certifications/3.jpeg"
    },
    {
      name:"AI Engineer",
      company:"meta",
      location:"/img/Certifications/4.jpeg"
    }
  ];

  return (
    <div className='mt-24'>
      <div className='flex bg-yellow-500 items-center justify-center'>
        <img className='w-64 h-fit shadow p-3 ' src={process.env.PUBLIC_URL + '/img/banner-img.png'} alt="img-3"></img>
      </div>
      <div className='flex flex-col mt-32 m-10'>
          <h1 className='font-Sansation font-bold text-2xl'>Top Categories</h1>
          <div className='m-10 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center justify-center'>
             {Categories.map((category , index) =>(
              <Category 
                key={index}
                location={category.location}
                name={category.name}
              />
             )
            )}
          </div>
      </div>
      <div className='flex flex-col m-10'>
          <h1 className='font-Sansation font-bold text-2xl'>Top Courses on this Week</h1>
          <div className='m-10 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center justify-center'>
             {courses.map((course , index) =>(
              <CourseCard 
                key={index}
                location={course.location}
                company={course.company}
                heading={course.heading}
              />
             )
            )}
          </div>
      </div>
      <div className='bg-yellow-500 flex flex-col items-center justify-center pb-3'>
        <h1 className='font-Sansation font-bold text-3xl text-center p-3'>Organization Partners</h1>
         <div className='grid grid-cols-7 grid-row-1 items-center justify-center'>
          <img className='w-48 h-48 p-3' src={process.env.PUBLIC_URL + '/img/sponsers/1.jpeg'} alt="img-3"></img>
          <img className='w-48 h-48  p-3' src={process.env.PUBLIC_URL + '/img/sponsers/2.jpeg'} alt="img-3"></img>
          <img className='w-48 h-48  p-3' src={process.env.PUBLIC_URL + '/img/sponsers/3.jpeg'} alt="img-3"></img>
          <img className='w-48 h-48  p-3' src={process.env.PUBLIC_URL + '/img/sponsers/4.jpeg'} alt="img-3"></img>
          <img className='w-48 h-48  p-3' src={process.env.PUBLIC_URL + '/img/sponsers/5.jpeg'} alt="img-3"></img>
          <img className='w-48 h-48  p-3' src={process.env.PUBLIC_URL + '/img/sponsers/6.jpeg'} alt="img-3"></img>
          <img className='w-48 h-48  p-3' src={process.env.PUBLIC_URL + '/img/sponsers/7.jpeg'} alt="img-3"></img>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-Sansation font-bold text-3xl text-center p-3'>Specialization Certificate</h1>
         <div className='grid grid-cols-2 grid-row-3 items-center justify-center'>
            {
              certificates.map((certificate , index ) => (
                <CertificateCard
                name={certificate.name}
                company={certificate.company}
                location={certificate.location}
                />
              ))
            }
         </div>
      </div>
    </div>
  );
}

export default Courses;
