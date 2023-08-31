import React from 'react'
import { FaGithub, FaGlobe, FaNpm } from 'react-icons/fa'
const Work = () => {
    return (
        <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 container rounded-md px-2 gap-5 flex justify-center flex-col  items-center mx-auto content-div'>
                        <h2 className='text-lg'>Gullu Mobile App</h2>
                        <p className='text-center'>A social networking mobile app developed on flutter.</p>
                        <a href='https://www.google.com/' target='_blank' rel='noreferrer'><FaGithub size={25} /></a>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 container rounded-md flex flex-col justify-center px-2 gap-5  items-center mx-auto content-div'>
                        <h2 className='text-lg'>Erevna</h2>
                        <p className='text-center'>Developed the website on Nextjs and integrated automated fetching of medium blogs on the website. </p>
                        <div className='flex w-full justify-center gap-x-8'>
                            <a href='https://github.com/Erevna/erevna' target='_blank' rel='noreferrer' ><FaGithub size={25} /></a>
                            <a href='https://erevna.in/' target='_blank' rel='noreferrer'><FaGlobe size={25} /></a>
                        </div>

                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 container rounded-md flex flex-col justify-center px-2 gap-5 items-center mx-auto content-div'>
                        <h2 className='text-lg'>Gullu Website</h2>
                        <p className='text-center'>Developed the static website for Gullu on Nextjs within a couple of days.</p>
                        <div className='flex w-full justify-center gap-x-8'>
                            <a href='https://github.com/RishabhBajpai97/gullu' target='_blank' rel='noreferrer' ><FaGithub size={25} /></a>
                            <a href='https://gullu.vercel.app/' target='_blank' rel='noreferrer' ><FaGlobe size={25} /></a>
                        </div>

                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 container rounded-md flex flex-col justify-center px-2 gap-5 items-center mx-auto content-div'>
                        <h2 className='text-lg'>Golang authentication System</h2>
                        <p className='text-center'>A Complete working authentication system with jwt in golang using the gin framework. </p>
                        <a href='https://github.com/RishabhBajpai97/golang-jwt-authentication' target='_blank' rel='noreferrer' ><FaGithub size={25} /></a>

                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 container rounded-md flex flex-col justify-center px-2 gap-5 cursor-pointer items-center mx-auto content-div'>
                        <h2 className='text-lg'>Tailwind Next utility</h2>
                        <p className='text-center'>A simple cli utility to add boilerplate code to your next project.</p>
                        <div className='flex w-full justify-center gap-x-8'>
                            <a href='https://github.com/RishabhBajpai97/tailwind-next-utility' target='_blank' rel='noreferrer' ><FaGithub size={25} /></a>
                            <a href='https://www.npmjs.com/package/tailwind-next-utility' target='_blank' rel='noreferrer' ><FaNpm size={25} /></a>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 container rounded-md px-2 gap-5 flex justify-center flex-col  items-center mx-auto content-div'>
                        <h2 className='text-lg'>Softpaper</h2>
                        <p className='text-center'>Developed an EMM based tablet app on flutter for edtech based startup. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work