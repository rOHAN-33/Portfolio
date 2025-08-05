import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { ThemeProvider } from './ui/useTheme'
import Loader from './components/Loader'
// import ThemeToggle from '../ui/ThemeToggle'

const App = () => {
  const[theme, setTheme] = useState("light")
  const [isLoading, setIsLoading] = useState(true);
   const darkTheme  = ()=>{
     setTheme("dark")
   }
   const lightTheme = ()=>{
     setTheme("light")
   }
    useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);
  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // This should be longer than your GSAP animation delay + duration
  }, []);
  return (
    <div className='App'>
      {isLoading && <Loader></Loader>}
      
       <ThemeProvider value={{theme, darkTheme, lightTheme}}>
      <div className={`min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
      <Home></Home>
    </div>
    </ThemeProvider>
    </div>
    
    
  )
}

export default App