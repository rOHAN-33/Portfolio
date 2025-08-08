import React, { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from './components/Home'
import { ThemeProvider } from './ui/useTheme'
import Loader from './components/Loader'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
// import ThemeToggle from '../ui/ThemeToggle'

const App = () => {
  const [theme, setTheme] = useState("dark")
  const [isLoading, setIsLoading] = useState(true);

  const darkTheme = () => {
    setTheme("dark")
  }

  const lightTheme = () => {
    setTheme("light")
  }

  // Theme effect
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Lenis smooth scrolling effect
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Better performance on mobile
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array - runs once on mount

  // Uncomment if you want to use the loader
  // useEffect(() => {
  //   // Simulate content loading
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000); // This should be longer than your GSAP animation delay + duration
  // }, []);

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <div className='App'>
      <ThemeProvider value={{ theme, darkTheme, lightTheme }}>

        <div className={`min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About />} />

            
          </Routes>
          
        </div>
      </ThemeProvider>
    </div>
    <Footer></Footer>
    </BrowserRouter>
    
  )
}

export default App