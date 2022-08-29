import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-0'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold pl'>
                        <p>Hi, I'm Alvin, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am passionate about building excellent website that have a beautiful design. I specialize in creating website for client ranging from individuals and small-business all the way to large erterprise corporations. What would you do if you had website developer available at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About