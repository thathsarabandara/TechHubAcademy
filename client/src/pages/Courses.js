import React from 'react';
import Category from '../component/Category';
import CourseCard from '../component/CourseCard';

function Courses() {
  return (
    <div className='mt-32 m-10 grid grid-cols-4 gap-4 items-center justify-center'>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}

export default Courses;
