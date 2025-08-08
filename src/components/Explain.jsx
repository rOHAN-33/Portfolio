// import React from 'react'
// import "./Explain.css"
// const Explain = () => {
//   const skills = [
//     'JavaScript',
//     'React & Next.js',
//     'Express.js',
//     'MongoDB',
//     'DevOps',
//     'System Design',
//     'Game Development',
//     'UI/UX Design'
//   ];

//   const styles = {
//     aboutContainer: {
//       marginTop:"40px",
//       fontFamily: "'Inter', sans-serif",
//       // minHeight: '100vh',
//       padding: ' 60px',
//       // maxWidth: '1200px',
//       maxWidth:"1200px",
//       margin: '0 100px',
//       // background: '#0a0a0a',
//       color: 'white',
//       // lineHeight: '1.6'
//     },
//     logo: {
//       width: '50px',
//       height: '50px',
//       background: 'white',
//       marginBottom: '60px',
//       clipPath: 'polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 50% 100%, 50% 50%, 0 50%)'
//     },
//     mainTitle: {
//       fontSize: 'clamp(2rem, 6vw, 8rem)',
//       fontWeight: '700',
//       marginBottom: '80px',
//       letterSpacing: '-0.02em',
//       lineHeight: '0.9',
//       fontFamily: "'Antonio', sans-serif",
//     },
//     contentSection: {
//       maxWidth: '900px',
//       marginBottom: '40px'
//     },
//     introText: {
//       fontSize: '1.2rem',
//       fontWeight: '400',
//       lineHeight: '1.7',
//       marginBottom: '40px',
//       color: '#e0e0e0'
//     },
//     paragraphSpacing: {
//       // marginBottom: '35px'
//     },
//     highlight: {
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease'
//     },
//     emoji: {
//       fontSize: '1.6rem',
//       marginRight: '8px',
//       display: 'inline-block'
//     },
//     skillsContainer: {
//       margin: '50px 0'
//     },
//     skillTag: {
//       display: 'inline-block',
//       background: 'rgba(255, 255, 255, 0.05)',
//       border: '1px solid rgba(255, 255, 255, 0.1)',
//       padding: '8px 16px',
//       borderRadius: '25px',
//       margin: '4px 8px 4px 0',
//       fontSize: '0.9rem',
//       fontWeight: '500',
//       color: '#c0c0c0',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       backdropFilter: 'blur(10px)'
//     },
//     cta: {
//       fontSize: '1.3rem',
//       fontWeight: '600',
//       // marginTop: '60px',
//       color: '#f0f0f0'
//     },
//     gradientText: {
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text'
//     }
//   };
//   return (
//     <>
//       <style>
//         {`
          
          
//           .emoji-bounce {
//             animation: bounce 2s infinite;
//           }
          
//           @keyframes bounce {
//             0%, 20%, 50%, 80%, 100% {
//               transform: translateY(0);
//             }
//             40% {
//               transform: translateY(-5px);
//             }
//             60% {
//               transform: translateY(-3px);
//             }
//           }
          
//           .highlight:hover {
//             transform: translateY(-1px);
//             filter: brightness(1.2);
//           }
          
//           .skill-tag:hover {
//             background: rgba(102, 126, 234, 0.2) !important;
//             border-color: rgba(102, 126, 234, 0.5) !important;
//             color: white !important;
//             transform: translateY(-2px);
//           }
          
//           @media (max-width: 768px) {
//             .about-responsive {
//               padding: 40px 30px !important;
//             }
//             .intro-responsive {
//               font-size: 1.2rem !important;
//             }
//             .title-responsive {
//               margin-bottom: 60px !important;
//             }
//           }
//         `}
//       </style>
//       <div style={styles.aboutContainer} className="about-responsive">
//         <div style={styles.logo}></div>
        
//         <h1 style={{...styles.mainTitle}} className="title-responsive">about</h1>
        
