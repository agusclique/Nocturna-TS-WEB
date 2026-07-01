/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-950 text-zinc-400 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Branding Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/images/nocturna_moon_logo.svg" 
              alt="Nocturna Moon Logo" 
              className="w-7 h-7 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg font-bold tracking-[0.3em] text-zinc-100 uppercase">
              NOCTURNA
            </span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed font-sans">
            Cada trazo cuenta una historia eterna. Un santuario de tinta de lujo y arte corporal exclusivo en el corazón de la ciudad.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-none bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-950 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="mailto:info@nocturnatattoo.com" 
              className="w-10 h-10 rounded-none bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-950 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation links Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-zinc-100 tracking-widest uppercase">Estudio</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-red-500 transition-colors">Inicio</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('simulator')} className="hover:text-red-500 transition-colors">Simulador de Tatuajes</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('portfolio')} className="hover:text-red-500 transition-colors">Portafolio</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('artists')} className="hover:text-red-500 transition-colors">Artistas Residentes</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('flashes')} className="hover:text-red-500 transition-colors">Colección de Flashes</button>
            </li>
          </ul>
        </div>

        {/* Aftercare Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-zinc-100 tracking-widest uppercase">Cuidado Posterior</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button onClick={() => handleNavClick('aftercare')} className="hover:text-red-500 transition-colors">Guía de Sanación</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('booking')} className="hover:text-red-500 transition-colors">Solicitar Cotización</button>
            </li>
            <li>
              <span className="text-zinc-500">Exclusividad garantizada</span>
            </li>
            <li>
              <span className="text-zinc-500">Materiales 100% bio-seguros</span>
            </li>
          </ul>
        </div>

        {/* Direct Contact Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-zinc-100 tracking-widest uppercase">Ubicación & Horarios</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Av. del Abismo 666, Barrio Gótico</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <span>+34 600 000 000</span>
            </li>
            <li className="text-zinc-500 pt-2 border-t border-zinc-900/50">
              <p className="text-zinc-200">Martes a Sábado</p>
              <p>11:00 hs — 20:00 hs</p>
              <p className="mt-1 text-red-500/80 font-medium">Solo con cita previa</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Trademark bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 tracking-widest uppercase">
        <p>© 2026 NOCTURNA TATTOO STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
        <p>HECHO CON EXCLUSIVIDAD Y ARTESANÍA</p>
      </div>
    </footer>
  );
}
