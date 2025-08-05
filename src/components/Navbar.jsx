import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
   
    { name: "Skills", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Projects", href: "#" }
  ];

  return (
    <div className="pt-6">
      {/* Desktop Navigation */}
      
      <div className="bg-slate-100 h-[60px] w-full max-w-[450px] mx-auto border border-black rounded-full hidden md:block">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center space-x-2">
            <img
    src="./hi.png"
    alt="Logo"
    className="h-8 w-8 rounded-full object-cover"
  />
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button className="bg-gray-700 px-4 py-2 rounded-full text-white hover:bg-gray-800 transition-colors">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="bg-slate-100 h-[60px] w-full max-w-[450px] mx-auto border border-black rounded-full">
          <div className="flex items-center justify-between h-full px-6">
            <div className="text-lg font-semibold text-gray-800">Menu</div>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="w-full max-w-[450px] mx-auto mt-2 bg-slate-100 border border-black rounded-2xl overflow-hidden">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-blue-600 px-6 py-3 text-base font-medium transition-colors hover:bg-gray-200"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-6 pt-2">
                <button className="w-full bg-gray-700 px-4 py-3 rounded-full text-white hover:bg-gray-800 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}