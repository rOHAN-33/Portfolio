import React from 'react'
import  { WithFrameShine } from './withFrameShine'
import GridDistortion from "../../reactbits/GridDistortion/GridDistortion"
import Navbar from './Navbar'
import ImageGrid from './ImageGrid'
// import { useState, useEffect } from 'react'
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
import LogoLoop from '../../reactbits/LogoLoop/LogoLoop'
// import ScrollStack from './ScrollStack'
import TechSkillsGrid from './SkillSet'
import ParallexCard from '../lib/ParallexCard'
import Eight from '../lib/Grid'
import Grid from '../lib/Grid'
// import Loader from '../ui/Loader'
const Home = () => {
 
  return (
   
<div className='min-h-screen' >
  {/* <Navbar></Navbar> */}
  <ImageGrid></ImageGrid>
  {/* <LogoLoop></LogoLoop> */}
    <Slider></Slider>
    {/* <Projects></Projects> */}
    <Explain></Explain>
    <ParallexCard></ParallexCard>
    {/* <ScrollStack></ScrollStack> */}
    {/* <TechSkillsGrid></TechSkillsGrid> */}
    {/* <Skills></Skills> */}
    {/* <TestimonialsSection></TestimonialsSection> */}
    {/* <Eight></Eight> */}
    <Grid></Grid>
     <Contact></Contact>
    {/* <Footer></Footer> */}
   
  {/* <ThemeToggle></ThemeToggle> */}
</div>


  
  )
}

export default Home