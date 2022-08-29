import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import WorkCard from '../common/WorkCard';

const workimg = [
    { image: WorkImg, appName: 'Portfolio' },
    { image: realEstate, appName: 'Real Estate' },
    { image: WorkImg, appName: 'Portfolio' },
    { image: realEstate, appName: 'Real Estate' },
    { image: WorkImg, appName: 'Portfolio' },
    { image: realEstate, appName: 'Real Estate' },
]

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 sm:pt-[7%] pt-[20%] bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    {
                        workimg.map((item, index) => {
                            return <WorkCard {...item} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Work