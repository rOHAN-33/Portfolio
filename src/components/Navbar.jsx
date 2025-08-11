
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { name: "Home", to: "/" }, 
    
//     // Use real route when ready
//     { name: "about", to: "#" },
//     { name: "Projects", to: "/about" },
//   ];

//   useEffect(() => {
//     let lastScrollY = window.pageYOffset;

//     const handleScroll = () => {
//       window.requestAnimationFrame(() => {
//         const currentScrollY = window.pageYOffset;
//         if (currentScrollY > lastScrollY && currentScrollY > 50) {
//           setScrolled(true);
//         } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
//           setScrolled(false);
//         }
//         lastScrollY = currentScrollY;
//       });
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

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
//       <div className={`
//         bg-white h-[60px] border border-black rounded-full hidden md:flex 
//         items-center justify-between px-6 mx-auto overflow-hidden relative
//         transition-all duration-500 ease-in-out
//         ${scrolled ? 'max-w-[280px]' : 'max-w-[450px]'}
//       `}>
//         {/* Logo */}
//         <img
//           src="./heart.png"
//           alt="Logo"
//           className="h-10 w-10 rounded-full object-cover transform hover:scale-150 transition duration-300 flex-shrink-0"
//         />

//         {/* Nav Items */}
//         <div className="flex-grow flex items-center justify-end relative h-full">
//           {/* Main nav links */}
//           <div className={`
//             absolute right-0 flex items-center space-x-2 transition-all duration-500
//             ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
//           `}>
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.to}
//                 className="group text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 <TextFlip text={item.name} />
//               </NavLink>
//             ))}

//             <button className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors">
//               Resume
//             </button>
//           </div>

//           {/* "Available for work" state */}
//           <div className={`
//             absolute right-0 flex items-center space-x-2 transition-all duration-500
//             ${scrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
//           `}>
//             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//               Available for work
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="md:hidden relative">
//         <div className={`bg-slate-100 h-[60px] w-[350px] mx-auto border border-black rounded-full transition-all duration-500 ${scrolled ? 'max-w-[300px]' : 'max-w-[380px]'}`}>
//           <div className="flex items-center justify-between h-full px-6 relative">
//             {/* Heart Logo on the left */}
//             <img
//               src="./heart.png"
//               alt="Logo"
//               className="h-10 w-10 rounded-full object-cover transform hover:scale-110 transition duration-300 flex-shrink-0"
//             />

//             {/* Center content - Available for work (always visible) */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//                   Available for work
//                 </span>
//               </div>
//             </div>

//             {/* Menu button on the right */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors flex-shrink-0"
//             >
//               {open ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {open && (
//           <div className="absolute top-[68px] left-1/2 transform -translate-x-1/2 w-full max-w-[380px] bg-white/80 backdrop-blur-md border border-black rounded-2xl overflow-hidden z-50">
//             <div className="py-4 space-y-2">
//               {navItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.to}
//                   onClick={() => setOpen(false)}
//                   className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}

//               <div className="px-6 pt-2">
//                 <button className="w-full bg-gray-700 px-4 py-3 rounded-full text-white hover:bg-gray-800 transition-colors">
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











import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const desktopNavRef = useRef(null);
  const mobileNavRef = useRef(null);

  const navItems = [
    { name: "Home", to: "/" }, 
    { name: "about", to: "#" },
    { name: "Projects", to: "/about" },
  ];

  // Initial animation effect
  useEffect(() => {
    const loadAnimeJs = async () => {
      // Load anime.js dynamically
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
      script.onload = () => {
        startAnimation();
      };
      document.head.appendChild(script);
    };

    const startAnimation = () => {
      const anime = window.anime;
      
      // Desktop animation
      if (desktopNavRef.current) {
        // Initially hide the navbar
        anime.set(desktopNavRef.current, {
          scale: 0,
          opacity: 0,
          width: '60px',
          height: '60px',
          borderRadius: '50%'
        });

        // Animation sequence
        const tl = anime.timeline({
          easing: 'easeOutElastic(1, .8)',
          complete: () => setAnimationComplete(true)
        });

        // First: Scale up the ball
        tl.add({
          targets: desktopNavRef.current,
          scale: 1,
          opacity: 1,
          duration: 800,
          delay: 500
        });

        // Second: Expand width to full navbar
        tl.add({
          targets: desktopNavRef.current,
          width: '450px',
          borderRadius: '30px',
          duration: 1000,
          easing: 'easeOutCubic'
        }, '-=200');

        // Third: Fade in content
        tl.add({
          targets: desktopNavRef.current.querySelectorAll('.nav-content'),
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          delay: anime.stagger(100),
          easing: 'easeOutQuart'
        }, '-=400');
      }

      // Mobile animation
      if (mobileNavRef.current) {
        anime.set(mobileNavRef.current, {
          scale: 0,
          opacity: 0,
          width: '60px',
          height: '60px',
          borderRadius: '50%'
        });

        const mobileTl = anime.timeline({
          easing: 'easeOutElastic(1, .8)',
        });

        mobileTl.add({
          targets: mobileNavRef.current,
          scale: 1,
          opacity: 1,
          duration: 800,
          delay: 500
        });

        mobileTl.add({
          targets: mobileNavRef.current,
          width: '350px',
          borderRadius: '30px',
          duration: 1000,
          easing: 'easeOutCubic'
        }, '-=200');

        mobileTl.add({
          targets: mobileNavRef.current.querySelectorAll('.nav-content'),
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          delay: anime.stagger(100),
          easing: 'easeOutQuart'
        }, '-=400');
      }
    };

    loadAnimeJs();
  }, []);

  // Existing scroll functionality
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
    <div className="sticky top-6 z-40 mt-6">
      {/* Desktop Navbar */}
      <div 
        ref={desktopNavRef}
        className={`
          bg-white h-[60px] border border-black rounded-full hidden md:flex 
          items-center justify-between px-6 mx-auto overflow-hidden relative
          transition-all duration-500 ease-in-out
          ${scrolled ? 'max-w-[280px]' : 'max-w-[450px]'}
        `}
      >
        {/* Logo */}
        <img
          src="./heart.png"
          alt="Logo"
          className="nav-content h-10 w-10 rounded-full object-cover transform hover:scale-150 transition duration-300 flex-shrink-0 opacity-0"
        />

        {/* Nav Items */}
        <div className="flex-grow flex items-center justify-end relative h-full">
          {/* Main nav links */}
          <div className={`
            absolute right-0 flex items-center space-x-2 transition-all duration-500
            ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
          `}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.to}
                className="nav-content group text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors opacity-0 hover:text-blue-600"
              >
                <TextFlip text={item.name} />
              </a>
            ))}

            <button className="nav-content bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors opacity-0">
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
        <div 
          ref={mobileNavRef}
          className={`bg-slate-100 h-[60px] w-[350px] mx-auto border border-black rounded-full transition-all duration-500 ${scrolled ? 'max-w-[300px]' : 'max-w-[380px]'}`}
        >
          <div className="flex items-center justify-between h-full px-6 relative">
            {/* Heart Logo on the left */}
            <img
              src="./heart.png"
              alt="Logo"
              className="nav-content h-10 w-10 rounded-full object-cover transform hover:scale-110 transition duration-300 flex-shrink-0 opacity-0"
            />

            {/* Center content - Available for work (always visible) */}
            <div className="nav-content absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center opacity-0">
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
              className="nav-content inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors flex-shrink-0 opacity-0"
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
                <a
                  key={item.name}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
                >
                  {item.name}
                </a>
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