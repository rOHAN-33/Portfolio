
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", to: "/" }, 
    
    // Use real route when ready
    { name: "about", to: "#" },
    { name: "Projects", to: "/about" },
  ];

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.pageYOffset;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setScrolled(true);
        } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
          setScrolled(false);
        }
        lastScrollY = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TextFlip = ({ text }) => (
    <div className="relative overflow-hidden h-5">
      <span className="inline-block transition-transform duration-500 transform group-hover:-translate-y-full">
        {text}
      </span>
      <span className="inline-block absolute top-0 left-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );

  return (
    <div className="sticky top-6 z-40 mt-[-60px]">
      {/* Desktop Navbar */}
      <div className={`
        bg-white h-[60px] border border-black rounded-full hidden md:flex 
        items-center justify-between px-6 mx-auto overflow-hidden relative
        transition-all duration-500 ease-in-out
        ${scrolled ? 'max-w-[280px]' : 'max-w-[450px]'}
      `}>
        {/* Logo */}
        <img
          src="./heart.png"
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover transform hover:scale-150 transition duration-300 flex-shrink-0"
        />

        {/* Nav Items */}
        <div className="flex-grow flex items-center justify-end relative h-full">
          {/* Main nav links */}
          <div className={`
            absolute right-0 flex items-center space-x-2 transition-all duration-500
            ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
          `}>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="group text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <TextFlip text={item.name} />
              </NavLink>
            ))}

            <button className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors">
              Resume
            </button>
          </div>

          {/* "Available for work" state */}
          <div className={`
            absolute right-0 flex items-center space-x-2 transition-all duration-500
            ${scrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden relative">
        <div className={`bg-slate-100 h-[60px] w-[350px] mx-auto border border-black rounded-full transition-all duration-500 ${scrolled ? 'max-w-[300px]' : 'max-w-[380px]'}`}>
          <div className="flex items-center justify-between h-full px-6 relative">
            {/* Heart Logo on the left */}
            <img
              src="./heart.png"
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover transform hover:scale-110 transition duration-300 flex-shrink-0"
            />

            {/* Center content - Available for work (always visible) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
                  Available for work
                </span>
              </div>
            </div>

            {/* Menu button on the right */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors flex-shrink-0"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="absolute top-[68px] left-1/2 transform -translate-x-1/2 w-full max-w-[380px] bg-white/80 backdrop-blur-md border border-black rounded-2xl overflow-hidden z-50">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="px-6 pt-2">
                <button className="w-full bg-gray-700 px-4 py-3 rounded-full text-white hover:bg-gray-800 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}











// import { useState, useEffect, useRef } from 'react';
// import { Menu, X } from 'lucide-react';
// import { NavLink } from "react-router-dom";
// import { gsap } from 'gsap';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Refs for GSAP animations
//   const desktopNavRef = useRef(null);
//   const mobileNavRef = useRef(null);
//   const logoRef = useRef(null);
//   const navItemsRef = useRef(null);
//   const resumeButtonRef = useRef(null);
//   const availableWorkRef = useRef(null);
  
//   // Mobile refs
//   const mobileLogoRef = useRef(null);
//   const mobileAvailableRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   const navItems = [
//     { name: "Home", to: "/" }, 
//     { name: "about", to: "#" },
//     { name: "Projects", to: "/about" },
//   ];

//   useEffect(() => {
//     // GSAP Animation Timeline
//     const tl = gsap.timeline();
    
//     // Check if desktop or mobile
//     const isDesktop = window.innerWidth >= 768;
    
//     if (isDesktop && desktopNavRef.current) {
//       // Desktop animation
//       // Set initial states
//       gsap.set(desktopNavRef.current, {
//         scale: 0,
//         width: '60px',
//         opacity: 1
//       });
//       gsap.set([logoRef.current, navItemsRef.current], {
//         opacity: 0,
//         scale: 0.5
//       });

//       // Animation sequence
//       tl.to(desktopNavRef.current, {
//         scale: 1,
//         duration: 0.6,
//         ease: "back.out(1.7)"
//       })
//       .to(desktopNavRef.current, {
//         width: '450px',
//         duration: 0.8,
//         ease: "power3.out"
//       }, "+=0.3")
//       .to(logoRef.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         ease: "back.out(1.7)"
//       }, "-=0.6")
//       .to([navItemsRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "power3.out"
//       }, "-=0.4");

//     } else if (mobileNavRef.current) {
//       // Mobile animation
//       gsap.set(mobileNavRef.current, {
//         scale: 0,
//         width: '60px',
//         opacity: 1
//       });
//       gsap.set([mobileLogoRef.current, mobileAvailableRef.current, mobileMenuRef.current], {
//         opacity: 0,
//         scale: 0.5
//       });

//       tl.to(mobileNavRef.current, {
//         scale: 1,
//         duration: 0.6,
//         ease: "back.out(1.7)"
//       })
//       .to(mobileNavRef.current, {
//         width: '350px',
//         duration: 0.8,
//         ease: "power3.out"
//       }, "+=0.3")
//       .to(mobileLogoRef.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         ease: "back.out(1.7)"
//       }, "-=0.6")
//       .to([mobileAvailableRef.current, mobileMenuRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "power3.out",
//         stagger: 0.1
//       }, "-=0.4");
//     }

//     setIsLoaded(true);

//     return () => tl.kill();
//   }, []);

//   useEffect(() => {
//   let lastScrollY = window.pageYOffset;

//   const handleScroll = () => {
//     const currentScrollY = window.pageYOffset;
//     const delta = currentScrollY - lastScrollY;

//     if (delta > 5) {
//       // Scrolling down
//       setScrolled(true);
//     } else if (delta < -5) {
//       // Scrolling up
//       setScrolled(false);
//     }

//     lastScrollY = currentScrollY;
//   };

//   window.addEventListener('scroll', handleScroll, { passive: true });
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);


//   const TextFlip = ({ text }) => (
//     <div className="relative overflow-hidden h-5">
//       <span className="inline-block transition-transform duration-500 transform group-hover:-translate-y-full">
//         {text}
//       </span>
//       <span className="inline-block absolute top-0 left-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
//         {text}
//       </span>
//     </div>
//   );

//   return (
//     <div className="sticky top-6 z-40 mt-[-60px]">
//       {/* Desktop Navbar */}
//       <div 
//         ref={desktopNavRef}
//         className={`
//           bg-white h-[60px] border border-black rounded-full hidden md:flex 
//           items-center justify-between px-6 mx-auto overflow-hidden relative
//           transition-all duration-500 ease-in-out
//           ${scrolled ? 'max-w-[280px]' : 'max-w-[450px]'}
//         `}
//       >
//         {/* Logo */}
//         <img
//           ref={logoRef}
//           src="./heart.png"
//           alt="Logo"
//           className="h-10 w-10 rounded-full object-cover transform hover:scale-150 transition duration-300 flex-shrink-0"
//         />

//         {/* Nav Items */}
//         <div className="flex-grow flex items-center justify-end relative h-full">
//           {/* Main nav links */}
//           <div 
//             ref={navItemsRef}
//             className={`
//               absolute right-0 flex items-center space-x-2 transition-all duration-500
//               ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
//             `}
//           >
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.to}
//                 className="group text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 <TextFlip text={item.name} />
//               </NavLink>
//             ))}

