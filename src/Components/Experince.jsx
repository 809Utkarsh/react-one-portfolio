import React from 'react'
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import css from '../assets/css.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import graphql from '../assets/graphql.png';
import nodejs from '../assets/node.png'



const Experince = () => {
    const tech = [
   
        {
            id:1,
            src: html,
            title:'HTML',
            style:'shadow-orange-500'

        },
        
        {
            id:2,
            src: css,
            title:'CSS',
            style:'shadow-blue-500'

        },
        
        {
            id:3,
            src: javascript,
            title:'Javascript',
            style:'shadow-yellow-500'

        },
        
        {
            id:4,
            src: reactImage,
            title:'React',
            style:'shadow-blue-500'

        },
        
        {
            id:5,
            src: tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'

        },
        
        {
            id:6,
            src: nodejs,
            title:'',
            style:'shadow-green-500'

        },
        
        {
            id:7,
            src: graphql,
            title:'GraphQL',
            style:'shadow-pink-500'

        },
        
        {
            id:8,
            src: github,
            title:'GitHub',
            style:'shadow-gray-500'

        },
    ]
  return (
    <div name = 'experince' className='py-40 bg-gradient-to-b from-black to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experince</p>
            <p className='py-8'>These are the technologies I've worked on!</p>
        </div>
        <div className='w-full grid grid-col-2 sm:grid-cols-3  gap-8 text-center py-8 px-12 sm:px-0'>

            {
                tech.map(({id,src,title,style}) =>(
                    <div 
                    key = {id}
                    className = {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))
            }
            
        </div>
      </div>
    </div>
  )
}

export default Experince
