/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TattooDesign } from '../types';

export const TATTOO_DESIGNS: TattooDesign[] = [
  // --- BLACKWORK ---
  {
    id: 'bw-1',
    name: 'Dragón Imperial Celestial',
    category: 'Blackwork',
    svgPath: 'M 50,20 C 35,20 20,35 20,50 C 20,65 30,70 45,75 C 30,85 20,95 20,110 C 20,125 35,135 50,135 C 65,135 80,125 80,110 C 80,95 70,85 55,75 C 70,70 80,65 80,50 C 80,35 65,20 50,20 Z M 50,30 C 58,30 65,37 65,45 C 65,53 58,60 50,60 C 42,60 35,53 35,45 C 35,37 42,30 50,30 Z M 50,95 C 58,95 65,102 65,110 C 65,118 58,125 50,125 C 42,125 35,118 35,110 C 35,102 42,95 50,95 Z M 48,65 L 52,65 L 52,90 L 48,90 Z',
    viewBox: '0 0 100 150',
    description: 'Silueta detallada de dragón con escamas sólidas y sombreado pesado, estilo oriental contemporáneo.',
    artistId: 'art-1'
  },
  {
    id: 'bw-2',
    name: 'Serpiente & Daga Sagrada',
    category: 'Blackwork',
    svgPath: 'M 50,10 L 40,30 L 48,30 L 48,90 L 40,95 L 40,100 L 48,100 L 48,130 L 50,140 L 52,130 L 52,100 L 60,100 L 60,95 L 52,90 L 52,30 L 60,30 Z M 50,30 C 65,35 70,55 50,60 C 30,65 35,85 50,90 C 70,95 65,120 40,125 C 35,115 45,105 50,105 C 55,105 60,110 50,115',
    viewBox: '0 0 100 150',
    description: 'Serpiente enroscada alrededor de una daga ceremonial con detalles en puntillismo y sombras densas.',
    artistId: 'art-1'
  },
  {
    id: 'bw-3',
    name: 'Calavera de Carnero Neotribal',
    category: 'Blackwork',
    svgPath: 'M 50,30 C 35,30 30,45 30,60 C 30,80 45,95 50,110 C 55,95 70,80 70,60 C 70,45 65,30 50,30 Z M 35,45 C 40,40 45,45 50,45 C 55,45 60,40 65,45 C 65,55 60,60 50,60 C 40,60 35,55 35,45 Z M 40,75 C 45,70 50,75 50,75 C 50,75 55,70 60,75 C 58,85 42,85 40,75 Z',
    viewBox: '0 0 100 150',
    description: 'Calavera con cuernos simétricos, líneas sólidas y texturas de puntillismo oscuro.',
    artistId: 'art-1'
  },

  // --- FINELINE ---
  {
    id: 'fl-1',
    name: 'Rosa de Vientos Minimalista',
    category: 'Fineline',
    svgPath: 'M 50,15 L 50,135 M 15,75 L 135,75 M 50,75 L 100,50 M 50,75 L 100,100 M 50,75 L 25,50 M 50,75 L 25,100 M 50,75 C 50,61 61,50 75,50 C 89,50 100,61 100,75 C 100,89 89,100 75,100 C 61,100 50,89 50,75 Z M 50,75 C 50,70 70,75 50,75',
    viewBox: '0 0 150 150',
    description: 'Rosa heráldica con trazos ultra finos, círculos concéntricos de precisión y detalles geométricos sutiles.',
    artistId: 'art-2'
  },
  {
    id: 'fl-2',
    name: 'Mariposa Cósmica',
    category: 'Fineline',
    svgPath: 'M 50,50 C 45,40 25,30 15,40 C 5,50 10,75 40,80 C 45,82 48,88 50,95 C 52,88 55,82 60,80 C 90,75 95,50 85,40 C 75,30 55,40 50,50 Z M 50,55 C 45,65 30,85 20,80 C 10,75 25,110 45,95 C 48,92 50,92 50,95 C 50,92 52,92 55,95 C 75,110 90,75 80,80 C 70,85 55,65 50,55 Z',
    viewBox: '0 0 100 130',
    description: 'Diseño de mariposa con alas que se disuelven en constelaciones estelares, hecho con aguja de una sola punta.',
    artistId: 'art-2'
  },
  {
    id: 'fl-3',
    name: 'Rostro Renacentista Dividido',
    category: 'Fineline',
    svgPath: 'M 40,30 C 45,30 50,35 52,40 C 55,30 65,30 70,35 C 75,40 75,50 70,60 C 65,70 52,85 52,85 C 52,85 39,70 34,60 C 29,50 35,30 40,30 Z M 52,40 L 52,85 M 34,60 C 34,60 42,65 52,65 C 62,65 70,60 70,60',
    viewBox: '0 0 100 120',
    description: 'Línea continua inspirada en la escultura clásica y la estética del cubismo minimalista.',
    artistId: 'art-2'
  },

  // --- ANIME ---
  {
    id: 'an-1',
    name: 'Mirada del Sharingan',
    category: 'Anime',
    svgPath: 'M 10,60 C 35,25 65,25 90,60 C 65,95 35,95 10,60 Z M 50,38 C 38,38 28,48 28,60 C 28,72 38,82 50,82 C 62,82 72,72 72,60 C 72,48 62,38 50,38 Z M 50,50 C 44.5,50 40,54.5 40,60 C 40,65.5 44.5,70 50,70 C 55.5,70 60,65.5 60,60 C 60,54.5 55.5,50 50,50 Z M 35,60 C 35,57 37,55 40,55 M 65,60 C 65,63 63,65 60,65 M 50,75 C 53,75 55,73 55,70',
    viewBox: '0 0 100 120',
    description: 'Enfoque de ojos manga con el legendario Sharingan, sombreado con texturas de semitono.',
    artistId: 'art-3'
  },
  {
    id: 'an-2',
    name: 'Ciber-Núcleo Evangelion',
    category: 'Anime',
    svgPath: 'M 50,15 L 85,35 L 85,75 L 50,95 L 15,75 L 15,35 Z M 50,25 L 75,40 L 75,70 L 50,85 L 25,70 L 25,40 Z M 50,40 C 41.7,40 35,46.7 35,55 C 35,63.3 41.7,70 50,70 C 58.3,70 65,63.3 65,55 C 65,46.7 58.3,40 50,40 Z',
    viewBox: '0 0 100 110',
    description: 'Inspirado en la interfaz de la cabina del EVA, líneas precisas y detalles mecha futuristas.',
    artistId: 'art-3'
  },

  // --- HORROR / DARK ART ---
  {
    id: 'hr-1',
    name: 'La Bestia Bafomet',
    category: 'Horror',
    svgPath: 'M 50,10 L 35,45 C 20,40 10,50 15,65 C 20,80 35,80 40,85 C 42,95 45,115 50,140 C 55,115 58,95 60,85 C 65,80 80,80 85,65 C 90,50 80,40 65,45 Z M 30,55 C 33,55 35,58 35,60 C 35,62 33,65 30,65 C 27,65 25,62 25,60 C 25,58 27,55 30,55 Z M 70,55 C 73,55 75,58 75,60 C 75,62 73,65 70,65 C 67,65 65,62 65,60 C 65,58 67,55 70,55 Z M 50,75 L 45,65 L 55,65 Z',
    viewBox: '0 0 100 150',
    description: 'Iconografía pagana con calavera de cabra, ojos hipnóticos y sombreado gótico extremo.',
    artistId: 'art-1'
  },
  {
    id: 'da-1',
    name: 'Ojo de la Providencia Oscuro',
    category: 'Dark Art',
    svgPath: 'M 50,20 L 15,85 L 85,85 Z M 50,35 L 27,77 L 73,77 Z M 50,45 C 41.7,45 35,51.7 35,60 C 35,68.3 41.7,75 50,75 C 58.3,75 65,68.3 65,60 C 65,51.7 58.3,45 50,45 Z M 50,53 C 46.1,53 43,56.1 43,60 C 43,63.9 46.1,67 50,67 C 53.9,67 57,63.9 57,60 C 57,56.1 53.9,53 50,53 Z M 50,10 L 50,110 M 10,60 L 90,60',
    viewBox: '0 0 100 120',
    description: 'Símbolo místico de sabiduría, rodeado de destellos celestiales, lágrimas negras y líneas esotéricas.',
    artistId: 'art-1'
  },

  // --- TRADITIONAL ---
  {
    id: 'tr-1',
    name: 'Daga Tradicional Americana',
    category: 'Traditional',
    svgPath: 'M 50,10 C 45,10 40,25 40,35 C 40,45 45,50 50,50 C 55,50 60,45 60,35 C 60,25 55,10 50,10 Z M 50,50 L 50,130 L 45,115 L 40,115 L 42,95 L 35,90 L 35,80 L 42,80 L 45,60 L 45,50 Z M 50,50 L 50,130 L 55,115 L 60,115 L 58,95 L 65,90 L 65,80 L 58,80 L 55,60 L 55,50 Z',
    viewBox: '0 0 100 140',
    description: 'Daga clásica americana con líneas ultra gruesas y bordes de alto contraste preparados para colores densos.',
    artistId: 'art-4'
  },
  {
    id: 'tr-2',
    name: 'Pantera de Fuego Clásica',
    category: 'Traditional',
    svgPath: 'M 20,40 C 30,30 50,30 60,35 C 70,30 80,40 75,55 C 70,70 60,85 50,95 C 40,85 30,70 25,55 C 20,50 15,45 20,40 Z M 35,45 C 35,45 42,40 50,48 C 58,40 65,45 65,45 C 65,45 58,55 50,55 C 42,55 35,45 35,45 Z',
    viewBox: '0 0 100 110',
    description: 'Rugido salvaje, garras extendidas y fuego retro de alto contraste, un tributo al tatuaje tradicional vintage.',
    artistId: 'art-4'
  },

  // --- GEOMETRIC ---
  {
    id: 'ge-1',
    name: 'Mandala de Geometría Sagrada',
    category: 'Geometric',
    svgPath: 'M 75,15 C 41.8,15 15,41.8 15,75 C 15,108.2 41.8,135 75,135 C 108.2,135 135,108.2 135,75 C 135,41.8 108.2,15 75,15 Z M 75,25 C 102.6,25 125,47.4 125,75 C 125,102.6 102.6,125 75,125 C 47.4,125 25,102.6 25,75 C 25,47.4 47.4,25 75,25 Z M 75,45 C 91.5,45 105,58.5 105,75 C 105,91.5 91.5,105 75,105 C 58.5,105 45,91.5 45,75 C 45,58.5 58.5,45 75,45 Z M 75,55 L 75,95 M 55,75 L 95,75 M 61,61 L 89,89 M 61,89 L 89,61',
    viewBox: '0 0 150 150',
    description: 'Mandala simétrico impecable con círculos concéntricos, líneas de precisión láser y nudos sagrados.',
    artistId: 'art-2'
  },
  {
    id: 'ge-2',
    name: 'Cubo de Metatrón Cósmico',
    category: 'Geometric',
    svgPath: 'M 75,20 L 123,48 L 123,102 L 75,130 L 27,102 L 27,48 Z M 75,32 L 112,54 L 112,96 L 75,118 L 38,96 L 38,54 Z M 75,20 L 75,130 M 27,48 L 123,102 M 27,102 L 123,48 M 75,50 C 61.2,50 50,61.2 50,75 C 50,88.8 61.2,100 75,100 C 88.8,100 100,88.8 100,75 C 100,61.2 88.8,50 75,50 Z',
    viewBox: '0 0 150 150',
    description: 'Estructura sagrada multidimensional tridimensional basada en polígonos regulares perfectos.',
    artistId: 'art-2'
  },

  // --- LETTERING ---
  {
    id: 'le-1',
    name: 'Caligrafía Gothic Nocturna',
    category: 'Lettering',
    svgPath: 'M 15,45 C 20,40 30,30 45,35 C 55,40 60,30 70,25 C 65,35 60,45 45,45 C 30,45 25,55 15,45 Z M 15,45 L 25,85 C 30,105 50,115 70,110 C 60,100 55,85 50,70 L 40,45 Z M 52,60 C 58,55 70,55 75,65 C 80,75 75,85 68,90 C 60,95 55,90 52,80 Z',
    viewBox: '0 0 100 120',
    description: 'Letra gótica tradicional estilizada con ornamentos barrocos afilados y espinas decorativas.',
    artistId: 'art-1'
  },

  // --- ORNAMENTAL ---
  {
    id: 'or-1',
    name: 'Filigrana Barroca Victoriana',
    category: 'Ornamental',
    svgPath: 'M 75,20 C 40,20 20,45 20,75 C 20,105 40,130 75,130 C 110,130 130,105 130,75 C 130,45 110,20 75,20 Z M 75,35 C 95,35 112,50 112,75 C 112,85 105,95 95,95 C 85,95 80,85 75,85 C 70,85 65,95 55,95 C 45,95 38,85 38,75 C 38,50 55,35 75,35 Z M 75,50 C 68,50 62,56 62,63 C 62,70 68,75 75,75 C 82,75 88,70 88,63 C 88,56 82,50 75,50 Z',
    viewBox: '0 0 150 150',
    description: 'Enramada de volutas de estilo neoclásico y encajes curvos diseñada para adaptarse a la anatomía.',
    artistId: 'art-2'
  }
];
