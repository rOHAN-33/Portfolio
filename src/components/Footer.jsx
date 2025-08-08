import React from 'react';
import { X, Instagram, Github } from 'lucide-react';

// Mocking TheseColors as it's an external import not available in this environment.
// In your actual project, ensure 'TheseColors' is correctly imported and accessible.
const TheseColors = {
  green: '#34D399', // A vibrant green that suits the theme
  limeGreen: '#D9F99D', // A lighter lime green for the inner box
  darkBackground: '#1A202C' // A dark background color for text on light green
};

export default function Footer() {
  return (
    <>
      {/* Tailwind CSS CDN for convenience */}
      <script src="https://cdn.tailwindcss.com"></script>
      <footer 
        // Responsive top margin: small margin on mobile, original negative margin on medium+ screens
        className="mt-8 md:mt-[-140px] w-full py-8 text-white" 
        style={{backgroundColor:TheseColors.green}} // Use the imported color for consistency
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive horizontal padding */}
          <div className="p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{color:TheseColors.darkBackground}}>
              {/* Email Section */}
              <div className="flex flex-col items-center md:items-start"> {/* Centered on mobile, left-aligned on desktop */}
                <span className="text-sm font-medium">Email :</span>
                <a href="mailto:rohannegi689@gmail.com" className="text-lg font-semibold underline-offset-4 hover:underline">
                  rohannegi689@gmail.com
                </a>
              </div>

              {/* Call Today Section */}
              <div className="flex flex-col items-center"> {/* Always centered */}
                <span className="text-sm font-medium">Call Today :</span>
                <a href="tel:+919354690290" className="text-lg font-semibold underline-offset-4 hover:underline">
                  +91 9354690290
                </a>
              </div>

              {/* Social Section */}
              <div className="flex flex-col items-center md:items-end"> {/* Centered on mobile, right-aligned on desktop */}
                <span className="text-sm font-medium">Social :</span>
                <div className="flex space-x-4 mt-2">
                  <a href="#" aria-label="X (Twitter)">
                    <X className="h-6 w-6" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" aria-label="Github"> {/* Changed Behance to Github based on icon */}
                    <Github className="h-6 w-6" />
                  </a>
                  {/* If you have Dribbble, ensure you import it from lucide-react */}
                  {/* <a href="#" aria-label="Dribbble">
                    <Dribbble className="h-6 w-6" />
                  </a> */}
                </div>
              </div>
            </div>

            <hr className="my-8 border-t" style={{borderColor:TheseColors.darkBackground}} /> {/* Uses dark background color for border */}

            <div className="flex flex-col md:flex-row items-center justify-between text-sm" style={{color:TheseColors.darkBackground}}>
              {/* Copyright */}
              <p className="mb-4 md:mb-0 text-center md:text-left"> {/* Centered on mobile, left-aligned on desktop */}
                © Copyright 2025. All Rights Reserved by{' '}
                <a href="#" className="underline underline-offset-4 hover:text-gray-700">
                  oldshen
                </a>
              </p>

              {/* Created By */}
              <div className="flex items-center space-x-2 mt-4 md:mt-0"> {/* Added top margin on mobile, none on desktop */}
                <span>Created by</span>
                <img
                  src="https://placehold.co/32x32/123456/FFFFFF/png?text=Logo" // Generic placeholder for Duncan Shen's logo
                  width={32}
                  height={32}
                  alt="Duncan Shen's logo"
                  className="rounded-full object-cover"
                />
                <a href="#" className="underline underline-offset-4 hover:text-gray-700">
                  Duncan Shen
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}