/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Calendar, Sparkles, Shield, Compass, Feather, ArrowUpRight, 
  ChevronRight, ArrowRight, MessageSquare, Instagram, Heart, MessageCircle
} from 'lucide-react';

// Custom Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import TattooSimulator from './components/TattooSimulator';
import Portfolio from './components/Portfolio';
import Artists from './components/Artists';
import FlashCollection from './components/FlashCollection';
import Aftercare from './components/Aftercare';
import BookingFlow from './components/BookingFlow';
import Contact from './components/Contact';

// Static Assets Paths
const HERO_BG_IMAGE = '/assets/images/nocturna_studio_hero_1782919824687.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [loading, setLoading] = useState<boolean>(true);
  
  // Shared state for booking redirection and auto-fills
  const [preselectedArtistId, setPreselectedArtistId] = useState<string | null>(null);
  const [preselectedFlash, setPreselectedFlash] = useState<any | null>(null);

  useEffect(() => {
    // Elegant loading screen timeout (Luxury branding experience)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleBookWithArtist = (artistId: string) => {
    setPreselectedArtistId(artistId);
    setPreselectedFlash(null);
    setActiveSection('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookWithFlash = (flashItem: any) => {
    setPreselectedFlash(flashItem);
    setPreselectedArtistId(null);
    setActiveSection('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingComplete = () => {
    setActiveSection('home');
    setPreselectedArtistId(null);
    setPreselectedFlash(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-zinc-100 font-sans">
        <div className="relative flex flex-col items-center">
          {/* Glowing loader halo */}
          <div className="absolute w-24 h-24 rounded-full border border-red-950/40 border-t-red-500 animate-spin" />
          <img 
            src="/assets/images/nocturna_moon_logo.svg" 
            alt="Nocturna Moon Logo" 
            className="w-12 h-12 object-contain animate-pulse relative z-10"
            referrerPolicy="no-referrer"
          />
          
          <div className="mt-8 text-center space-y-2">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-zinc-200">NOCTURNA</h2>
            <p className="text-[9px] text-zinc-600 tracking-[0.25em] uppercase">Estudio de Tatuajes de Autor</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-950 selection:text-red-300 relative overflow-x-hidden">
      {/* Luxury Trail Cursor */}
      <CursorEffect />

      {/* Persistent Navigation Bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Container State Switch */}
      <main className="min-h-[80vh]">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            {/* FULLSCREEN HERO */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              {/* Background Cover Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={HERO_BG_IMAGE} 
                  alt="Nocturna Studio" 
                  className="w-full h-full object-cover scale-105 filter brightness-[0.35] contrast-[1.1]"
                  referrerPolicy="no-referrer"
                />
                {/* Immersive radial and linear gradients for luxury dark feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />
              </div>

              {/* Central Content Call Lockup */}
              <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
                <span className="text-red-500 text-xs md:text-sm tracking-[0.4em] uppercase font-bold block animate-fade-in-up">
                  SANTUARIO DE ARTE CORPORAL
                </span>
                
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-100 font-sans uppercase max-w-4xl mx-auto leading-tight md:leading-none">
                  Cada tatuaje comienza mucho antes de la aguja.
                </h1>

                <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed">
                  Creamos piezas de autor atemporales, diseñadas a medida para interactuar con tu anatomía y contar una historia indeleble.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => setActiveSection('simulator')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-zinc-100 px-8 py-4 text-xs tracking-widest uppercase font-bold transition duration-300 cursor-pointer shadow-lg shadow-red-950/40"
                  >
                    <Sparkles className="w-4 h-4 text-zinc-100" />
                    Probar el Simulador
                  </button>
                  <button
                    onClick={() => setActiveSection('booking')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-100 px-8 py-4 text-xs tracking-widest uppercase font-bold transition duration-300 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-red-500" />
                    Reservar Cita
                  </button>
                </div>
              </div>

              {/* Scrolling Indicator */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
                <span className="text-[9px] tracking-[0.25em] uppercase font-semibold">Deslizar</span>
                <div className="w-[1px] h-12 bg-red-600/60 animate-pulse" />
              </div>
            </section>

            {/* EDITORIAL SECTION 1: "EL TEMPLO Y LA FILOSOFÍA" */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block">La Filosofía Nocturna</span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 uppercase leading-snug">
                    UN ESTÁNDAR DE EXCLUSIVIDAD SIN CONCESIONES
                  </h2>
                  <div className="w-12 h-[1px] bg-red-600" />
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    En Nocturna Tattoo Studio no reproducimos catálogos ni copiamos plantillas ajenas. Cada pieza es el fruto de un diálogo profundo entre el artista y el lienzo corporal.
                  </p>
                  
                  {/* Luxury attributes */}
                  <div className="space-y-4 pt-4 font-sans text-xs">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-200 block font-semibold uppercase tracking-wide">Nivel Clínico Certificado</strong>
                        <span className="text-zinc-500">Cabinas privadas esterilizadas con autoclave médico y barreras estériles estrictas.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Feather className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-200 block font-semibold uppercase tracking-wide">Tinta Orgánica Vegana</strong>
                        <span className="text-zinc-500">Pigmentos premium no acrílicos, 100% bio-compatibles y de máxima duración cristalina.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Compass className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-zinc-200 block font-semibold uppercase tracking-wide">Mapeo Anatómico</strong>
                        <span className="text-zinc-500">Adaptamos las líneas según el flujo muscular para que la pieza cobre vida al moverte.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Aesthetic Showcase photo banner */}
                <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] overflow-hidden border border-zinc-900">
                      <img 
                        src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop" 
                        alt="Tinta y aguja" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="bg-zinc-900 border border-zinc-900 p-6 space-y-2">
                      <span className="text-red-500 text-[10px] tracking-wider uppercase font-bold">Concepto</span>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-200">EXPRESIÓN DE IDENTIDAD</h4>
                      <p className="text-[11px] text-zinc-500">Un legado permanente grabado sobre tu propia historia.</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="bg-zinc-900 border border-zinc-900 p-6 space-y-2">
                      <span className="text-red-500 text-[10px] tracking-wider uppercase font-bold">Artesanía</span>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-200">SÍMBOLOS INDELEBLES</h4>
                      <p className="text-[11px] text-zinc-500">Trazo por trazo, cuidando los micro detalles técnicos.</p>
                    </div>
                    <div className="aspect-[3/4] overflow-hidden border border-zinc-900">
                      <img 
                        src="https://images.unsplash.com/photo-1542382257-201b7f682e40?q=80&w=600&auto=format&fit=crop" 
                        alt="Tatuador profesional" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE SIMULATOR CTA BANNER SECTION */}
            <section className="bg-zinc-900/60 border-y border-zinc-900/80 py-24 px-6">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block">Prueba Aumentada</span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 uppercase">
                    EL ARTE DE LA SIMULACIÓN
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    ¿Te preocupa cómo lucirá un diseño en tu antebrazo, hombro o cuello? Nuestro **Simulador de Tatuajes Interactivo** te permite proyectar de inmediato nuestros diseños de autor o tus propios bocetos sobre tu piel de manera ultra-realista.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-xs font-sans text-zinc-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Filtros de iluminación de piel
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Mezcla de contraste y sombras
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Escalado y rotación libre
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      Composiciones multi-capa
                    </li>
                  </ul>
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveSection('simulator')}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-zinc-100 px-6 py-3.5 text-xs tracking-widest uppercase font-bold transition shadow-lg shadow-red-950/25 cursor-pointer"
                    >
                      Abrir Simulador <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Simulated workspace showcase mock */}
                <div className="bg-black border border-zinc-850 p-4 aspect-[4/3] flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                  
                  <div className="flex justify-between items-center relative z-10 border-b border-zinc-900 pb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">NOCTURNA ENGINE v2.4</span>
                    <span className="text-[9px] bg-red-950/50 border border-red-900/40 text-red-500 px-2 py-0.5 font-bold">LIVE PREVIEW</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative my-4">
                    {/* Mock forearm */}
                    <img 
                      src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500&auto=format&fit=crop" 
                      alt="Antebrazo" 
                      className="max-h-52 opacity-80 rounded-none border border-zinc-900"
                      referrerPolicy="no-referrer"
                    />
                    {/* Mock overlapping glowing tattoo vector */}
                    <div className="absolute w-28 h-28 mix-blend-multiply opacity-85 rotate-12 group-hover:scale-105 group-hover:rotate-6 transition duration-700">
                      <svg viewBox="0 0 100 150" className="w-full h-full text-zinc-950">
                        <path d="M 50,10 L 40,30 L 48,30 L 48,90 L 40,95 L 40,100 L 48,100 L 48,130 L 50,140 L 52,130 L 52,100 L 60,100 L 60,95 L 52,90 L 52,30 L 60,30 Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] font-sans text-zinc-500 border-t border-zinc-900 pt-2 relative z-10">
                    <span>Fusión de Piel: Multiplicar</span>
                    <span>Opacidad: 85%</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'simulator' && <TattooSimulator />}

        {activeSection === 'portfolio' && <Portfolio />}

        {activeSection === 'artists' && (
          <Artists onBookArtist={handleBookWithArtist} />
        )}

        {activeSection === 'flashes' && (
          <FlashCollection onBookFlash={handleBookWithFlash} />
        )}

        {activeSection === 'aftercare' && <Aftercare />}

        {activeSection === 'booking' && (
          <BookingFlow 
            preselectedArtistId={preselectedArtistId}
            preselectedFlash={preselectedFlash}
            onBookingComplete={handleBookingComplete}
          />
        )}

        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Persistent Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* FLOATING ACTIONS AT THE BOTTOM LEFT */}
      <div className="fixed bottom-6 left-6 z-30 flex items-center gap-3">
        {/* WhatsApp Button (Present in every tab) */}
        <a
          href="https://wa.me/5491127872898"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/30 text-white p-4 rounded-none shadow-2xl flex items-center justify-center gap-2 group transition duration-300 hover:-translate-y-1 cursor-pointer"
          title="Chatear por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs tracking-widest font-bold uppercase max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        {/* Booking Button (Present except in booking tab) */}
        {activeSection !== 'booking' && (
          <button
            onClick={() => {
              setPreselectedArtistId(null);
              setPreselectedFlash(null);
              setActiveSection('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-red-600 hover:bg-red-700 border border-red-500/30 text-zinc-100 p-4 rounded-none shadow-2xl flex items-center justify-center gap-2 group transition duration-300 hover:-translate-y-1 cursor-pointer"
            title="Agendar Cita Directa"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs tracking-widest font-bold uppercase max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap">
              Agendar Cita
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
