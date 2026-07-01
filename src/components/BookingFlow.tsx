/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { 
  Check, ChevronRight, ChevronLeft, User, Scissors, Image as ImageIcon, 
  FileText, Calendar, Send, Sparkles, AlertCircle, ShoppingBag 
} from 'lucide-react';
import { Artist, FlashItem } from '../types';
import { ARTISTS } from '../data/mockData';

interface BookingFlowProps {
  preselectedArtistId: string | null;
  preselectedFlash: FlashItem | null;
  onBookingComplete: () => void;
}

export default function BookingFlow({ 
  preselectedArtistId, 
  preselectedFlash, 
  onBookingComplete 
}: BookingFlowProps) {
  const [step, setStep] = useState(1);
  
  // Form State
  const [selectedArtist, setSelectedArtist] = useState<string>(preselectedArtistId || '');
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('');
  const [inspiration, setInspiration] = useState<File | null>(null);
  const [inspirationUrl, setInspirationUrl] = useState<string>('');
  const [ideaDescription, setIdeaDescription] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  // Sync props to state if they change
  useEffect(() => {
    if (preselectedArtistId) {
      setSelectedArtist(preselectedArtistId);
    }
  }, [preselectedArtistId]);

  useEffect(() => {
    if (preselectedFlash) {
      // Flashes belong to artists or are custom
      setSelectedBodyPart('Brazo'); // Default suggestion
      setIdeaDescription(`Reserva de Tatuaje Flash exclusivo: "${preselectedFlash.name}" (ID: ${preselectedFlash.id}). Estimado €${preselectedFlash.price}.`);
    }
  }, [preselectedFlash]);

  const bodyParts = [
    { id: 'brazo', label: 'Brazo / Antebrazo' },
    { id: 'pecho', label: 'Pecho / Clavícula' },
    { id: 'espalda', label: 'Espalda Completa' },
    { id: 'mano', label: 'Mano / Dedos' },
    { id: 'pierna', label: 'Pierna / Pantorrilla' },
    { id: 'cuello', label: 'Cuello / Detrás de Oreja' },
    { id: 'otros', label: 'Otros / Por definir' },
  ];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInspiration(file);
      const url = URL.createObjectURL(file);
      setInspirationUrl(url);
    }
  };

  const getArtistName = (id: string) => {
    return ARTISTS.find(a => a.id === id)?.name || 'Cualquier Artista';
  };

  const nextStep = () => {
    if (step === 1 && !selectedArtist) {
      alert('Por favor selecciona un artista para continuar.');
      return;
    }
    if (step === 2 && !selectedBodyPart) {
      alert('Por favor selecciona la zona corporal.');
      return;
    }
    if (step === 4 && ideaDescription.length < 10) {
      alert('Por favor describe tu idea con un poco más de detalle (mínimo 10 caracteres).');
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !clientName || !clientEmail || !clientPhone) {
      alert('Por favor completa todos los datos obligatorios y la fecha preferida.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call and generate a luxury booking code
    setTimeout(() => {
      const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
      setBookingCode(`NCT-${randomHex}`);
      setIsSubmitting(false);
      setStep(6);
    }, 1500);
  };

  return (
    <div className="w-full bg-zinc-950 text-zinc-100 min-h-screen pt-28 pb-16 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Progress Timeline Header */}
        {step < 6 && (
          <div className="mb-12">
            <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-2 text-center">Planificador Oficial</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-zinc-100 uppercase">SOLICITAR CITA</h1>
            <div className="w-12 h-[1px] bg-red-600 mx-auto mt-3 mb-8" />
            
            {/* Step indicators */}
            <div className="flex items-center justify-between relative mt-6 max-w-lg mx-auto">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-zinc-900 z-0" />
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`relative z-10 w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono transition-all duration-500 ${
                    step >= s 
                      ? 'bg-zinc-950 border-red-500 text-red-500' 
                      : 'bg-zinc-950 border-zinc-900 text-zinc-600'
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4 text-red-500" /> : s}
                </div>
              ))}
            </div>
            
            {/* Stage title label */}
            <p className="text-zinc-500 text-center text-xs tracking-widest uppercase mt-4">
              {step === 1 && 'Paso 1: Elección de Artista'}
              {step === 2 && 'Paso 2: Zona Corporal'}
              {step === 3 && 'Paso 3: Imagen de Inspiración'}
              {step === 4 && 'Paso 4: Descripción de tu Idea'}
              {step === 5 && 'Paso 5: Fecha de Preferencia & Datos'}
            </p>
          </div>
        )}

        {/* Step 1: Artist selection */}
        {step === 1 && (
          <div className="bg-zinc-900 border border-zinc-900 p-8 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-wider text-zinc-100 uppercase">1. Elige tu Artista</h2>
              <p className="text-xs text-zinc-500">Selecciona al artista residente ideal para modelar tu proyecto de tatuaje.</p>
            </div>

            {preselectedFlash && (
              <div className="bg-zinc-950 border border-zinc-850 p-4 flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-red-500 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-zinc-300 block">Flash Pre-seleccionado:</span>
                  <span className="text-zinc-500">"{preselectedFlash.name}" — €{preselectedFlash.price}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Optional: No preference */}
              <button
                type="button"
                onClick={() => setSelectedArtist('any')}
                className={`flex items-center gap-4 bg-zinc-950 p-4 border text-left transition ${
                  selectedArtist === 'any' ? 'border-red-500' : 'border-zinc-850 hover:border-zinc-500'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-zinc-200">Cualquier Artista</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Asignado por el estudio</p>
                </div>
              </button>

              {ARTISTS.map((artist) => (
                <button
                  key={artist.id}
                  type="button"
                  onClick={() => setSelectedArtist(artist.id)}
                  className={`flex items-center gap-4 bg-zinc-950 p-4 border text-left transition ${
                    selectedArtist === artist.id ? 'border-red-500' : 'border-zinc-850 hover:border-zinc-500'
                  }`}
                >
                  <img
                    src={artist.portrait}
                    alt={artist.name}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-zinc-200">{artist.name}</h3>
                    <p className="text-[10px] text-red-500 uppercase tracking-widest mt-0.5">{artist.specialties[0]}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-zinc-800">
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-zinc-100 hover:bg-red-600 text-zinc-950 hover:text-zinc-100 px-6 py-3 text-xs tracking-widest uppercase font-bold transition duration-300"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Body parts mapping */}
        {step === 2 && (
          <div className="bg-zinc-900 border border-zinc-900 p-8 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-wider text-zinc-100 uppercase">2. Zona del Cuerpo</h2>
              <p className="text-xs text-zinc-500">¿Dónde se posicionará la pieza? Esto nos ayuda a estimar dimensiones y complejidad anatómica.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {bodyParts.map((bp) => (
                <button
                  key={bp.id}
                  type="button"
                  onClick={() => setSelectedBodyPart(bp.label)}
                  className={`p-4 bg-zinc-950 border text-center transition ${
                    selectedBodyPart === bp.label ? 'border-red-500 bg-red-950/10' : 'border-zinc-850 hover:border-zinc-500'
                  }`}
                >
                  <span className="text-xs uppercase tracking-widest font-semibold block">{bp.label}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-4 border-t border-zinc-800">
              <button
                onClick={prevStep}
                className="flex items-center gap-1.5 border border-zinc-800 hover:border-zinc-500 px-5 py-3 text-xs tracking-widest uppercase text-zinc-400 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Atrás
              </button>
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-zinc-100 hover:bg-red-600 text-zinc-950 hover:text-zinc-100 px-6 py-3 text-xs tracking-widest uppercase font-bold transition"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Inspiration attachment */}
        {step === 3 && (
          <div className="bg-zinc-900 border border-zinc-900 p-8 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-wider text-zinc-100 uppercase">3. Inspiración y Bocetos</h2>
              <p className="text-xs text-zinc-500">Opcional. Sube bocetos, referencias, paletas o ideas visuales similares para guiar el diseño inicial.</p>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 hover:border-red-950 p-8 bg-zinc-950 cursor-pointer transition relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {inspirationUrl ? (
                <div className="space-y-4 text-center">
                  <img
                    src={inspirationUrl}
                    alt="Inspiración"
                    className="max-h-40 mx-auto border border-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-xs text-red-500 font-mono tracking-wider uppercase">¡Imagen Cargada Exitosamente!</p>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <ImageIcon className="w-10 h-10 mx-auto text-zinc-650" />
                  <div>
                    <span className="text-xs tracking-widest uppercase font-bold text-zinc-300 block mb-1">Cargar Archivo de Referencia</span>
                    <span className="text-[10px] text-zinc-500">Soporta formatos PNG, JPG, GIF de hasta 10MB</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4 border-t border-zinc-800">
              <button
                onClick={prevStep}
                className="flex items-center gap-1.5 border border-zinc-800 hover:border-zinc-500 px-5 py-3 text-xs tracking-widest uppercase text-zinc-400 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Atrás
              </button>
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-zinc-100 hover:bg-red-600 text-zinc-950 hover:text-zinc-100 px-6 py-3 text-xs tracking-widest uppercase font-bold transition"
              >
                Omitir o Continuar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Idea Description */}
        {step === 4 && (
          <div className="bg-zinc-900 border border-zinc-900 p-8 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-wider text-zinc-100 uppercase">4. Describe tu Idea</h2>
              <p className="text-xs text-zinc-500">Menciona tamaño aproximado en cm, colores (color o negro y gris) y el concepto detrás de la pieza.</p>
            </div>

            <div>
              <textarea
                value={ideaDescription}
                onChange={(e) => setIdeaDescription(e.target.value)}
                placeholder="Por favor describe tu diseño aquí..."
                rows={6}
                className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-4 text-sm focus:outline-none focus:border-red-950 font-sans leading-relaxed"
              />
              <span className="text-[10px] text-zinc-500 mt-1 block text-right font-mono uppercase tracking-wider">
                Mínimo 10 caracteres
              </span>
            </div>

            <div className="flex justify-between pt-4 border-t border-zinc-800">
              <button
                onClick={prevStep}
                className="flex items-center gap-1.5 border border-zinc-800 hover:border-zinc-500 px-5 py-3 text-xs tracking-widest uppercase text-zinc-400 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Atrás
              </button>
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-zinc-100 hover:bg-red-600 text-zinc-950 hover:text-zinc-100 px-6 py-3 text-xs tracking-widest uppercase font-bold transition"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Calendar Scheduling and Personal credentials */}
        {step === 5 && (
          <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-900 p-8 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-wider text-zinc-100 uppercase">5. Fecha & Datos Personales</h2>
              <p className="text-xs text-zinc-500">Completa tus datos de contacto y selecciona una fecha tentativa para la cita.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Datepicker */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500 block font-semibold">Fecha Preferida</label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs focus:outline-none focus:border-red-950 font-mono uppercase"
                />
              </div>

              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500 block font-semibold">Nombre Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Valeria Sterling"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs focus:outline-none focus:border-red-950 font-sans"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500 block font-semibold">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs focus:outline-none focus:border-red-950 font-sans"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-zinc-500 block font-semibold">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+34 600 000 000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs focus:outline-none focus:border-red-950 font-mono"
                />
              </div>
            </div>

            {/* Quick summary before submit */}
            <div className="bg-zinc-950 border border-zinc-850 p-4 text-xs space-y-2 font-sans">
              <div className="flex justify-between border-b border-zinc-900 pb-1 text-zinc-400">
                <span className="uppercase">Artista</span>
                <span className="text-zinc-100 font-bold">{getArtistName(selectedArtist)}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1 text-zinc-400">
                <span className="uppercase">Zona Anatómica</span>
                <span className="text-zinc-100 font-bold">{selectedBodyPart}</span>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-zinc-800">
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-1.5 border border-zinc-800 hover:border-zinc-500 px-5 py-3 text-xs tracking-widest uppercase text-zinc-400 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Atrás
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-zinc-100 px-6 py-3 text-xs tracking-widest uppercase font-bold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Procesando...</>
                ) : (
                  <>
                    Confirmar Solicitud <Send className="w-4 h-4 text-zinc-100" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 6: Confirmation final screen */}
        {step === 6 && (
          <div className="bg-zinc-900 border border-zinc-900 p-8 text-center space-y-6 animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />
            <div className="w-16 h-16 rounded-full bg-red-950/40 border border-red-900/60 flex items-center justify-center mx-auto text-red-500">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-red-500 uppercase tracking-[0.25em] font-bold">Solicitud Registrada</span>
              <h2 className="text-2xl font-bold tracking-wider text-zinc-100 uppercase">¡CITA SOLICITADA CON ÉXITO!</h2>
              <div className="w-12 h-[1px] bg-red-600 mx-auto my-3" />
              <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed font-sans">
                Hemos recibido tu solicitud de diseño. Un especialista de Nocturna Tattoo Studio se pondrá en contacto contigo en las próximas 24 horas laborables a través de WhatsApp o correo electrónico para confirmar la hora exacta y cotizar el depósito inicial.
              </p>
            </div>

            {/* Generated ticket printout */}
            <div className="max-w-sm mx-auto bg-zinc-950 border border-zinc-850 p-6 text-left font-mono text-xs space-y-3 relative">
              {/* Fake barcode */}
              <div className="absolute bottom-4 right-4 opacity-15">
                <div className="w-12 h-6 bg-zinc-400 shrink-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px)' }} />
              </div>

              <div className="border-b border-zinc-900 pb-2 mb-2">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Código de Reserva</span>
                <span className="text-zinc-100 font-bold text-sm tracking-wider">{bookingCode}</span>
              </div>

              <div className="space-y-1">
                <p className="text-zinc-500 uppercase tracking-wider">Cliente: <span className="text-zinc-200 font-bold">{clientName}</span></p>
                <p className="text-zinc-500 uppercase tracking-wider">Artista: <span className="text-zinc-200 font-bold">{getArtistName(selectedArtist)}</span></p>
                <p className="text-zinc-500 uppercase tracking-wider">Zona Corporal: <span className="text-zinc-200 font-bold">{selectedBodyPart}</span></p>
                <p className="text-zinc-500 uppercase tracking-wider">Fecha Propuesta: <span className="text-zinc-200 font-bold">{selectedDate}</span></p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onBookingComplete}
                className="bg-zinc-150 hover:bg-zinc-200 text-zinc-950 px-6 py-3.5 text-xs tracking-widest uppercase font-bold transition duration-300 rounded-none cursor-pointer"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
