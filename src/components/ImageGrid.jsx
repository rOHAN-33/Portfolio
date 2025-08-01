import React from 'react'
import { useEffect, useState } from 'react'
// import { div } from 'three/tsl'
import '../components/ImageGrid.css'
import FlipImage from './FlipImage'
const ImageGrid = () => {
     const [showImage, setShowImage] = useState(false);
     useEffect(() => {
        const interval = setInterval(() => {
          setShowImage(prev => !prev);
        }, 3000); // Switch every 3 seconds
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className=' ml-[10px] mt-[10px] overflow-y-hidden'>
       <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-3 col-start-2 row-start-2 mt-[30px]">
            <h1 className='text-5xl mb-[-30px] font-antonia' style={{fontFamily: 'Antonio, sans-serif'}}>Rohan Singh Negi</h1>
             <h1 className='text-[100px] ml-[-15px] font-bold ' style={{fontFamily: 'Antonio, sans-serif'}}>CREATIVE</h1>
        </div>

        
    <div className="row-span-3 col-start-3 row-start-2">
  <div className="relative h-[300px] w-[300px]  ">
    {/* Image */}
    <img src="./me-2.jpg" alt="Profile" className="w-full h-full object-cover rounded-2xl" />

    {/* HI Circle outside the image (bottom-left) */}
    <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shadow-xl z-10">
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

        
    <div className="row-span-3 col-start-4 row-start-2 mt-[100px]">
        <h1 className='text-[100px] ml-[-10px] font-bold ' style={{fontFamily: 'Antonio, sans-serif'}}>DEVELOPER</h1>
         <h1 className='text-5xl mb-[-30px] font-antonia' style={{fontFamily: 'Antonio, sans-serif'}}>I'am an India-based web developer</h1>
    </div>
</div> 
    </div>
    
  )
}

export default ImageGrid


// import React from 'react'
// import { useEffect, useState } from 'react'
// import '../components/ImageGrid.css'
// import FlipImage from './FlipImage'

// const ImageGrid = () => {
//     const [showImage, setShowImage] = useState(false);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setShowImage(prev => !prev);
//         }, 3000); // Switch every 3 seconds
        
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className='min-h-screen overflow-hidden px-4 py-8 mt-[-60px]'>
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-5 grid-rows-5 gap-4 relative">
                    
//                     {/* Name and CREATIVE text */}
//                     <div className="row-span-3 col-start-2 row-start-2 mt-[30px]">
//                         <h1 className='text-5xl mb-[-30px] ml-[] font-antonia' style={{fontFamily: 'Antonio, sans-serif'}}>
//                             Rohan Singh Negi
//                         </h1>
//                         <h1 className='text-[100px] ml-[-70px] font-bold' style={{fontFamily: 'Antonio, sans-serif'}}>
//                             CREATIVE
//                         </h1>
//                     </div>

//                     {/* Main Image with HI Animation positioned relative to it */}
//                     <div className="row-span-3 col-start-3 row-start-2 relative">
//                         <div className='border h-[300px] w-[300px] relative'>
//                             <img 
//                                 src="./me-2.jpg" 
//                                 alt="" 
//                                 className='rounded-2xl w-full h-full object-cover'
//                             />
                            
//                             {/* HI Animation positioned absolute to the image */}
//                             <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shadow-xl">
//                                 <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
//                                     !showImage 
//                                         ? 'opacity-100 blur-0 scale-100 rotate-0' 
//                                         : 'opacity-0 blur-md scale-110 rotate-12'
//                                 }`}>
//                                     <h1 className="text-4xl font-bold text-white" style={{fontFamily: 'Antonio, sans-serif'}}>
//                                         HI
//                                     </h1>
//                                 </div>

//                                 <img
//                                     src="/hi.png"
//                                     alt="Profile"
//                                     className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
//                                         showImage 
//                                             ? 'opacity-100 blur-0 scale-100 rotate-0' 
//                                             : 'opacity-0 blur-md scale-90 -rotate-12'
//                                     }`}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* DEVELOPER text and description */}
//                     <div className="row-span-3 col-start-4 row-start-2 mt-[100px]">
//                         <h1 className='text-[100px] ml-[40px] font-bold' style={{fontFamily: 'Antonio, sans-serif'}}>
//                             DEVELOPER
//                         </h1>
//                         <h1 className='text-5xl  font-antonia' style={{fontFamily: 'Antonio, sans-serif'}}>
//                             I'am an India-based web developer
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ImageGrid