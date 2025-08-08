import React from 'react';
import { X, Instagram, Github } from 'lucide-react';
import TheseColors from '../ui/Colors';
export default function Footer() {
  return (
    <footer className="mt-[-140px] w-full bg-green-600 py-8 text-foreground" style={{backgroundColor:TheseColors.green}}>
      <div className="container mx-auto px-4">
        <div className="bg-lime-green p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-dark-background">
            {/* Email Section */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">Email :</span>
              <a href="mailto:designer@example.com" className="text-lg font-semibold underline-offset-4 hover:underline">
                rohannegi689@gmail.com
              </a>
            </div>

            {/* Call Today Section */}
            <div className="flex flex-col items-start md:items-center">
              <span className="text-sm font-medium">Call Today :</span>
              <a href="tel:+15551234567" className="text-lg font-semibold underline-offset-4 hover:underline">
                +91 9354690290
              </a>
            </div>

            {/* Social Section */}
            <div className="flex flex-col items-start md:items-end">
              <span className="text-sm font-medium">Social :</span>
              <div className="flex space-x-4 mt-2">
                <a href="#" aria-label="X (Twitter)">
                  <X className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Behance">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Dribbble">
                  {/* <Dribbble className="h-6 w-6" /> */}
                </a>
              </div>
            </div>
          </div>

          <hr className="my-8 border-t border-dark-background" />

          <div className="flex flex-col md:flex-row items-center justify-between text-dark-background text-sm">
            {/* Copyright */}
            <p className="mb-4 md:mb-0">
              © Copyright 2025. All Rights Reserved by{' '}
              <a href="#" className="underline underline-offset-4 hover:text-gray-700">
                oldshen
              </a>
            </p>

            {/* Created By */}
            <div className="flex items-center space-x-2">
              <span>Created by</span>
              <img
                src="/placeholder.svg"
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
  );
}
