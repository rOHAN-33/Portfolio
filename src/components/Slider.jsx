import React, { useEffect, useState } from 'react'
import "./Slider.css"

const customStyle = `
    @keyframes scrollLeft {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
        
    .slider-track {
        animation: scrollLeft 60s infinite linear;
    }
        
    .slider-track:hover {
        animation-play-state: paused;
    }
               
    @media (max-width: 768px) {
        .slider-item {
            width: 200px;
            height: 180px;
            font-size: 1.5rem;
        }
        .slider-track {
            animation-duration: 25s;
        }
    }
     
    @media (max-width: 480px) {
        .slider-item {
            width: 150px;
            height: 150px;
            font-size: 1.2rem;
            margin-right: 0.75rem;
        }
        .slider-track {
            animation-duration: 20s;
        }
    }
        .logo-blur-x {
  position: relative;
  display: inline-block;
}

.logo-blur-x img {
  display: block;
}

.logo-blur-x::before,
.logo-blur-x::after {
  content: '';
  position: absolute;
  top: 0;
  width: 40px; /* Adjust blur width */
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.logo-blur-x::before {
  left: 0;
  background: linear-gradient(to right, rgba(30,30,30,0.6) 70%, transparent 100%);
  filter: blur(10px); /* Adjust blur strength */
}

.logo-blur-x::after {
  right: 0;
  background: linear-gradient(to left, rgba(30,30,30,0.6) 70%, transparent 100%);
  filter: blur(10px);
}

`

const Slider = () => {
    const [itemsSection] = useState([
        {imageUrl: "./js.png"},
        {imageUrl: "./react.png"},
        {imageUrl: "./node.png"},
        {imageUrl: "./express_.png"},
        {imageUrl: "./next.png"},
        {imageUrl: "./tailwind css.png"},
        {imageUrl: "./figma.png"}
    ])

    useEffect(() => {
        const sliderTrack = document.getElementById("sliderTrack")
        if (sliderTrack) {
            sliderTrack.style.animation = 'scrollLeft 80s linear infinite';
        }
    }, [])

    return (
        <div className='flex items-center mt-[-100px]  flex-col '>
            <style>{customStyle}</style>
            <div className='slider-container overflow-hidden w-full max-w-[1200px] mx-auto rounded-xl   ' id='logo-blur-x'>
                <div className='slider-track flex w-fit' id='sliderTrack'>
                    {/* Original items */}
                    {itemsSection.map((items, index) => (
                        <div
                            key={`original-${index}`}
                            className='slider-item flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center mr-[50px]'
                        >
                            <div className='w-[100px] h-[100px] bg-gray-800 rounded-3xl flex items-center justify-center p-4 shadow-lg '>
                                 <img 
                                src={items.imageUrl} 
                                alt={`Technology ${index + 1}`}
                                className='w-[100px] h-[100px] object-contain'
                            />
                            </div>
                           
                        </div>
                    ))}
                    
                    {/* Cloned items for seamless loop */}
                    {itemsSection.map((items, index) => (
                        <div
                            key={`original-${index}`}
                            className='slider-item flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center mr-[50px]'
                        >
                            <div className='w-[100px] h-[100px] bg-gray-800 rounded-3xl flex items-center justify-center p-4 shadow-lg '>
                                 <img 
                                src={items.imageUrl} 
                                alt={`Technology ${index + 1}`}
                                className='w-16 h-16 object-contain'
                            />
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider