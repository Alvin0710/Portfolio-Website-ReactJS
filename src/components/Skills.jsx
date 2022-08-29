import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import SkillCard from '../common/SkillCard';

const skill = [
    {imageName: HTML, iconName: 'HTML Icon', title: 'HTML'},
    {imageName: CSS, iconName: 'CSS Icon', title: 'CSS'},
    {imageName: JavaScript, iconName: 'JS Icon', title: 'JavaScript'},
    {imageName: ReactImg, iconName: 'React Icon', title: 'React JS'},
    {imageName: GitHub, iconName: 'GitHub Icon', title: 'GitHub'},
    {imageName: Tailwind, iconName: 'Tailwind Icon', title: 'Tailwind CSS'},
]

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// There are the technology I've worled with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skill.map((items, index) => {
                        return <SkillCard {...items} key={index} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Skills