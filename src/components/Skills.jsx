// import React from 'react'
// import "./Skills.css"
// const Skills = () => {
//   return (
//     <div className='mt-32 text-justify ml-40' >
//         <h1 className="text-7xl" style={{fontFamily: 'Antonio, sans-serif'}}>Skills</h1>
//         <ul className='flex gap-5 mt-10 text-2xl'>
//             <li id='code'>JavaScript</li>
//             <li id='code'>React.js</li>
//             <li id='code'>Express.js</li>
//             <li id='code'>MongoDB</li>
//             <li id='code'>Tailwind CSS</li>
//         </ul>
//         <ul className='flex gap-5 mt-5 text-2xl'>
//             <li id='code'>Next.js</li>
//             <li id='code'>React Native</li>
//             <li id='code'>Postgresql</li>
//             <li id='code'>SQL</li>
//             <li id='code'>UI/UX</li>
//         </ul>
//     </div>
//   )
// }

// export default Skills

// import React, { useState, useEffect } from 'react';

// const Skills = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Skill logos mapping
//   const skillLogos = {
//     'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//     'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//     'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
//     'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
//     'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
//     'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
//     'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//     'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
//     'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
//     'UI/UX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
//   };

//   const skills = [
//     ['JavaScript', 'React.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
//     ['Next.js', 'React Native', 'PostgreSQL', 'SQL', 'UI/UX']
//   ];

//   // Track mouse movement
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     if (hoveredSkill) {
//       document.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [hoveredSkill]);

//   const handleMouseEnter = (skill) => {
//     setHoveredSkill(skill);
//   };

//   const handleMouseLeave = () => {
//     setHoveredSkill(null);
//   };

//   return (
//     <div className='mt-20 text-justify ml-40 relative'>
//       <h1 className="text-7xl mb-10" style={{fontFamily: 'Antonio, sans-serif'}}>
//         Skills
//       </h1>
      
//       {skills.map((skillRow, rowIndex) => (
//         <ul key={rowIndex} className={`flex gap-5 ${rowIndex > 0 ? 'mt-5' : 'mt-10'} text-2xl`}>
//           {skillRow.map((skill) => (
//             <li 
//               key={skill}
//               className="relative cursor-pointer transition-all duration-300 bg-gray-800 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md"
//               onMouseEnter={() => handleMouseEnter(skill)}
//               onMouseLeave={handleMouseLeave}
//             >
//               {skill}
//             </li>
//           ))}
//         </ul>
//       ))}

//       {/* Floating logo that follows mouse */}
//       {hoveredSkill && skillLogos[hoveredSkill] && (
//         <div
//           className="fixed pointer-events-none z-50 transition-opacity duration-200"
//           style={{
//             left: mousePosition.x + 15,
//             top: mousePosition.y - 15,
//             transform: 'translate(0, -100%)'
//           }}
//         >
//           <div className="bg-white rounded-lg shadow-lg p-3 border">
//             <img 
//               src={skillLogos[hoveredSkill]} 
//               alt={`${hoveredSkill} logo`}
//               className="w-12 h-12"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//               }}
//             />
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap');
//       `}</style>
//     </div>
//   );
// };

// export default Skills;



import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Skill logos mapping
  const skillLogos = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'UI/UX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  };

  const skills = [
    ['JavaScript', 'React.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    ['Next.js', 'React Native', 'PostgreSQL', 'SQL', 'UI/UX']
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse movement (only on desktop)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredSkill && !isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredSkill, isMobile]);

  const handleMouseEnter = (skill) => {
    if (!isMobile) {
      setHoveredSkill(skill);
    }
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const handleMobileClick = (skill) => {
    if (isMobile) {
      setHoveredSkill(hoveredSkill === skill ? null : skill);
    }
  };

  return (
    <div className='mt-12 md:mt-20 text-justify mx-4 sm:mx-8 md:ml-40 relative'>
      <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-10 text-center md:text-left" style={{fontFamily: 'Antonio, sans-serif'}}>
        Skills
      </h1>
      
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {skills.map((skillRow, rowIndex) => (
          <ul key={rowIndex} className={`flex gap-5 ${rowIndex > 0 ? 'mt-5' : 'mt-10'} text-2xl`}>
            {skillRow.map((skill) => (
              <li
                key={skill}
                className="relative cursor-pointer transition-all duration-300 bg-gray-800 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md text-white"
                onMouseEnter={() => handleMouseEnter(skill)}
                onMouseLeave={handleMouseLeave}
              >
                {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Mobile Layout - Grid */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {skills.flat().map((skill) => (
            <div
              key={skill}
              className={`relative cursor-pointer transition-all duration-300 px-3 py-3 sm:px-4 sm:py-4 rounded-lg text-center text-sm sm:text-base font-medium ${
                hoveredSkill === skill
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => handleMobileClick(skill)}
            >
              <div className="flex flex-col items-center space-y-2">
                {/* Show icon on mobile when clicked */}
                {hoveredSkill === skill && skillLogos[skill] && (
                  <img
                    src={skillLogos[skill]}
                    alt={`${skill} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <span className={hoveredSkill === skill ? 'font-semibold' : ''}>
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Instructions */}
        <p className="text-gray-500 text-xs sm:text-sm mt-4 text-center">
          Tap on skills to see their icons
        </p>
      </div>

      {/* Floating logo that follows mouse (Desktop only) */}
      {hoveredSkill && skillLogos[hoveredSkill] && !isMobile && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: mousePosition.x + 15,
            top: mousePosition.y - 15,
            transform: 'translate(0, -100%)'
          }}
        >
          <div className="bg-white rounded-lg shadow-lg p-3 border">
            <img
              src={skillLogos[hoveredSkill]}
              alt={`${hoveredSkill} logo`}
              className="w-12 h-12"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default Skills;