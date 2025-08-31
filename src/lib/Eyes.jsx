import React, { useEffect, useState } from 'react'
import "./Eyes.css"
const AndroidHead = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 })
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX
            const mouseY = e.clientY
            
            // Get the center of the screen (where the Android head is)
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2
            
            // Calculate the distance from center
            const deltaX = mouseX - centerX
            const deltaY = mouseY - centerY
            
            // Limit the movement range (so pupils don't go outside the eye)
            const maxDistance = 8 // Reduced for smaller size
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
            
            let x = deltaX
            let y = deltaY
            
            // If mouse is too far, normalize the movement
            if (distance > 100) {
                x = (deltaX / distance) * maxDistance
                y = (deltaY / distance) * maxDistance
            } else {
                x = (deltaX / 100) * maxDistance
                y = (deltaY / 100) * maxDistance
            }
            
            setEyePosition({ x, y })
        }
        
        window.addEventListener("mousemove", handleMouseMove)
        
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div className='flex items-center justify-center h-[235px] w-full bg-green-500 rounded-xl p-4'> 
            <div className='relative flex items-center justify-center top-4'>
                {/* Antennae */}
                <div 
                    className='absolute bottom-32 left-14 w-4 h-20 bg-green-300 rounded-full origin-bottom loop-1'
                    
                ></div>
                <div 
                    className='absolute bottom-32 right-14 w-4 h-20 bg-green-300 rounded-full origin-bottom loop-2'
                    
                ></div>
                             
                {/* Head */}
                <div className='bg-green-400 h-[200px] w-[350px] rounded-t-full relative overflow-hidden'>
                    {/* Eyes Container */}
                    <div className='absolute top-16 left-0 right-0 flex justify-center items-center gap-20'>
                        {/* Left Eye */}
                        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm relative overflow-hidden'>
                            {/* Black Pupil */}
                            <div 
                                className='w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-100 ease-out'
                                style={{
                                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                                }}
                            >
                            </div>
                        </div>
                                             
                        {/* Right Eye */}
                        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm relative overflow-hidden'>
                            {/* Black Pupil */}
                            <div 
                                className='w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-100 ease-out'
                                style={{
                                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CSS Keyframes */}
            <style jsx>{`
                @keyframes antennaSwayLeft {
                    0%, 100% { transform: rotate(-25deg); }
                    50% { transform: rotate(-15deg); }
                }
                
                @keyframes antennaSwayRight {
                    0%, 100% { transform: rotate(25deg); }
                    50% { transform: rotate(15deg); }
                }
            `}</style>
        </div>
    )
}

export default AndroidHead