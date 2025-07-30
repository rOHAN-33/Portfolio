import React from 'react'
// import { div } from 'three/tsl'
import '../components/ImageGrid.css'
const ImageGrid = () => {
  return (
    <div className=' ml-[10px]'>
       <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-3 col-start-2 row-start-2 mt-[30px]">
            <h1 className='text-5xl mb-[-30px] font-antonia' style={{fontFamily: 'Antonio, sans-serif'}}>Rohan Singh Negi</h1>
             <h1 className='text-[100px] ml-[-15px] font-bold ' style={{fontFamily: 'Antonio, sans-serif'}}>CREATIVE</h1>
        </div>
    <div className="row-span-3 col-start-3 row-start-2">
        <div className='border  h-[300px] w-[300px]'>
            <img src="./me-2.jpg" alt="" />
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