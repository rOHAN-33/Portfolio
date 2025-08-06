import React from 'react'
import  { WithFrameShine } from './withFrameShine'
import GridDistortion from "../../reactbits/GridDistortion/GridDistortion"
import Navbar from './Navbar'
import ImageGrid from './ImageGrid'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '../ui/useTheme'
// import ThemeChanger from '../ui/useTheme'
import ThemeToggle from '../ui/ThemeToggle'
import Slider from './Slider'
import Explain from './Explain'
import Skills from './Skills'
const Home = () => {
 
  return (
   
<div >
  <Navbar></Navbar>
  <ImageGrid></ImageGrid>
    <Slider></Slider>
    <Explain></Explain>
    <Skills></Skills>
  {/* <ThemeToggle></ThemeToggle> */}
</div>


  
  )
}

export default Home