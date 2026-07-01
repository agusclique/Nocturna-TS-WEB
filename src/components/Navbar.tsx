/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'simulator', label: 'Simulador' },
    { id: 'portfolio', label: 'Portafolio' },
    { id: 'artists', label: 'Artistas' },
    { id: 'flashes', label: 'Flashes' },
    { id: 'aftercare', label: 'Cuidado' },
    { id: 'contact', label: 'Contacto' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900 py-4' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img 
            src="/assets/images/nocturna_moon_logo.svg" 
            alt="Nocturna Moon Logo" 
            className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold tracking-[0.25em] text-zinc-100 font-sans uppercase group-hover:text-zinc-300 transition-colors">
            NOCTURNA
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 relative py-1 focus:outline-none cursor-pointer ${
                activeSection === item.id 
                  ? 'text-red-500 font-medium' 
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-red-600" />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNavClick('booking')}
            className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-100 px-5 py-2.5 rounded-none text-xs tracking-widest uppercase hover:bg-red-950/30 hover:border-red-900/60 transition-all duration-500 font-semibold cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-red-500" />
            Reservar Cita
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-zinc-100 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-black/98 backdrop-blur-lg z-50 flex flex-col justify-between p-8 border-t border-zinc-950 animate-fade-in">
          <div className="flex flex-col gap-6 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg tracking-[0.2em] uppercase text-left py-2 border-b border-zinc-950 focus:outline-none ${
                  activeSection === item.id ? 'text-red-500 font-bold' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full flex items-center justify-center gap-2 bg-red-950/30 border border-red-900/60 text-zinc-100 py-4 uppercase text-xs tracking-widest font-semibold"
            >
              <Calendar className="w-4 h-4 text-red-500" />
              Reservar Cita
            </button>
            <p className="text-zinc-600 text-center text-xs tracking-widest">
              NOCTURNA TATTOO STUDIO — 2026
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
