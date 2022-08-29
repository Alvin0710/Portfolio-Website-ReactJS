import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-9'>
            <form method='POST' action="https://getform.io/f/aa132498-7bf4-41fb-a0e2-39a5f9b4b069" className='flex flex-col max-w-[1000px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-400 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
                </div>
                <input className='my-2 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
                <input className='my-2 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='my-2 p-2 bg-[#ccd6f6]' name="Message" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact