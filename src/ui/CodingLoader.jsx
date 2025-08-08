import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CodingLoader = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const loaderRef = useRef(null)
  const piece1Ref = useRef(null)
  const piece2Ref = useRef(null)
  const piece3Ref = useRef(null)
  const piece4Ref = useRef(null)

  const codeLines = [
    "import React from 'react';",
    "import { gsap } from 'gsap';",
    "import Lenis from '@studio-freight/lenis';",
    "",
    "const App = () => {",
    "  const [loading, setLoading] = useState(true);",
    "  const [theme, setTheme] = useState('dark');",
    "",
    "  useEffect(() => {",
    "    // Initialize smooth scrolling...",
    "    const lenis = new Lenis({",
    "      duration: 1.2,",
    "      smooth: true",
    "    });",
    "    ",
    "    // Start animation loop",
    "    requestAnimationFrame(raf);",
    "  }, []);",
    "",
    "  return (",
    "    <div className='app'>",
    "      <Navbar />",
    "      <Routes>",
    "        <Route path='/' element={<Home />} />",
    "      </Routes>",
    "    </div>",
    "  );",
    "};",
    "",
    "export default App;"
  ]

  useEffect(() => {
    const typeInterval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= codeLines.length - 1) {
          clearInterval(typeInterval)
          setTimeout(() => {
            setIsComplete(true)
            slideOut()
          }, 1000)
          return prev
        }
        return prev + 1
      })
    }, 150) // Slightly faster for better UX

    return () => clearInterval(typeInterval)
  }, [])

  const slideOut = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete()
      }
    })

    // Slide all 4 pieces upward simultaneously
    tl.to([piece1Ref.current, piece2Ref.current, piece3Ref.current, piece4Ref.current], {
      y: "-100vh",
      duration: 1.2,
      ease: "power2.inOut",
      stagger: 0.1
    })
  }

  const formatCodeLine = (line, index) => {
    if (!line) return <span>&nbsp;</span>

    // Import statements
    if (line.includes('import')) {
      const parts = line.split(' ')
      return (
        <>
          <span className="text-purple-400">import</span>
          <span className="text-gray-300"> </span>
          <span className="text-blue-400">{parts[1]}</span>
          <span className="text-gray-300"> </span>
          <span className="text-purple-400">from</span>
          <span className="text-gray-300"> </span>
          <span className="text-green-400">{line.split("'")[1] ? `'${line.split("'")[1]}'` : ''}</span>
          <span className="text-gray-300">;</span>
        </>
      )
    }

    // Const declarations
    if (line.includes('const')) {
      return (
        <>
          <span className="text-purple-400">const</span>
          <span className="text-gray-300"> </span>
          <span className="text-blue-400">{line.split(' ')[1]}</span>
          <span className="text-gray-300"> = </span>
          {line.includes('useState') ? (
            <>
              <span className="text-yellow-400">useState</span>
              <span className="text-gray-300">(</span>
              <span className="text-orange-400">{line.includes('true') ? 'true' : line.includes('false') ? 'false' : line.includes("'dark'") ? "'dark'" : "''"}</span>
              <span className="text-gray-300">);</span>
            </>
          ) : line.includes('() =>') ? (
            <span className="text-gray-300">{'() => {'}</span>
          ) : (
            <span className="text-gray-300">{line.split('=')[1]}</span>
          )}
        </>
      )
    }

    // UseEffect
    if (line.includes('useEffect')) {
      return (
        <>
          <span className="text-yellow-400">useEffect</span>
          <span className="text-gray-300">(</span>
          <span className="text-gray-300">() =&gt; {'{'}</span>
        </>
      )
    }

    // Return statements
    if (line.includes('return')) {
      return (
        <>
          <span className="text-purple-400">return</span>
          <span className="text-gray-300"> (</span>
        </>
      )
    }

    // Export statements
    if (line.includes('export')) {
      return (
        <>
          <span className="text-purple-400">export</span>
          <span className="text-gray-300"> </span>
          <span className="text-purple-400">default</span>
          <span className="text-gray-300"> </span>
          <span className="text-blue-400">App</span>
          <span className="text-gray-300">;</span>
        </>
      )
    }

    // Comments
    if (line.includes('//')) {
      return <span className="text-gray-500">{line}</span>
    }

    // JSX elements
    if (line.includes('<') && line.includes('>')) {
      return <span className="text-red-400">{line}</span>
    }

    // Function calls and methods
    if (line.includes('new ') || line.includes('requestAnimationFrame') || line.includes('setLoading')) {
      return <span className="text-yellow-400">{line}</span>
    }

    // Default styling
    return <span className="text-gray-300">{line}</span>
  }

  return (
    <div ref={loaderRef} className="fixed inset-0 z-50 overflow-hidden">
      {/* 4 Pieces of the background that slide up */}
      <div
        ref={piece1Ref}
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-gray-900 flex items-center justify-center"
      >
        {/* Content for piece 1 */}
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-gray-700 rounded-t-lg">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-300 font-mono">
                App.js
              </div>
            </div>
            {/* Code preview for this quadrant */}
            <div className="bg-gray-800 p-3 rounded-b-lg">
              <div className="font-mono text-xs text-gray-300">
                {codeLines.slice(0, Math.min(6, currentLine + 1)).map((line, index) => (
                  <div key={index} className={index <= currentLine ? 'opacity-100' : 'opacity-30'}>
                    {line || <span>&nbsp;</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div
        ref={piece2Ref}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-900 flex items-center justify-center"
      >
        {/* Progress section */}
        <div className="text-center">
          <div className="text-4xl mb-4">⚙️</div>
          <div className="text-gray-400 text-sm font-mono mb-2">Building...</div>
          <div className="w-32 bg-gray-700 rounded-full h-2">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${(currentLine / codeLines.length) * 100}%` }}
            />
          </div>
          <div className="text-gray-400 text-xs font-mono mt-2">
            {Math.round((currentLine / codeLines.length) * 100)}%
          </div>
        </div>
      </div>
      
      <div
        ref={piece3Ref}
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-900 flex items-center justify-center"
      >
        {/* Status messages */}
        <div className="text-center px-4">
          {currentLine < 8 && (
            <div className="text-gray-400 text-sm font-mono animate-pulse">
              📦 Loading dependencies...
            </div>
          )}
          {currentLine >= 8 && currentLine < 16 && (
            <div className="text-blue-400 text-sm font-mono animate-pulse">
              ⚙️ Setting up components...
            </div>
          )}
          {currentLine >= 16 && currentLine < 24 && (
            <div className="text-yellow-400 text-sm font-mono animate-pulse">
              🎨 Rendering interface...
            </div>
          )}
          {currentLine >= 24 && !isComplete && (
            <div className="text-green-400 text-sm font-mono animate-pulse">
              ✨ Almost ready...
            </div>
          )}
          {isComplete && (
            <div className="text-green-400 text-sm font-mono">
              🚀 Ready to launch!
            </div>
          )}
        </div>
      </div>
      
      <div
        ref={piece4Ref}
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-900 flex items-center justify-center"
      >
        {/* Logo or branding */}
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Antonio, sans-serif' }}>
            RSN
          </div>
          <div className="text-gray-400 text-sm font-mono">
            Portfolio Loading...
          </div>
        </div>
      </div>

      {/* Remove the separate content div since content is now in each piece */}
    </div>
  )
}

export default CodingLoader