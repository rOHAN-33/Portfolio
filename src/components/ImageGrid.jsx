



// import React from 'react'
// import { useEffect, useState } from 'react'
// import RotatingText from '../../reactbits/RotatingText/RotatingText'
// import '../components/ImageGrid.css'
// import "./ImageGrid.css"
// import FlipImage from './FlipImage'
// import ThemeToggle from '../ui/ThemeToggle'

// const ImageGrid = () => {
//   const [showImage, setShowImage] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowImage(prev => !prev);
//     }, 3000); // Switch every 3 seconds
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='min-h-screen flex items-center justify-center overflow-y-hidden px-4 py-16 md:py-20'>
//       {/* Desktop Layout */}
//       <div className="hidden lg:block">
//         <div className="grid grid-cols-5 grid-rows-5 gap-4">
//           <div className="row-span-3 col-start-2 row-start-2 mt-8">
//             <h1 className='text-5xl mb-[-30px] font-antonia' style={{fontFamily: 'Antonio, sans-serif'}}>
//               Rohan Singh Negi
//             </h1>
//             <h1 className='text-[100px] ml-[-15px] font-bold' style={{fontFamily: 'Antonio, sans-serif'}}>
//               CREATIVE
//             </h1>
//           </div>
          
//           <div className="row-span-3 col-start-3 row-start-2 flex justify-center items-center">
//             <div className="relative h-[300px] w-[300px]">
//               {/* Image */}
//               <img 
//                 src="./me-2.jpg" 
//                 alt="Profile" 
//                 className="w-full h-full object-cover rounded-2xl" 
//               />
              
//               {/* HI Circle outside the image (bottom-left) */}
//               <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shadow-xl z-10">
//                 <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
//                   !showImage 
//                     ? 'opacity-100 blur-0 scale-100 rotate-0'
//                     : 'opacity-0 blur-md scale-110 rotate-12'
//                 }`}>
//                   <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
//                     HI
//                   </h1>
//                 </div>
                
//                 <img
//                   src="/hi.png"
//                   alt="HI Face"
//                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
//                     showImage 
//                       ? 'opacity-100 blur-0 scale-100 rotate-0'
//                       : 'opacity-0 blur-md scale-90 -rotate-12'
//                   }`}
//                 />
//               </div>
//             </div>
//           </div>
          
//           <div className="row-span-3 col-start-4 row-start-2 mt-24">
//             <h1 className='text-[100px] ml-[-10px] font-bold' style={{fontFamily: 'Antonio, sans-serif'}}>
//               DEVELOPER
//             </h1>
            
//             <RotatingText
//               style={{fontFamily: 'Antonio, sans-serif'}}
//               texts={['Code', 'Design', 'Vibe']}
//               mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-5xl font-mono"
//               staggerFrom={"last"}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-120%" }}
//               staggerDuration={0.025}
//               splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//               transition={{ type: "spring", damping: 30, stiffness: 400 }}
//               rotationInterval={2000}
//               id="rotating"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="lg:hidden flex flex-col items-center justify-center text-center space-y-6 w-full max-w-sm mt-8 mb-16">
//         {/* Name and Creative Text Above Image */}
//         <div className="space-y-1">
//           <h1 className='text-3xl sm:text-4xl font-antonia' style={{fontFamily: 'Antonio, sans-serif'}}>
//             Rohan Singh Negi
//           </h1>
//           <h1 className='text-5xl sm:text-6xl font-bold' style={{fontFamily: 'Antonio, sans-serif'}}>
//             CREATIVE
//           </h1>
//         </div>

//         {/* Centered Image */}
//         <div className="relative h-[250px] w-[250px] sm:h-[280px] sm:w-[280px] mx-auto">
//           {/* Image */}
//           <img 
//             src="./me-2.jpg" 
//             alt="Profile" 
//             className="w-full h-full object-cover rounded-2xl" 
//           />
          
//           {/* HI Circle outside the image (bottom-left) */}
//           <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shadow-xl z-10">
//             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
//               !showImage 
//                 ? 'opacity-100 blur-0 scale-100 rotate-0'
//                 : 'opacity-0 blur-md scale-110 rotate-12'
//             }`}>
//               <h1 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
//                 HI
//               </h1>
//             </div>
            
//             <img
//               src="/hi.png"
//               alt="HI Face"
//               className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
//                 showImage 
//                   ? 'opacity-100 blur-0 scale-100 rotate-0'
//                   : 'opacity-0 blur-md scale-90 -rotate-12'
//               }`}
//             />
//           </div>
//         </div>

