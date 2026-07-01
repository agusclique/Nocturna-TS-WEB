/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, Crop, DollarSign, Bookmark, Lock, HelpCircle } from 'lucide-react';
import { FlashItem } from '../types';
import { FLASH_ITEMS } from '../data/mockData';

interface FlashCollectionProps {
  onBookFlash: (flash: FlashItem) => void;
}

export default function FlashCollection({ onBookFlash }: FlashCollectionProps) {
  return (
    <div className="w-full bg-zinc-950 text-zinc-100 min-h-screen pt-28 pb-16 px-6 font-sans">
      {/* Page Title Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-2">Colección Limitada</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">TATUAJES FLASH</h1>
        <div className="w-12 h-[1px] bg-red-600 mx-auto mt-4 mb-3" />
        <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
          Diseños de autor creados exclusivamente para ser tatuados una sola vez. Explora las piezas disponibles y reserva de inmediato antes de que desaparezcan para siempre.
        </p>
      </div>

      {/* Flashes List Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FLASH_ITEMS.map((flash) => {
          const isSold = flash.availability === 'vendido';
          const isReserved = flash.availability === 'reservado';
          const isAvailable = flash.availability === 'disponible';

          return (
            <div
              key={flash.id}
              className={`bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all duration-500 p-6 flex flex-col justify-between relative overflow-hidden group ${
                isSold ? 'opacity-55' : ''
              }`}
            >
              {/* Limited Edition badge watermark */}
              {flash.isLimited && (
                <div className="absolute top-0 right-0 bg-red-950/40 text-red-500 text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1 border-b border-l border-red-900/40 font-mono">
                  LTD ED
                </div>
              )}

              {/* Central Design Drawing Canvas */}
              <div className="aspect-square bg-zinc-950 border border-zinc-950 group-hover:border-zinc-850/60 transition duration-500 flex items-center justify-center p-6 relative">
                {flash.imageUrl ? (
                  <img
                    src={flash.imageUrl}
                    alt={flash.name}
                    className={`w-4/5 h-4/5 object-contain transition-all duration-700 ease-out ${
                      isSold ? 'opacity-30 grayscale' : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <svg
                    viewBox={flash.viewBox || "0 0 100 100"}
                    className={`w-4/5 h-4/5 transition-all duration-700 ease-out ${
                      isSold ? 'text-zinc-800' : 'text-zinc-300 group-hover:text-red-500 group-hover:scale-105'
                    }`}
                  >
                    <path d={flash.svgPath} fill="currentColor" />
                  </svg>
                )}

                {/* Status Overlay covers */}
                {isSold && (
                  <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.25em] uppercase bg-zinc-950 text-zinc-600 border border-zinc-900 px-4 py-2 font-bold rotate-12">
                      VENDIDO
                    </span>
                  </div>
                )}

                {isReserved && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.25em] uppercase bg-yellow-950/60 text-yellow-500 border border-yellow-900/40 px-4 py-2 font-bold -rotate-12">
                      RESERVADO
                    </span>
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-zinc-100 group-hover:text-red-500 transition-colors duration-300 uppercase">
                      {flash.name}
                    </h3>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase mt-1 block">
                      ID: {flash.id.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Price Tag with glow */}
                  <div className="text-right">
                    <span className="text-sm font-semibold text-zinc-100 font-mono">
                      €{flash.price}
                    </span>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-sans">
                      Estimado
                    </span>
                  </div>
                </div>

                {/* Tech specifications */}
                <div className="grid grid-cols-2 gap-2 bg-zinc-950/60 border border-zinc-950 p-3 text-xs font-sans">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Crop className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span className="truncate">{flash.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span className="truncate">{flash.estimatedTime}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  {isAvailable ? (
                    <button
                      onClick={() => onBookFlash(flash)}
                      className="w-full bg-zinc-100 hover:bg-red-600 text-zinc-950 hover:text-zinc-100 py-3 text-xs tracking-widest uppercase font-bold transition duration-500 rounded-none cursor-pointer"
                    >
                      Reservar Flash
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-zinc-950 text-zinc-600 border border-zinc-900 py-3 text-xs tracking-widest uppercase font-bold cursor-not-allowed"
                    >
                      No Disponible
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Advisory Note */}
      <div className="max-w-xl mx-auto mt-16 bg-zinc-900/40 border border-zinc-900/80 p-5 text-center text-xs text-zinc-500 font-sans leading-relaxed">
        <p className="font-semibold text-zinc-400 uppercase tracking-wider mb-1">Políticas de Exclusividad:</p>
        Los diseños flash son de autoría original e individual de nuestros residentes. Al reservarse, se remueven del catálogo y no se vuelven a replicar bajo ningún concepto para garantizar la absoluta originalidad de tu pieza corporal.
      </div>
    </div>
  );
}
