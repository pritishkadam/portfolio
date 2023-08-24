import React from 'react';
import experienceConfig from './experienceConfig';
// import EMBER from './../assets/ember.png';

const Experience = () => {
  const technologies = experienceConfig;
  return (
    <div
      name='experience'
      className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div className='p-2 pb-8 pt-20'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>
            Experience
          </p>
          <p className='py-6'>These are the technologies I've worked with:</p>
        </div>

        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 pb-20'>
          {technologies &&
            technologies.map(({ id, src, title, style }) => {
              return (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt='techIcon' className='w-20 mx-auto' />
                  <p className='mt-4'>{title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
