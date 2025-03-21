import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col h-full py-20'>
        <div className='pt-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-lg mt-20'>
          Hi, I'm Pritish Kadam, from Mumbai, India. I have completed my Masters
          in Computer Application from University of Mumbai. Skilled Senior UI Engineer with 3 years of experience in the role and a total of 5 years in software industry. Specialized in building dynamic and responsive UIs using React, Node.js, and Express.js and with a proven ability to deliver high-quality solutions in fast-paced environments.
        </p>
        <br />
        <p className='text-lg mb-20'>
          I'm also proficient in Backend Development and DevOps activities associated with it. I am comfortable wearing multiple hats to get the job
          done.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