//             <button 
//               ref={resumeButtonRef}
//               className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors transform hover:scale-105"
//             >
//               Resume
//             </button>
//           </div>

//           {/* "Available for work" state */}
//           <div 
//             ref={availableWorkRef}
//             className={`
//               absolute right-0 flex items-center space-x-2 transition-all duration-500
//               ${scrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
//             `}
//           >
//             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//               Available for work
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="md:hidden relative">
//         <div 
//           ref={mobileNavRef}
//           className={`bg-slate-100 h-[60px] mx-auto border border-black rounded-full transition-all duration-500 ${scrolled ? 'max-w-[300px]' : 'max-w-[380px]'}`}
//         >
//           <div className="flex items-center justify-between h-full px-6 relative">
//             {/* Heart Logo on the left */}
//             <img
//               ref={mobileLogoRef}
//               src="./heart.png"
//               alt="Logo"
//               className="h-10 w-10 rounded-full object-cover transform hover:scale-110 transition duration-300 flex-shrink-0"
//             />

//             {/* Center content - Available for work (always visible) */}
//             <div 
//               ref={mobileAvailableRef}
//               className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
//             >
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//                   Available for work
//                 </span>
//               </div>
//             </div>

//             {/* Menu button on the right */}
//             <button
//               ref={mobileMenuRef}
//               onClick={() => {
//                 setOpen(!open);
//                 // Add micro-interaction for menu button
//                 gsap.to(mobileMenuRef.current, {
//                   scale: 0.9,
//                   duration: 0.1,
//                   yoyo: true,
//                   repeat: 1,
//                   ease: "power2.out"
//                 });
//               }}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors flex-shrink-0"
//             >
//               {open ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown with GSAP animation */}
//         {open && (
//           <div 
//             className="absolute top-[68px] left-1/2 transform -translate-x-1/2 w-full max-w-[380px] bg-white/80 backdrop-blur-md border border-black rounded-2xl overflow-hidden z-50"
//             ref={(el) => {
//               if (el) {
//                 gsap.fromTo(el, 
//                   { 
//                     opacity: 0, 
//                     y: -20, 
//                     scale: 0.95 
//                   },
//                   { 
//                     opacity: 1, 
//                     y: 0, 
//                     scale: 1, 
//                     duration: 0.3, 
//                     ease: "back.out(1.7)" 
//                   }
//                 );
//               }
//             }}
//           >
//             <div className="py-4 space-y-2">
//               {navItems.map((item, index) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.to}
//                   onClick={() => setOpen(false)}
//                   className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
//                   ref={(el) => {
//                     if (el) {
//                       gsap.fromTo(el,
//                         { opacity: 0, x: -20 },
//                         { 
//                           opacity: 1, 
//                           x: 0, 
//                           duration: 0.4, 
//                           delay: index * 0.1 + 0.2,
//                           ease: "power3.out" 
//                         }
//                       );
//                     }
//                   }}
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}

//               <div 
//                 className="px-6 pt-2"
//                 ref={(el) => {
//                   if (el) {
//                     gsap.fromTo(el,
//                       { opacity: 0, y: 20 },
//                       { 
//                         opacity: 1, 
//                         y: 0, 
//                         duration: 0.4, 
//                         delay: 0.5,
//                         ease: "power3.out" 
//                       }
//                     );
//                   }
//                 }}
//               >
//                 <button className="w-full bg-gray-700 px-4 py-3 rounded-full text-white hover:bg-gray-800 transition-colors transform hover:scale-105">
//                   Contact
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }