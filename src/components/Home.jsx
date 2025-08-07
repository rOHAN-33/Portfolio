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
// import Testimonials from './Testimonials'
import TestimonialsSection from './TestimonialsSection'
import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'
const Home = () => {
 
  return (
   
<div className='min-h-screen' >
  {/* <Navbar></Navbar> */}
  <ImageGrid></ImageGrid>
    <Slider></Slider>
    {/* <Projects></Projects> */}
    <Explain></Explain>
    <Skills></Skills>
    <TestimonialsSection></TestimonialsSection>
     <Contact></Contact>
    <Footer></Footer>
   
  {/* <ThemeToggle></ThemeToggle> */}
</div>


  
  )
}

export default Home