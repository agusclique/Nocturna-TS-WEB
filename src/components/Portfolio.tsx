/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Filter, Calendar, Scissors, Eye, X, Sparkles, User, Info } from 'lucide-react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, ARTISTS } from '../data/mockData';

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  // Filter states
  const [activeStyle, setActiveStyle] = useState<string>('Todos');
  const [activeArtist, setActiveArtist] = useState<string>('Todos');
  const [activeBodyPart, setActiveBodyPart] = useState<string>('Todos');
  const [activeColor, setActiveColor] = useState<string>('Todos');

  // Available unique filter categories
  const styles = ['Todos', 'Blackwork', 'Fineline', 'Geometric', 'Anime', 'Traditional', 'Dark Art'];
  const artists = ['Todos', ...ARTISTS.map(a => a.name)];
  const bodyParts = ['Todos', 'Brazo', 'Pecho', 'Espalda', 'Cuello', 'Mano'];
  const colors = ['Todos', 'Color', 'Black & Grey'];

  // Apply filters logic
  const filteredItems = PORTFOLIO_ITEMS.filter(item => {
    const matchesStyle = activeStyle === 'Todos' || item.style === activeStyle;
    const matchesArtist = activeArtist === 'Todos' || ARTISTS.find(a => a.id === item.artistId)?.name === activeArtist;
    const matchesBodyPart = activeBodyPart === 'Todos' || item.bodyPart === activeBodyPart;
    const matchesColor = activeColor === 'Todos' || item.colorType === activeColor;
    return matchesStyle && matchesArtist && matchesBodyPart && matchesColor;
  });

  const getArtistName = (id: string) => {
    return ARTISTS.find(a => a.id === id)?.name || 'Artista Residente';
  };

  return (
    <div className="w-full bg-zinc-950 text-zinc-100 min-h-screen pt-28 pb-16 px-6 font-sans">
      {/* Title & Introduction */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-semibold block mb-2">Galería de Obras</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">EL PORTAFOLIO</h1>
        <div className="w-12 h-[1px] bg-red-600 mx-auto mt-4 mb-3" />
        <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
          Explora nuestra selecta antología de piezas cicatrizadas y recién hechas. Cada obra es de diseño exclusivo y personalizada a la fisonomía de cada cliente.
        </p>
      </div>

      {/* Filter Toolbar Container */}
      <div className="max-w-7xl mx-auto mb-10 bg-zinc-900 border border-zinc-850 p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-100 mb-4 font-semibold border-b border-zinc-800 pb-2">
          <Filter className="w-4 h-4 text-red-500" />
          Refinar Galería de Obras
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Style Filter */}
          <div>
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5 font-semibold">Estilo de Tatuaje</label>
            <select
              value={activeStyle}
              onChange={(e) => setActiveStyle(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs uppercase tracking-widest focus:outline-none focus:border-red-950"
            >
              {styles.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Artist Filter */}
          <div>
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5 font-semibold">Artista Creador</label>
            <select
              value={activeArtist}
              onChange={(e) => setActiveArtist(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs uppercase tracking-widest focus:outline-none focus:border-red-950"
            >
              {artists.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>

          {/* Body Part Filter */}
          <div>
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5 font-semibold">Zona Corporal</label>
            <select
              value={activeBodyPart}
              onChange={(e) => setActiveBodyPart(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs uppercase tracking-widest focus:outline-none focus:border-red-950"
            >
              {bodyParts.map(bp => <option key={bp} value={bp}>{bp}</option>)}
            </select>
          </div>

          {/* Color Type Filter */}
          <div>
            <label className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-1.5 font-semibold">Paleta de Tinta</label>
            <select
              value={activeColor}
              onChange={(e) => setActiveColor(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 p-2.5 text-xs uppercase tracking-widest focus:outline-none focus:border-red-950"
            >
              {colors.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Clear filters utility */}
        {(activeStyle !== 'Todos' || activeArtist !== 'Todos' || activeBodyPart !== 'Todos' || activeColor !== 'Todos') && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                setActiveStyle('Todos');
                setActiveArtist('Todos');
                setActiveBodyPart('Todos');
                setActiveColor('Todos');
              }}
              className="text-xs text-red-500 hover:text-red-400 uppercase tracking-widest font-semibold cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>

      {/* Masonry-Grid Gallery */}
      <div className="max-w-7xl mx-auto">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-zinc-900 border border-zinc-900 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                </div>

                {/* Info Overlay Panel */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] tracking-widest uppercase bg-red-950/40 border border-red-900/40 text-red-500 px-2.5 py-0.5 font-bold">
                      {item.style}
                    </span>
                    <span className="text-[9px] tracking-widest uppercase bg-zinc-950 text-zinc-400 px-2.5 py-0.5 border border-zinc-800">
                      {item.colorType}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-red-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-zinc-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <User className="w-3.5 h-3.5 text-red-500" />
                      {getArtistName(item.artistId)}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                      <Eye className="w-3.5 h-3.5 text-zinc-600" />
                      Ver Detalles
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-zinc-900/20 border border-zinc-900">
            <Info className="w-10 h-10 mx-auto mb-4 text-zinc-700" />
            <p className="text-zinc-500 uppercase tracking-widest text-xs">No se encontraron piezas con los criterios seleccionados.</p>
          </div>
        )}
      </div>

      {/* Immersive Cinematic Detail Modal Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in overflow-y-auto">
          <div className="bg-zinc-900 border border-zinc-800 max-w-4xl w-full rounded-none relative overflow-hidden my-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-zinc-950 hover:bg-red-950 border border-zinc-850 hover:border-red-900/60 text-zinc-400 hover:text-zinc-100 w-10 h-10 flex items-center justify-center transition z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Photo & Healing Process View */}
              <div className="space-y-4 p-6 bg-zinc-950/40">
                <div className="aspect-[4/5] overflow-hidden border border-zinc-850">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Healed / Healing photos comparison */}
                {selectedItem.healingPhotos && selectedItem.healingPhotos.length > 0 && (
                  <div>
                    <h5 className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Proceso de Curación (Fases):</h5>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedItem.healingPhotos.map((img, idx) => (
                        <div key={idx} className="aspect-square border border-zinc-900 overflow-hidden">
                          <img
                            src={img}
                            alt="Curación"
                            className="w-full h-full object-cover opacity-60 hover:opacity-100 transition"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Editorial Info details column */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] tracking-widest uppercase bg-red-950/40 border border-red-900/40 text-red-500 px-3 py-0.5 font-bold">
                      {selectedItem.style}
                    </span>
                    <span className="text-[9px] tracking-widest uppercase bg-zinc-950 text-zinc-400 px-3 py-0.5 border border-zinc-800">
                      {selectedItem.colorType}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100 mb-4">
                    {selectedItem.title}
                  </h2>

                  <div className="w-8 h-[1px] bg-red-600 mb-6" />

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Tech Specs */}
                  <div className="space-y-3 bg-zinc-950/60 border border-zinc-900 p-4 font-sans">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 uppercase tracking-widest">Artista</span>
                      <span className="text-zinc-100 font-semibold">{getArtistName(selectedItem.artistId)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 uppercase tracking-widest">Zona Corporal</span>
                      <span className="text-zinc-100 font-semibold">{selectedItem.bodyPart}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 uppercase tracking-widest">Tamaño Real</span>
                      <span className="text-zinc-100 font-mono font-semibold">{selectedItem.size}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 uppercase tracking-widest">Año</span>
                      <span className="text-zinc-100 font-semibold">{selectedItem.year}</span>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      // Trigger routing change? We'll let App handle this
                    }}
                    className="text-xs uppercase tracking-widest border border-zinc-800 hover:border-red-900 px-5 py-3 text-zinc-300 hover:text-zinc-100 transition cursor-pointer"
                  >
                    Cerrar Detalle
                  </button>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">
                    Pieza Única
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