//         {/* Developer Text and Rotating Text Below Image */}
//         <div className="space-y-4">
//           <h1 className='text-5xl sm:text-6xl font-bold' style={{fontFamily: 'Antonio, sans-serif'}}>
//             DEVELOPER
//           </h1>
          
//           <RotatingText
//             style={{fontFamily: 'Antonio, sans-serif'}}
//             texts={['Code', 'Design', 'Vibe']}
//             mainClassName="px-3 bg-cyan-300 text-white overflow-hidden py-2 justify-center rounded-lg text-3xl sm:text-4xl font-mono"
//             staggerFrom={"last"}
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-120%" }}
//             staggerDuration={0.025}
//             splitLevelClassName="overflow-hidden pb-1"
//             transition={{ type: "spring", damping: 30, stiffness: 400 }}
//             rotationInterval={2000}
//             id="rotating"
//           />
//         </div>
//       </div>

//       {/* Theme Toggle - Hidden on mobile for now, adjust positioning as needed */}
//       <div className="absolute bottom-8 right-8 hidden lg:block">
//         {/* <ThemeToggle /> */}
//       </div>
//     </div>
//   )
// }

// export default ImageGrid




import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import RotatingText from '../../reactbits/RotatingText/RotatingText'
import '../components/ImageGrid.css'
import "./ImageGrid.css"
import FlipImage from './FlipImage'
import ThemeToggle from '../ui/ThemeToggle'

