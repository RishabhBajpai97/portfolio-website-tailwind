import React from 'react'

const ContactForm = () => {
    return (
        <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-pink-600 border-b-4 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email on myemail@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" name="name" placeholder="Name" />
                <input className='bg-[#ccd6f6] p-2 my-4' type="text" name="email" placeholder="Email" />
                <textarea className='bg-[#ccd6f6] p-2' type="text" name="message" placeholder="Message" rows="10"></textarea>
                <button className='text-white border-2 hover:bg-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default ContactForm