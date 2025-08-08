import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
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
        animation-play-state: paused; /* Start paused until reveal completes */
    }
        
    .slider-track:hover {
        animation-play-state: paused;
    }
    
    .slider-track.playing {
        animation-play-state: running;
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

    .reveal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        pointer-events: none;
    }

    .reveal-left, .reveal-right {
        position: absolute;
        top: 0;
        bottom: 0;
        background: #000000; /* Dark overlay */
        z-index: 10;
    }

    .reveal-left {
        left: 0;
        width: 50%;
    }

    .reveal-right {
        right: 0;
        width: 50%;
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

    const sliderRef = useRef(null)
    const leftOverlayRef = useRef(null)
    const rightOverlayRef = useRef(null)
    const sliderTrackRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline()

        // Initial state - overlays cover the entire slider
        gsap.set([leftOverlayRef.current, rightOverlayRef.current], {
            width: "50%"
        })

        // Animation sequence
        timeline
            .to([leftOverlayRef.current, rightOverlayRef.current], {
                width: "0%",
                duration: 1.2,
                ease: "power2.inOut",
                delay: 0.5 // Small delay before starting
            })
            .call(() => {
                // Start the slider animation after reveal completes
                if (sliderTrackRef.current) {
                    sliderTrackRef.current.classList.add('playing')
                }
            })

        return () => {
            timeline.kill()
        }
    }, [])

    return (
        <div className='flex items-center mt-[-100px] flex-col'>
            <style>{customStyle}</style>
            <div 
                ref={sliderRef}
                className='slider-container overflow-hidden w-full max-w-[1200px] mx-auto rounded-xl relative'
            >
                {/* Reveal overlay */}
                <div className="reveal-overlay">
                    <div ref={leftOverlayRef} className="reveal-left"></div>
                    <div ref={rightOverlayRef} className="reveal-right"></div>
                </div>

                <div 
                    ref={sliderTrackRef}
                    className='slider-track flex w-fit' 
                    id='sliderTrack'
                >
                    {/* Original items */}
                    {itemsSection.map((items, index) => (
                        <div
                            key={`original-${index}`}
                            className='slider-item flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center mr-[50px]'
                        >
                            <div className='w-[100px] h-[100px] bg-gray-800 rounded-3xl flex items-center justify-center p-4 shadow-lg'>
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
                            key={`clone-${index}`}
                            className='slider-item flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center mr-[50px]'
                        >
                            <div className='w-[100px] h-[100px] bg-gray-800 rounded-3xl flex items-center justify-center p-4 shadow-lg'>
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