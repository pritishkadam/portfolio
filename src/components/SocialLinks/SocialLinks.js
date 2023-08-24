import React from 'react';
import socialLinks from './socialLinksConfig';

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[40%] left-0 fixed'>
      <ul>
        {socialLinks &&
          socialLinks.map(
            ({ id, linkText, component, style, redirectTo, download }) => {
              return (
                <li
                  key={id}
                  className={`bg-gray-500 flex justify-between items-center w-40 h-14 px-4 -ml-24 hover:-ml-2 duration-300 hover:rounded-md ${style}`}
                >
                  <a
                    href={redirectTo}
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    rel='noreferrer'
                    target='_blank'
                  >
                    {component}
                  </a>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default SocialLinks;
