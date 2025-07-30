import { useState, useEffect, useRef } from "react";

export default function FlipImage() {
  const images = [
    "HI",
    "/hi.png"
  ];
const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(prev => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <><div className="space-y-4">
          {/* <h3 className="text-lg font-semibold text-center">With Rotation</h3> */}
          <div className="relative w-60 h-60 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mx-auto top-[100px] ">
            
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
              !showImage 
                ? 'opacity-100 blur-0 scale-100 rotate-0' 
                : 'opacity-0 blur-md scale-110 rotate-12'
            }`}>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                HI
              </h1>
            </div>

            <img
              src="/hi.png"
              alt="Profile"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                showImage 
                  ? 'opacity-100 blur-0 scale-100 rotate-0' 
                  : 'opacity-0 blur-md scale-90 -rotate-12'
              }`}
            />
          </div>
        </div>
    </>
  );
}
