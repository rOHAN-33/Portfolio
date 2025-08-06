import React from 'react'
import "./Skills.css"
const Skills = () => {
  return (
    <div className='mt-32 text-justify ml-40' >
        <h1 className="text-7xl" style={{fontFamily: 'Antonio, sans-serif'}}>Skills</h1>
        <ul className='flex gap-5 mt-10 text-2xl'>
            <li id='code'>JavaScript</li>
            <li id='code'>React.js</li>
            <li id='code'>Express.js</li>
            <li id='code'>MongoDB</li>
            <li id='code'>Tailwind CSS</li>
        </ul>
        <ul className='flex gap-5 mt-5 text-2xl'>
            <li id='code'>Next.js</li>
            <li id='code'>React Native</li>
            <li id='code'>Postgresql</li>
            <li id='code'>SQL</li>
            <li id='code'>UI/UX</li>
        </ul>
    </div>
  )
}

export default Skills