













// with loader
// import React, { useEffect, useState } from 'react'
// import Lenis from '@studio-freight/lenis'
// import Home from './components/Home'
// import { ThemeProvider } from './ui/useTheme'
// // import CodingLoader from './components/CodingLoader' // Import your new loader
// import CodingLoader from './ui/CodingLoader'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import About from './pages/About'

// const App = () => {
//   const [theme, setTheme] = useState("dark")
//   const [isLoading, setIsLoading] = useState(true)

//   const darkTheme = () => {
//     setTheme("dark")
//   }

//   const lightTheme = () => {
//     setTheme("light")
//   }

//   // Handle loader completion
//   const handleLoaderComplete = () => {
//     setIsLoading(false)
//   }

//   // Theme effect
//   useEffect(() => {
//     const root = document.documentElement
//     root.classList.remove('light', 'dark')
//     root.classList.add(theme)
//   }, [theme])

//   // Lenis smooth scrolling effect - only initialize after loading
//   useEffect(() => {
//     // Don't initialize Lenis while loading
//     if (isLoading) return

//     // Initialize Lenis
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       direction: 'vertical',
//       gestureDirection: 'vertical',
//       smooth: true,
//       mouseMultiplier: 1,
//       smoothTouch: false, // Better performance on mobile
//       touchMultiplier: 2,
//       infinite: false,
//     })

//     // Animation loop
//     function raf(time) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)

//     // Cleanup when component unmounts
//     return () => {
//       lenis.destroy()
//     }
//   }, [isLoading]) // Depend on isLoading

//   // Show loader first
//   if (isLoading) {
//     return <CodingLoader onComplete={handleLoaderComplete} />
//   }

//   // Main app content after loading
//   return (
//     <BrowserRouter>
//       <div className='App'>
//         <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
//           <div className={`min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
//             <Navbar />
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route path='/about' element={<About />} />
//             </Routes>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App
















import React, { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from './components/Home'
import { ThemeProvider } from './ui/useTheme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import { SmoothCursor } from './components/ui/smooth-cursor'

const App = () => {
  const [theme, setTheme] = useState("dark")

  const darkTheme = () => {
    setTheme("dark")
  }

  const lightTheme = () => {
    setTheme("light")
  }

  // Theme effect
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

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
    })

    // Animation loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup when component unmounts
    return () => {
      lenis.destroy()
    }
  }, []) // The dependency array is now empty

  // Main app content
  return (

    <BrowserRouter>

      <div className='App cursor-none'>
<SmoothCursor></SmoothCursor>
        <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
          <div className={`min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
            
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
<Route path='/contactPage' element={<ContactPage></ContactPage>}></Route>
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  )
}

export default App