import React from 'react';

function RadialGradient() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* SVG for noise filter definition */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id="noiseFilter">
          {/* feTurbulence generates the noise pattern */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
            result="noise" 
          />
          {/* feColorMatrix adjusts the alpha (opacity) of the noise, making it subtle */}
          <feColorMatrix 
            type="matrix" 
            values="0 0 0 0 0, 
                    0 0 0 0 0, 
                    0 0 0 0 0, 
                    0 0 0 0.2 0" 
          />
        </filter>
      </svg>

      {/* Background element with radial gradient and noise filter */}
      <div
        className="absolute inset-0 z-0"
        style={{
          // Changed inner color to a brighter blue/purple for better visibility
          // Adjusted the black stop to 65% for a slightly larger inner gradient
          background: 'radial-gradient(circle at center, rgba(80, 0, 150, 0.9) 0%, rgba(0, 0, 0, 1) 65%)',
          filter: 'url(#noiseFilter)',
        }}
      ></div>

      {/* Content for the page (example) */}
      <div className="relative z-10 p-8 text-center bg-gray-900 bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Page</h1>
        <p className="text-xl">This is a beautiful background with a radial gradient and noise effect.</p>
      </div>
    </div>
  );
}

export default RadialGradient;