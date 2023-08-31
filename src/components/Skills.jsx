import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Golang from "../assets/golang.png"
import Next from "../assets/next.png"
import Flutter from "../assets/flutter.png"
const Skills = () => {
    return (
        <div name="skills" className=' w-full pt-[100px] md:h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies i have worked with.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 '>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='Html' className='w-20 mx-auto' src={HTML} />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='css' className='w-20 mx-auto' src={CSS} />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='javascript' className='w-20 mx-auto' src={JavaScript} />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='node' className='w-20 mx-auto' src={Node} />
                        <p className='my-4'>NODE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='react' className='w-20 mx-auto' src={ReactImg} />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='github' className='w-20 mx-auto' src={GitHub} />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='tailwind' className='w-20 mx-auto' src={Tailwind} />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='mongodb' className='w-20 mx-auto' src={Mongo} />
                        <p className='my-4'>MONGO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='golang' className='w-20 mx-auto' src={Golang} />
                        <p className='my-4'>GOLANG</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='nextjs' className='w-20 mx-auto' src={Next} />
                        <p className='my-4'>NEXT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:cursor-pointer duration-500'>
                        <img alt='flutter' className='w-20 mx-auto' src={Flutter} />
                        <p className='my-4'>FLUTTER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills