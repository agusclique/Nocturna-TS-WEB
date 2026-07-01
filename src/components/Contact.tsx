/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send, Check, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="w-full bg-zinc-950 text-zinc-100 min-h-screen pt-28 pb-16 px-6 font-sans">
      
      {/* Page Title */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-2">Entra en Contacto</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">CONTACTO & UBICACIÓN</h1>
        <div className="w-12 h-[1px] bg-red-600 mx-auto mt-4 mb-3" />
        <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
          Ubicado en la mítica zona vieja, nuestro estudio ofrece un entorno aséptico de lujo, privacidad y confort absoluto. Agenda tu cita presencial hoy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact details and Hours (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900 border border-zinc-900 p-8 space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-100 border-b border-zinc-800 pb-2">
              Información de Enlace
            </h3>

            <div className="space-y-4 text-sm font-sans">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-zinc-200">Dirección Física</span>
                  <span className="text-zinc-400">Av. del Abismo 666, Barrio Gótico, Barcelona</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-zinc-200">WhatsApp Oficial</span>
                  <span className="text-zinc-400">+34 600 000 000</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-zinc-200">Correo Electrónico</span>
                  <span className="text-zinc-400">info@nocturnatattoo.com</span>
                </div>
              </div>
            </div>

            {/* Hours panel */}
            <div className="pt-6 border-t border-zinc-850">
              <h4 className="text-xs font-bold tracking-widest uppercase text-zinc-300 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500" />
                Horarios del Templo
              </h4>
              <div className="space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                  <span>Lunes</span>
                  <span className="text-red-500 font-semibold uppercase">Cerrado</span>
                </div>
                <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                  <span>Martes — Viernes</span>
                  <span>11:00 hs — 20:00 hs</span>
                </div>
                <div className="flex justify-between border-b border-zinc-850/50 pb-1">
                  <span>Sábado</span>
                  <span>11:00 hs — 19:00 hs</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-red-500 font-semibold uppercase">Cerrado</span>
                </div>
              </div>
              <p className="text-[10px] text-zinc-500 font-sans italic mt-3 text-center">Atención exclusiva con cita previa para garantizar la privacidad.</p>
            </div>

            {/* Direct Whatsapp chat CTA */}
            <div className="pt-2">
              <a 
                href="https://wa.me/34600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-red-950/20 hover:bg-red-950/40 border border-red-900/30 hover:border-red-900/60 text-red-400 py-3.5 text-xs tracking-widest uppercase font-bold transition"
              >
                <MessageSquare className="w-4 h-4 text-red-500" />
                Chatear por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Simulated Interactive Map and direct form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Simulated Dark Matte Mapbox map widget */}
          <div className="bg-zinc-900 border border-zinc-900 p-4 aspect-video rounded-none relative flex flex-col justify-between overflow-hidden shadow-xl">
            {/* Dark abstract vector lines mimicking streets */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle, #fff 10%, transparent 10%), 
                                linear-gradient(90deg, #fff 1px, transparent 1px), 
                                linear-gradient(0deg, #fff 1px, transparent 1px)`,
              backgroundSize: '20px 20px, 80px 80px, 80px 80px'
            }} />

            {/* Map pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/35 blur-md rounded-full animate-ping" />
                <MapPin className="relative w-8 h-8 text-red-500 drop-shadow-md" />
              </div>
              <span className="bg-zinc-950 border border-zinc-800 text-zinc-100 font-bold font-sans text-[9px] tracking-widest px-2.5 py-1 mt-1.5 uppercase shadow-lg">
                Nocturna Studio
              </span>
            </div>

            {/* Map headers and coordinates */}
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-[9px] bg-zinc-950 border border-zinc-850 text-zinc-400 px-2 py-0.5 font-mono">
                BARCELONA, ES
              </span>
              <span className="text-[9px] bg-zinc-950 border border-zinc-850 text-zinc-400 px-2 py-0.5 font-mono">
                LAT: 41.3851° N | LON: 2.1734° E
              </span>
            </div>

            {/* Map bottom bar */}
            <div className="relative z-10 flex justify-between items-end">
              <span className="text-[9px] text-zinc-500 font-sans tracking-wide">
                *Entorno aséptico de nivel clínico certificado por sanidad.
              </span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-950 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-zinc-100 px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase transition"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

          {/* Direct messaging form */}
          <div className="bg-zinc-900 border border-zinc-900 p-8 space-y-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-100 border-b border-zinc-800 pb-2">
              Mensajería Directa
            </h3>

            {isSent ? (
              <div className="bg-zinc-950 border border-zinc-850 p-6 text-center space-y-3 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-red-950/40 border border-red-900/60 flex items-center justify-center mx-auto text-red-500">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-200 font-bold">¡Mensaje Enviado!</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Te responderemos a la brevedad por correo electrónico.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-zinc-500 block font-semibold">Nombre</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full bg-zinc-950 border border-zinc-850 text-zinc-300 p-2.5 text-xs focus:outline-none focus:border-red-950"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-zinc-500 block font-semibold">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@correo.com"
                      className="w-full bg-zinc-950 border border-zinc-850 text-zinc-300 p-2.5 text-xs focus:outline-none focus:border-red-950"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-zinc-500 block font-semibold">Mensaje o Consulta</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu consulta o idea aquí..."
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-850 text-zinc-300 p-3 text-xs focus:outline-none focus:border-red-950 leading-relaxed"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-zinc-100 hover:bg-red-600 text-zinc-950 hover:text-zinc-100 px-6 py-3 text-xs tracking-widest uppercase font-bold transition duration-300 cursor-pointer"
                  >
                    Enviar Mensaje <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
