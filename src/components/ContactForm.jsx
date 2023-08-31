import React, { useRef, useState } from 'react'
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa'
import emailjs from "@emailjs/browser"
import { BsPersonLinesFill } from 'react-icons/bs'
import Resume from "../assets/Resume/Resume.pdf"

const ContactForm = () => {
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(null)
    const [close, setClose] = useState(true)
    const formRef = useRef()
    const submitFormHandler = (e) => {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(res => {
                e.target.reset()
                setSuccess(true)
                setMessage("Thanks For Contacting. Will get in touch ASAP.")
                setClose(false)
            })
            .catch(err => {
                setSuccess(false)
                setMessage("An Error Ocurred. Please Try Again")
                setClose(false)
            })
    }
    return (
        <div name="contact" className='w-full md:h-screen bg-[#0a192f] gap-y-5 flex justify-center items-center p-4'>
            <form id='form' ref={formRef} onSubmit={submitFormHandler} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-pink-600 border-b-4 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email on bajpai.rishabh1018@gmail.com</p>
                    <div className='flex gap-x-6 md:hidden'>
                        <a href="https://github.com/RishabhBajpai97" target='_blank' rel='noreferrer'><FaGithub color='white' size={30} /></a>
                        <a href="https://www.linkedin.com/in/rishabh-bajpai-b87454152" target='_blank' rel="noreferrer"><FaLinkedin className='text-[#2563EB]' size={30} /></a>
                        <a href="https://medium.com/@bajpai.rishabh1018" target='_blank' rel='noreferrer'><FaMedium className='text-gray-600' size={30} /></a>
                        <a href={Resume} download="Resume.pdf" target='_blank' rel='noreferrer'><BsPersonLinesFill className='text-gray-300' size={30} /></a>
                    </div>
                </div>
                <input className='bg-[#ccd6f6] p-2' required type="text" name="name" placeholder="Name" />
                <input className='bg-[#ccd6f6] p-2 my-4' required type="text" name="email" placeholder="Email" />
                <textarea className='bg-[#ccd6f6] p-2' required type="text" name="message" placeholder="Message" rows="10"></textarea>
                {!close && <div
                    className={` inline-flex w-full items-center justify-center rounded-lg bg-success-100 px-6 pt-7 text-base ${success === true ? `text-green-700` : `text-red-700`}`}
                    role="alert">
                    {message}
                    <span className="ml-2" >
                        <svg className='cursor-pointer h-5 w-5'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-5 w-5" onClick={() => {
                                console.log("clicking")
                                setClose(true)
                            }}>
                            <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </div>}
                <button type='submit' className='text-white border-2 hover:bg-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

            </form>

        </div>
    )
}

export default ContactForm