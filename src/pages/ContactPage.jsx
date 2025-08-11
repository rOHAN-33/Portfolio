import React from 'react'
import { useState } from 'react';
const ContactPage = () => {
    const [showImage, setShowImage] = useState(false);
    const[onSubmit , setOnSubmit] = useState("")

    
  return (
    <div className='min-h-screen bg-black flex items-center mb-[140px] ml-[250px] '>
        <div className="relative h-[300px] w-[300px]">
              {/* Image Reveal Container */}
              <div 
                
                className="w-full h-full rounded-2xl overflow-hidden"
              >
                <img 
                  
                  src="./me-2.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* HI Circle */}
              <div 
                
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
                

                <form onSubmit={handleSubmit}>

                </form>
    </div>
  )
}

export default ContactPage