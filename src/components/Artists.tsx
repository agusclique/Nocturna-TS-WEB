/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Instagram, Star, Award, Clock } from 'lucide-react';
import { Artist } from '../types';
import { ARTISTS } from '../data/mockData';

interface ArtistsProps {
  onBookArtist: (artistId: string) => void;
}

export default function Artists({ onBookArtist }: ArtistsProps) {
  return (
    <div className="w-full bg-zinc-950 text-zinc-100 min-h-screen pt-28 pb-16 px-6 font-sans">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-2">Maestros de la Tinta</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">NUESTROS ARTISTAS</h1>
        <div className="w-12 h-[1px] bg-red-600 mx-auto mt-4 mb-3" />
        <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
          Residentes galardonados y especialistas dedicados a la excelencia corporal. Encuentra al creador ideal para dar forma eterna a tus ideas.
        </p>
      </div>

      {/* Artists grid */}
      <div className="max-w-7xl mx-auto space-y-16">
        {ARTISTS.map((artist, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={artist.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-zinc-900 border border-zinc-900 p-8 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Artist Portrait */}
              <div className="w-full lg:w-2/5 aspect-square relative overflow-hidden bg-black border border-zinc-850">
                <img
                  src={artist.portrait}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase bg-red-600 text-zinc-100 px-3 py-1 font-bold">
                    {artist.role}
                  </span>
                </div>
              </div>

              {/* Artist Details */}
              <div className="w-full lg:w-3/5 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                      {artist.name}
                    </h2>
                    <a
                      href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-400 uppercase tracking-widest mt-1 font-semibold"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      {artist.instagram}
                    </a>
                  </div>

                  <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-850 px-3 py-1.5 text-xs text-zinc-400 font-mono">
                    <Star className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    <span>Resident Pro</span>
                  </div>
                </div>

                <div className="w-8 h-[1px] bg-red-600" />

                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {artist.bio}
                </p>

                {/* Specialty Pills */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] uppercase tracking-widest bg-zinc-950 text-zinc-300 border border-zinc-800 px-3 py-1 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Available Dates Panel */}
                <div className="bg-zinc-950/60 border border-zinc-850/50 p-4 font-sans space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span>Próximas Fechas Disponibles:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {artist.availableDates.map((date) => (
                      <span
                        key={date}
                        className="text-xs bg-zinc-900 border border-zinc-850 text-zinc-300 px-3 py-1 font-medium"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    onClick={() => onBookArtist(artist.id)}
                    className="bg-zinc-100 hover:bg-red-600 text-zinc-950 hover:text-zinc-100 border border-zinc-200 hover:border-red-600 px-6 py-3.5 text-xs tracking-widest uppercase font-bold transition duration-500 rounded-none cursor-pointer"
                  >
                    Solicitar Cita con {artist.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
