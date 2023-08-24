import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const socialLinks = [
    {
      id: 1,
      linkText: 'LinkedIn',
      component: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      redirectTo: 'https://www.linkedin.com/in/pritish-kadam/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      linkText: 'GitHub',
      component: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      redirectTo: 'https://github.com/pritishkadam',
      
    },
    {
      id: 3,
      linkText: 'Mail',
      component: (
        <>
          MailTo <HiOutlineMail size={25} />
        </>
      ),
      redirectTo: 'mailto:prtshkdm18@gmail.com',
      
    },
    {
      id: 4,
      linkText: 'Resume',
      component: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      redirectTo: '/pritish_resume.pdf',
      style: 'rounded-br-md',
      download: true
    },
  ];


export default socialLinks;
