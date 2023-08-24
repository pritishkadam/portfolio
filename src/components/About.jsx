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
          Hi, I'm Pritish Kadam, from Mumbai, India. I have completed my Masters in Computer Application from University of Mumbai. I have a working experience of more than 3.5 years. Currently, I'm working as a Frontend Engineer in a Product Based Company called Aureus Analytics. Our product caters to the US based Insurance Agencies. 
        </p>
        <br />
        <p className='text-lg mb-20'>
          I'm also proficient in Backend Development and DevOps related activities. I am comfortable wearing multiple hats to get the job done. This helps me in acquiring new skills.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;