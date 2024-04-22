import React from 'react'
import {FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {


    const Links  = [
      {
        id:1,
        Child: (
            <>
            Linkedin
            <FaLinkedin size = {30}/>
             </>
        ),
        href:'https://linkedin.com',
        style:'rounded-tr-md'
      },
      {
        id:2,
        Child: (
            <>
            Github
            <FaGithub size = {30}/>
             </>
        ),
        href:'https://github.com/809Utkarsh',
    },
    {
        id:3,
        Child: (
            <>
            Mail
            <HiOutlineMail size = {30}/>
             </>
        ),
        href:'mailto: 809raj@gmail.com',
    },
    {
        id:4,
        Child: (
            <>
            Resume
            <BsFillPersonLinesFill size = {30}/>
             </>
        ),
        href:'/Resume.pdf',
        style:'rounded-br-md',
        download :true,
    },
    ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
       
       {Links.map(({id,Child,href,style,download}) => (
        //eslint-disable-next-line
    <li key = {id} className={'flex justify-between item-centre w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500' + ' '
     + style}>
          <a 
          href= {href}
          className="flex justify-between items-center w-full text-white"
          download={download}
          target='_blank'
          rel="noreferrer"
          >
           {Child}
               </a>
          </li>

       ))}  

        </ul>
    </div>
  );
};

export default SocialLinks