const ImageGrid = () => {
  const [showImage, setShowImage] = useState(false);
  
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const creativeRef = useRef(null);
  const imageRef = useRef(null);
  const imageRevealRef = useRef(null);
  const circleRef = useRef(null);
  const developerRef = useRef(null);
  const rotatingTextRef = useRef(null);
  
  // Mobile refs
  const mobileNameRef = useRef(null);
  const mobileCreativeRef = useRef(null);
  const mobileImageRef = useRef(null);
  const mobileImageRevealRef = useRef(null);
  const mobileCircleRef = useRef(null);
  const mobileDeveloperRef = useRef(null);
  const mobileRotatingTextRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline
    const tl = gsap.timeline({ delay: 0.2 });

    // Check if desktop or mobile
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop) {
      // Desktop animations
      // Set initial states
      gsap.set([nameRef.current, creativeRef.current], { 
        y: 50, 
        opacity: 0 
      });
      gsap.set(developerRef.current, { 
        y: 50, 
        opacity: 0 
      });
      gsap.set(rotatingTextRef.current, { 
        x: -50, 
        opacity: 0 
      });
      gsap.set(imageRef.current, { 
        scale: 1.1, 
        opacity: 1 
      });
      gsap.set(imageRevealRef.current, { 
        clipPath: 'inset(100% 0 0 0)' 
      });
      gsap.set(circleRef.current, { 
        scale: 0, 
        opacity: 0 
      });

      // Animation sequence
      tl.to(nameRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(creativeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(developerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(imageRevealRef.current, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4")
      .to(imageRef.current, {
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1.2")
      .to(circleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .to(rotatingTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");
    } else {
      // Mobile animations
      gsap.set([mobileNameRef.current, mobileCreativeRef.current], { 
        y: 50, 
        opacity: 0 
      });
      gsap.set(mobileDeveloperRef.current, { 
        y: 50, 
        opacity: 0 
      });
      gsap.set(mobileRotatingTextRef.current, { 
        x: -50, 
        opacity: 0 
      });
      gsap.set(mobileImageRef.current, { 
        scale: 1.1, 
        opacity: 1 
      });
      gsap.set(mobileImageRevealRef.current, { 
        clipPath: 'inset(100% 0 0 0)' 
      });
      gsap.set(mobileCircleRef.current, { 
        scale: 0, 
        opacity: 0 
      });

      // Mobile animation sequence
      tl.to(mobileNameRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(mobileCreativeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(mobileImageRevealRef.current, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.4")
      .to(mobileImageRef.current, {
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1.2")
      .to(mobileCircleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .to(mobileDeveloperRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(mobileRotatingTextRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");
    }

    // Image switching interval
    const interval = setInterval(() => {
      setShowImage(prev => !prev);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className='min-h-screen flex items-center justify-center overflow-y-hidden px-4 py-16 md:py-20'>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          {/* Left Side Text */}
          <div className="row-span-3 col-start-2 row-start-2 mt-8">
            <h1 
              ref={nameRef}
              className='text-5xl mb-[-30px] font-antonia'
              style={{fontFamily: 'Antonio, sans-serif'}}
            >
              Rohan Singh Negi
            </h1>
            <h1 
              ref={creativeRef}
              className='text-[100px] ml-[-15px] font-bold'
              style={{fontFamily: 'Antonio, sans-serif'}}
            >
              CREATIVE
            </h1>
          </div>
          
          {/* Center Image */}
          <div className="row-span-3 col-start-3 row-start-2 flex justify-center items-center">
            <div className="relative h-[300px] w-[300px]">
              {/* Image Reveal Container */}
              <div 
                ref={imageRevealRef}
                className="w-full h-full rounded-2xl overflow-hidden"
              >
                <img 
                  ref={imageRef}
                  src="./me-2.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* HI Circle */}
              <div 
                ref={circleRef}
                className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shadow-xl z-10"
              >
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                  !showImage 
                    ? 'opacity-100 blur-0 scale-100 rotate-0'
                    : 'opacity-0 blur-md scale-110 rotate-12'
                }`}>
                  <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    HI
                  </h1>
                </div>
                
                <img
                  src="/hi.png"
                  alt="HI Face"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    showImage 
                      ? 'opacity-100 blur-0 scale-100 rotate-0'
                      : 'opacity-0 blur-md scale-90 -rotate-12'
                  }`}
                />
              </div>
            </div>
          </div>
          
          {/* Right Side Text */}
          <div className="row-span-3 col-start-4 row-start-2 mt-24">
            <h1 
              ref={developerRef}
              className='text-[100px] ml-[-10px] font-bold'
              style={{fontFamily: 'Antonio, sans-serif'}}
            >
              DEVELOPER
            </h1>
            
            <div ref={rotatingTextRef}>
              <RotatingText
                style={{fontFamily: 'Antonio, sans-serif'}}
                texts={['Code', 'Design', 'Vibe']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-5xl font-mono"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                id="rotating"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center text-center space-y-6 w-full max-w-sm mt-8 mb-16">
        {/* Name and Creative Text Above Image */}
        <div className="space-y-1">
          <h1 
            ref={mobileNameRef}
            className='text-3xl sm:text-4xl font-antonia'
            style={{fontFamily: 'Antonio, sans-serif'}}
          >
            Rohan Singh Negi
          </h1>
          <h1 
            ref={mobileCreativeRef}
            className='text-5xl sm:text-6xl font-bold'
            style={{fontFamily: 'Antonio, sans-serif'}}
          >
            CREATIVE
          </h1>
        </div>

        {/* Centered Image */}
        <div className="relative h-[250px] w-[250px] sm:h-[280px] sm:w-[280px] mx-auto">
          {/* Image Reveal Container */}
          <div 
            ref={mobileImageRevealRef}
            className="w-full h-full rounded-2xl overflow-hidden"
          >
            <img 
              ref={mobileImageRef}
              src="./me-2.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* HI Circle */}
          <div 
            ref={mobileCircleRef}
            className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shadow-xl z-10"
          >
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
              !showImage 
                ? 'opacity-100 blur-0 scale-100 rotate-0'
                : 'opacity-0 blur-md scale-110 rotate-12'
            }`}>
              <h1 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                HI
              </h1>
            </div>
            
            <img
              src="/hi.png"
              alt="HI Face"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                showImage 
                  ? 'opacity-100 blur-0 scale-100 rotate-0'
                  : 'opacity-0 blur-md scale-90 -rotate-12'
              }`}
            />
          </div>
        </div>

        {/* Developer Text and Rotating Text Below Image */}
        <div className="space-y-4">
          <h1 
            ref={mobileDeveloperRef}
            className='text-5xl sm:text-6xl font-bold'
            style={{fontFamily: 'Antonio, sans-serif'}}
          >
            DEVELOPER
          </h1>
          
          <div ref={mobileRotatingTextRef}>
            <RotatingText
              style={{fontFamily: 'Antonio, sans-serif'}}
              texts={['Code', 'Design', 'Vibe']}
              mainClassName="px-3 bg-cyan-300 text-white overflow-hidden py-2 justify-center rounded-lg text-3xl sm:text-4xl font-mono"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              id="rotating"
            />
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        {/* <ThemeToggle /> */}
      </div>
    </div>
  )
}

export default ImageGrid