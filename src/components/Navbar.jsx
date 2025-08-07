// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navItems = [
   
//     { name: "Skills", href: "#" },
//     { name: "Testimonials", href: "#" },
//     { name: "Projects", href: "#" }
//   ];

//   return (
//     <div className="pt-6">
//       {/* Desktop Navigation */}
      
//       <div className="bg-slate-100 h-[60px] w-full max-w-[450px] mx-auto border border-black rounded-full hidden md:block">
//         <div className="flex items-center justify-between h-full px-6">
//           <div className="flex items-center space-x-2">
//             <img
//     src="./hi.png"
//     alt="Logo"
//     className="h-8 w-8 rounded-full object-cover"
//   />
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <button className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors">
//             Contact
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden">
//         {/* Mobile Header */}
//         <div className="bg-slate-100 h-[60px] w-full max-w-[450px] mx-auto border border-black rounded-full">
//           <div className="flex items-center justify-between h-full px-6">
//             <div className="text-lg font-semibold text-gray-800">Menu</div>
//             <button
//               onClick={() => setOpen(!open)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
//             >
//               {open ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {open && (
//           <div className="w-full max-w-[450px] mx-auto mt-2 bg-slate-100 border border-black rounded-2xl overflow-hidden">
//             <div className="py-4 space-y-2">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.name}
//                 </a>
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

// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { name: "Skills", href: "#" },
//     { name: "Testimonials", href: "#" },
//     { name: "Projects", href: "#" }
//   ];

//   // Handle scroll detection with useRef to avoid stale closures
//   useEffect(() => {
//     let lastScrollY = 0;

//     const handleScroll = () => {
//       const currentScrollY = window.pageYOffset;
      
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         // Scrolling down and past threshold
//         setScrolled(true);
//       } else if (currentScrollY < lastScrollY) {
//         // Scrolling up - show full navbar
//         setScrolled(false);
//       }
      
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []); // Empty dependency array

//   const TextFlip = ({ text }) => {
//     return (
//       <div className="relative overflow-hidden h-5">
//         <span className="inline-block transition-transform duration-500 transform group-hover:-translate-y-full">
//           {text}
//         </span>
//         <span className="inline-block absolute top-0 left-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
//           {text}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <div className="sticky top-0 z-40 pt-6">
//       {/* Desktop Navigation */}
//       <div className={`bg-slate-100 h-[60px] w-full max-w-[450px] mx-auto border border-black rounded-full hidden md:block transition-all duration-500 ${
//         scrolled ? 'max-w-[280px]' : 'max-w-[450px]'
//       }`}>
//         <div className="flex items-center justify-between h-full px-6">
//           {!scrolled ? (
//             // Normal navbar state
//             <>
//               <div className="flex items-center space-x-2">
//                 <img
//                   src="./heart.png"
//                   alt="Logo"
//                   className="h-10 w-10 rounded-full object-cover transform hover:scale-150 transition duration-300"
//                 />
//                 {navItems.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="group text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                   >
//                     <div className="group">
//                       <TextFlip text={item.name} />
//                     </div>
//                   </a>
//                 ))}
//               </div>
//               <button className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors">
//                 Contact
//               </button>
//             </>
//           ) : (
//             // Scrolled state - Heart + "Available for work"
//             <div className="flex items-center justify-between w-full">
//               <img
//                 src="./heart.png"
//                 alt="Logo"
//                 className="h-10 w-10 rounded-full object-cover transform hover:scale-150 transition duration-300"
//               />
//               <div className="flex items-center space-x-2 animate-pulse">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//                   Available for work
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden">
//         {/* Mobile Header */}
//         <div className={`bg-slate-100 h-[60px] w-full mx-auto border border-black rounded-full transition-all duration-500 ${
//           scrolled ? 'max-w-[280px]' : 'max-w-[450px]'
//         }`}>
//           <div className="flex items-center justify-between h-full px-6">
//             {!scrolled ? (
//               <>
//                 <div className="text-lg font-semibold text-gray-800">Menu</div>
//                 <button
//                   onClick={() => setOpen(!open)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
//                 >
//                   {open ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//               </>
//             ) : (
//               // Mobile scrolled state - Menu + Available for work
//               <div className="flex items-center justify-between w-full">
//                 <div className="text-lg font-semibold text-gray-800">Menu</div>
//                 <div className="flex items-center space-x-2 animate-pulse">
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//                     Available
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown - Only show when not scrolled */}
//         {open && !scrolled && (
//           <div className="w-full max-w-[450px] mx-auto mt-2 bg-slate-100 border border-black rounded-2xl overflow-hidden">
//             <div className="py-4 space-y-2">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.name}
//                 </a>
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



// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { name: "Skills", href: "#" },
//     { name: "Testimonials", href: "#" },
//     { name: "Projects", href: "#" }
//   ];

//   // Handle scroll detection
//   useEffect(() => {
//     let lastScrollY = window.pageYOffset; // Initialize with current scroll position

//     const handleScroll = () => {
//       const currentScrollY = window.pageYOffset;

