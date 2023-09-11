import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import navBarConfig from './navBarConfig';
import Portfolio_logo from './../../assets/Portfolio_Logo.png'

const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const links = navBarConfig;

  const handleNavToggle = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed top-0 z-10'>
      <Link to={'home'} smooth duration={500}>
        <div className='cursor-pointer'>
          <img src={Portfolio_logo} alt="logo" className='w-20' />
        </div>
      </Link>
      <ul className='hidden md:flex'>
        {links &&
          links.map(({ id, link, text }) => {
            return (
              <li
                key={id}
                className='px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200'
              >
                <Link to={link} smooth duration={500}>
                  {text}
                </Link>
              </li>
            );
          })}
      </ul>
      <div
        onClick={handleNavToggle}
        className='cursor-pointer pr-4 z-10 text-white md:hidden'
      >
        {navMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {navMenu && (
        <ul className='md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
          {links &&
            links.map(({ id, link, text }) => {
              return (
                <li
                  key={id}
                  className='px-4 py-6 cursor-pointer font-medium text-4xl text-white hover:scale-105 duration-200'
                >
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    onClick={handleNavToggle}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