//         <div style={styles.contentSection}>
//           <p style={{...styles.introText, ...styles.paragraphSpacing}} className="intro-responsive">
//             <span style={styles.emoji} className="emoji-bounce">🚀</span> A creative technologist who seamlessly blends{' '}
//             <span style={styles.highlight} className="highlight">Design Thinking</span> and <span style={styles.highlight} className="highlight">Code Craft</span>{' '}
//             to build experiences that are both performant and visually striking. As a dedicated 
//             full-stack developer, my core expertise lies in <span style={styles.highlight} className="highlight">JavaScript</span>,{' '}
//             leveraging modern frameworks like <span style={styles.highlight} className="highlight">React</span> and{' '}
//             <span style={styles.highlight} className="highlight">Next.js</span> to create dynamic and responsive front-end applications.
//           </p>
          
//           <p style={{...styles.introText, ...styles.paragraphSpacing}} className="intro-responsive">
//             <span style={styles.emoji} className="emoji-bounce">⚡</span> On the back-end, I use <span style={styles.highlight} className="highlight">Express.js</span>{' '}
//             to build robust and scalable APIs. Beyond development, I am actively exploring{' '}
//             <span style={styles.highlight} className="highlight">DevOps</span> and <span style={styles.highlight} className="highlight">System Design</span>,{' '}
//             continuously seeking to optimize workflows and architect resilient systems.
//           </p>
          
//           <p style={{...styles.introText, ...styles.paragraphSpacing}} className="intro-responsive">
//             <span style={styles.emoji} className="emoji-bounce">🎮</span> My true passion lies in <span style={styles.highlight} className="highlight">game development</span>,{' '}
//             where I bring a unique blend of technical skill and creative vision to life. I thrive on 
//             mastering new tools and staying ahead of technology trends, whether working solo or 
//             collaborating with teams across different industries.
//           </p>
          
          
          
         
//         </div>
//       </div>
//     </>
//   )
// }

// export default Explain


