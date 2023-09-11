import React from 'react';
import Profile from './../assets/profile.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 mt-20 md:mt-0'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
        <div className='w-full md:w-2/3 flex flex-col justify-center mx-auto h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            The Developer Next Door
          </h2>
          <p className='text-white py-4 max-w-md'>
            I work as a full time Software Developer at Aureus Analytics. I love to work on web applications
            and turn ideas into real life products.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500}>
              <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 outline-none cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='my-8'>
          <img
            alt='profile'
            src={Profile}
            className='w-full h-96 rounded-2xl mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
