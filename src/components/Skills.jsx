

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
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

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

  // Coding icons that appear between letters
  // const codingIcons = ['<>', '{...}', '[ ]', '( )', '/>', '&&', '||', '=>'];

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredSkill) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredSkill]);

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const renderAnimatedHeader = () => {
    const letters = 'SKILLS'.split('');
    
    return (
      <h1 
        className="text-7xl mb-10 cursor-pointer select-none overflow-hidden"
        style={{fontFamily: 'Antonio, sans-serif'}}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <div className="flex items-center justify-start">
          {letters.map((letter, index) => (
            <React.Fragment key={index}>
              {/* Letter with animation */}
              <span 
                className={`inline-block transition-all duration-500 ease-out ${
                  isHeaderHovered 
                    ? 'transform translate-x-4 text-blue-500' 
                    : 'transform translate-x-0'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {letter}
              </span>
              
              {/* Coding icon between letters (except after the last letter)
              {index < letters.length - 1 && (
                // <span 
                //   className={`inline-block text-2xl font-mono transition-all duration-500 ease-out mx-2 ${
                //     isHeaderHovered 
                //       ? 'opacity-100 scale-100 text-orange-400 animate-pulse' 
                //       : 'opacity-0 scale-0 w-0'
                //   }`}
                //   style={{
                //     transitionDelay: `${(index + 1) * 100}ms`
                //   }}
                // >
                //   {codingIcons[index % codingIcons.length]}
                // </span>
              )} */}
            </React.Fragment>
          ))}
        </div>
      </h1>
    );
  };

  return (
    <div className='mt-20 text-justify ml-40 relative'>
      {renderAnimatedHeader()}
             
      {skills.map((skillRow, rowIndex) => (
        <ul key={rowIndex} className={`flex gap-5 ${rowIndex > 0 ? 'mt-5' : 'mt-10'} text-2xl`}>
          {skillRow.map((skill) => (
            <li 
              key={skill}
              className="relative cursor-pointer transition-all duration-300 bg-gray-800 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-md"
              onMouseEnter={() => handleMouseEnter(skill)}
              onMouseLeave={handleMouseLeave}
            >
              {skill}
            </li>
          ))}
        </ul>
      ))}

      {/* Floating logo that follows mouse */}
      {hoveredSkill && skillLogos[hoveredSkill] && (
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