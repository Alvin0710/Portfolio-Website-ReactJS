import React from 'react'

const SkillCard = (props) => {
    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={props.imageName} className="w-20 mx-auto py-4" alt={props.iconName} />
            <p className='my-4'>{props.title}</p>
        </div>
    )
}

export default SkillCard