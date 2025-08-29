



import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SlideArrowButton from './ui/SlideArrowButton';
const HoverVideoBlock = ({ 
  videoSrc = "./scrolling.mp4",
  width = "400px",
  height = "300px",
  borderRadius = "12px"
}) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
    }
  };

  return (
    <div className="p-8 ml-[40px] mb-[190px] mt-[-40px] h-[400px] w-[1050px] flex justify-center items-center  bg-black">
      <div
        className="relative  cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          width,
          height,
          borderRadius
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-[400px] w-[1000px]  object-cover rounded-full"
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Orange Overlay */}
  <div
    className={`absolute inset-0 bg-orange-500 h-[400px]  rounded-full transition-all duration-500 ease-in-out ${
      isHovered 
        ? 'bg-opacity-20 backdrop-blur-none' 
        : 'bg-opacity-100'
    }`}
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center  ">
      <h1 className="text-white text-4xl md:text-6xl font-mono font-bold mb-8 text-center"
        style={{fontFamily: 'Antonio, sans-serif'}}>
        UPGRADE YOUR WEB PRESENCE
      </h1>
      <Link to="/contactPage">
      {/* <button
        className="bg-gray-800 text-white px-8 py-4 rounded-lg font-mono text-xl hover:bg-white hover:text-black transition-all duration-300"
        
      >

      </button> */}
      <SlideArrowButton></SlideArrowButton>
      </Link>
      
    </div>
  </div>
        
  
</div>

        {/* Optional Content/Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`text-center transition-all duration-500 ${
              isHovered 
                ? 'opacity-0 transform scale-95' 
                : 'opacity-100 transform scale-100'
            }`}
          >
           
          </div>
        </div>

        {/* Video Controls Overlay (Optional - appears on hover) */}
        <div
          className={`absolute bottom-4 left-4 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          
        </div>
      </div>
    
  );
};

// Example usage with multiple blocks
const HoverVideoDemo = () => {
  return (
    <div className=" bg-black py-8 mb-32">
      <div className="max-w-6xl mx-auto px-4">
       
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Block 1 */}
          <HoverVideoBlock 
            width="100%"
            height="250px"
            videoSrc="./scrolling.mp4"
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default HoverVideoDemo;  