//       // If scrolling down and past a certain threshold (e.g., 50px)
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         setScrolled(true);
//       } else if (currentScrollY < lastScrollY) {
//         // If scrolling up, or if at the very top (currentScrollY <= 50), show full navbar
//         setScrolled(false);
//       }

//       lastScrollY = currentScrollY; // Update last scroll position
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []); // Empty dependency array ensures this runs once on mount

//   // TextFlip component for hover effect on nav items
//   const TextFlip = ({ text }) => {
//     return (
//       <div className="relative overflow-hidden h-5">
//         <span className="inline-block transition-transform duration-500 transform group-hover:-translate-y-full">
//           {text}
//         </span>
//         <span className="inline-block absolute top-0 left-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
//           {text}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <div className="sticky top-0 z-40 pt-6">
//       {/* Desktop Navigation */}
//       <div className={`bg-slate-100 h-[60px] w-full max-w-[450px] mx-auto border border-black rounded-full hidden md:block transition-all duration-500 ${
//         scrolled ? 'max-w-[280px]' : 'max-w-[450px]'
//       }`}>
//         <div className="flex items-center h-full px-6 relative"> {/* Added relative positioning for children */}
//           {/* Logo - Always present */}
//           <img
//             src="https://placehold.co/40x40/FF69B4/FFFFFF?text=❤️" // Placeholder for heart.png
//             alt="Logo"
//             className="h-10 w-10 rounded-full object-cover transform hover:scale-150 transition duration-300 flex-shrink-0"
//           />

//           {/* Container for the changing content (Nav Items / Available for Work) */}
//           <div className="flex-grow flex items-center justify-end overflow-hidden relative h-full">
//             {/* Normal Navbar Content - fades out and slides left */}
//             <div className={`
//               absolute right-0 flex items-center space-x-2
//               transition-all duration-300 ease-in-out
//               ${scrolled ? 'opacity-0 translate-x-full pointer-events-none' : 'opacity-100 translate-x-0 pointer-events-auto'}
//             `}>
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="group text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                 >
//                   <div className="group">
//                     <TextFlip text={item.name} />
//                   </div>
//                 </a>
//               ))}
//               <button className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors">
//                 Contact
//               </button>
//             </div>

//             {/* Scrolled State Content - fades in and slides from right */}
//             <div className={`
//               absolute right-0 flex items-center space-x-2 animate-pulse
//               transition-all duration-300 ease-in-out
//               ${scrolled ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'}
//             `}>
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//                 Available for work
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden">
//         {/* Mobile Header */}
//         <div className={`bg-slate-100 h-[60px] w-full mx-auto border border-black rounded-full transition-all duration-500 ${
//           scrolled ? 'max-w-[280px]' : 'max-w-[450px]'
//         }`}>
//           <div className="flex items-center h-full px-6 relative">
//             {/* Mobile Menu Text and Button - Always present */}
//             <div className="flex items-center flex-grow">
//               <div className="text-lg font-semibold text-gray-800 flex-shrink-0 mr-4">Menu</div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors flex-shrink-0"
//               >
//                 {open ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>

//             {/* Mobile Scrolled State Content - fades in and slides from right */}
//             <div className={`
//               absolute right-0 flex items-center space-x-2 animate-pulse
//               transition-all duration-300 ease-in-out
//               ${scrolled ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'}
//             `}>
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
//                 Available
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown - Only show when not scrolled */}
//         {open && !scrolled && (
//           <div className="w-full max-w-[450px] mx-auto mt-2 bg-slate-100 border border-black rounded-2xl overflow-hidden">
//             <div className="py-4 space-y-2">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.name}
//                 </a>
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





import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", to: "/" }, 
  { name: "About", to: "/about" },
   // Use real route when ready
  { name: "Projects", to: "#" }
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
    <div className="sticky top-6 z-40">
      {/* Desktop Navbar */}
      <div className={`
    bg-white h-[60px] border border-black rounded-full hidden md:flex 
    items-center justify-between px-6 mx-auto overflow-hidden relative
    transition-all duration-500 ease-in-out
    ${scrolled ? 'max-w-[280px]' : 'max-w-[450px]'}
  `}>
    {/* Logo */}
    <img
      src="https://placehold.co/40x40/FF69B4/FFFFFF?text=❤️"
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
          Contact
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
    <div className="md:hidden">
        <div className={`bg-slate-100 h-[60px] w-full mx-auto border border-black rounded-full transition-all duration-500 ${scrolled ? 'max-w-[280px]' : 'max-w-[450px]'}`}>
          <div className="flex items-center h-full px-6 relative">
            <div className="flex items-center flex-grow">
              <div className="text-lg font-semibold text-gray-800 flex-shrink-0 mr-4">Menu</div>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className={`
              absolute right-0 flex items-center space-x-2 transition-all duration-500 ease-in-out
              ${scrolled ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
            `}>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
                Available
              </span>
            </div>
          </div>
        </div>

        {open && !scrolled && (
          <div className="w-full max-w-[450px] mx-auto mt-2 bg-slate-100 border border-black rounded-2xl overflow-hidden">
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