import React from 'react';
import { useState } from 'react';
const Explain = () => {
  const [isHovered, setIsHovered] = useState(false);
  const skills = [
    'JavaScript',
    'React & Next.js',
    'Express.js',
    'MongoDB',
    'DevOps',
    'System Design',
    'Game Development',
    'UI/UX Design'
  ];

  // Using Tailwind's responsive classes directly in JSX is preferred.
  // We'll keep some inline styles for properties not easily covered by Tailwind,
  // or for specific gradients/complex styles.
  const styles = {
    highlight: {
      // Adjusted gradient colors for better contrast and vibrancy
      background: 'linear-gradient(135deg, #a78bfa 0%, #d48aed 50%, #fbcfe8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    emoji: {
      fontSize: '1.6rem',
      marginRight: '8px',
      display: 'inline-block'
    },
    skillTag: {
      display: 'inline-block',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '8px 16px',
      borderRadius: '25px',
      margin: '4px 8px 4px 0',
      fontSize: '0.9rem',
      fontWeight: '500',
      color: '#c0c0c0',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  };

  return (
    <>
      {/* Tailwind CSS CDN for convenience */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          .emoji-bounce {
            animation: bounce 2s infinite;
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-5px);
            }
            60% {
              transform: translateY(-3px);
            }
          }
          .highlight:hover {
            transform: translateY(-1px);
            filter: brightness(1.2);
          }
          .skill-tag:hover {
            background: rgba(102, 126, 234, 0.2) !important;
            border-color: rgba(102, 126, 234, 0.5) !important;
            color: white !important;
            transform: translateY(-2px);
          }
          .clip-polygon-logo {
            clip-path: polygon(0 0, 50% 0, 50% 50%, 100% 50%, 100% 100%, 50% 100%, 50% 50%, 0 50%);
          }
        `}
      </style>
      {/* Using Tailwind classes for responsiveness */}
      <div className="mt-10 font-inter text-white leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-6xl mx-auto">
        {/* Logo - adjusted margin for responsiveness */}
        <div className="w-12 h-12 bg-white mb-10 md:mb-16 clip-polygon-logo"></div>
        
        {/* About Title - responsive font size and margin */}
        <div
        className="relative cursor-pointer transition-all duration-500 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main About Text */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
                     mb-10 md:mb-16 tracking-tight leading-none text-white
                     transition-all duration-500 ease-in-out
                     ${isHovered ? 'transform scale-105' : ''}`}
          style={{fontFamily: 'Antonio, sans-serif'}}
        >
          {/* Split text for animation */}
          <span className={`inline-block transition-all duration-300 ${isHovered ? 'mr-4' : ''}`}>
            ab
          </span>
          
          {/* Coding symbols that appear on hover */}
          <span className={`inline-block transition-all duration-500 overflow-hidden ${
            isHovered ? 'max-w-20 opacity-100 mx-2' : 'max-w-0 opacity-0'
          }`}>
            <span className="text-green-400">&lt;</span>
            <span className="text-purple-400">/</span>
            <span className="text-blue-400">&gt;</span>
          </span>
          
          <span className={`inline-block transition-all duration-300 ${isHovered ? 'ml-4' : ''}`}>
            out
          </span>
        </h1>

        {/* Animated colorful border */}
        <div className="relative">
          <div
            className={`h-2 bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 to-pink-500 
                       transition-all duration-700 ease-out
                       ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
            style={{
              background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
              transformOrigin: 'left'
            }}
          />
          
          {/* Glowing effect */}
          <div
            className={`absolute top-0 h-2 bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 to-pink-500 
                       blur-sm transition-all duration-700 ease-out
                       ${isHovered ? 'w-full opacity-60' : 'w-0 opacity-0'}`}
            style={{
              background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
              transformOrigin: 'left'
            }}
          />
        </div>

        {/* Additional coding symbols that float around */}
        <div className={`absolute -top-8 -right-8 transition-all duration-500 ${
          isHovered ? 'opacity-100 transform rotate-12' : 'opacity-0 transform rotate-0'
        }`}>
          <span className="text-2xl text-yellow-400 font-mono">{ }</span>
        </div>
        
        <div className={`absolute -bottom-4 -left-8 transition-all duration-700 ${
          isHovered ? 'opacity-100 transform -rotate-12' : 'opacity-0 transform rotate-0'
        }`}>
          <span className="text-2xl text-cyan-400 font-mono">[ ]</span>
        </div>
        
        <div className={`absolute top-1/2 -right-12 transition-all duration-600 ${
          isHovered ? 'opacity-100 transform translate-y-2' : 'opacity-0 transform -translate-y-2'
        }`}>
          <span className="text-xl text-orange-400 font-mono">=&gt;</span>
        </div>
      </div>
        
        {/* Content Section - responsive max-w and increased paragraph bottom margin */}
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mb-10">
          {/* Paragraphs - responsive font size and line height, now mb-10 */}
          <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-gray-200">
            <span style={styles.emoji} className="emoji-bounce">🚀</span> A creative technologist who seamlessly blends{' '}
            <span style={styles.highlight} className="highlight">Design Thinking</span> and <span style={styles.highlight} className="highlight">Code Craft</span>{' '}
            to build experiences that are both performant and visually striking. As a dedicated 
            full-stack developer, my core expertise lies in <span style={styles.highlight} className="highlight">JavaScript</span>,{' '}
            leveraging modern frameworks like <span style={styles.highlight} className="highlight">React</span> and{' '}
            <span style={styles.highlight} className="highlight">Next.js</span> to create dynamic and responsive front-end applications.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-gray-200">
            <span style={styles.emoji} className="emoji-bounce">⚡</span> On the back-end, I use <span style={styles.highlight} className="highlight">Express.js</span>{' '}
            to build robust and scalable APIs. Beyond development, I am actively exploring{' '}
            <span style={styles.highlight} className="highlight">DevOps</span> and <span style={styles.highlight} className="highlight">System Design</span>,{' '}
            continuously seeking to optimize workflows and architect resilient systems.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-gray-200">
            <span style={styles.emoji} className="emoji-bounce">🎮</span> My true passion lies in <span style={styles.highlight} className="highlight">game development</span>,{' '}
            where I bring a unique blend of technical skill and creative vision to life. I thrive on 
            mastering new tools and staying ahead of technology trends, whether working solo or 
            collaborating with teams across different industries.
          </p>
        </div>

        {/* Skills Container - added for completeness, though not in original screenshot */}
        
      </div>
    </>
  );
};

export default Explain;