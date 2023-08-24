import React from 'react';

import portfolioConfig from './portfolioConfig';

const Portfolio = () => {
  const projects = portfolioConfig;

  const handleRedirect = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div
      name='portfolio'
      className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='p-2 pb-8 pt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20'>
          {projects &&
            projects.map(({ id, src, title, demoLink, sourceCodeLink }) => {
              return (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img
                    src={src}
                    alt='projectImage'
                    className='rounded-md duration-200 hover:scale-105 mx-auto h-44'
                  />
                  <div className='w-full bg-transparent bg-gradient-to-r from-black to-gray-800 text-white py-2 text-center'>{title}</div>

                  <div className='flex items-center justify-center'>
                    <button
                      className='w-1/2 px-6 py-3 m-4 mt-0 duration-300 hover:scale-105'
                      onClick={() => {
                        handleRedirect(demoLink);
                      }}
                    >
                      Demo
                    </button>
                    <button
                      className='w-1/2 px-6 py-3 m-4 mt-0 duration-300 hover:scale-105'
                      onClick={() => {
                        handleRedirect(sourceCodeLink);
                      }}
                    >
                      Code
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
