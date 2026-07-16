/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Artist, FlashItem, PortfolioItem, BodyTemplate } from '../types';

export const ARTISTS: Artist[] = [
  {
    id: 'art-1',
    name: 'Valeria Vega',
    role: 'Fundadora & Artista Principal',
    portrait: '/assets/images/valeria_artist_1782919840521.jpg', // Our generated asset!
    bio: 'Con más de una década de experiencia internacional, Valeria ha desarrollado un estilo inconfundible que fusiona el misticismo gótico, el grabado medieval y el blackwork de alto contraste. Su enfoque se centra en crear piezas fluidas que interactúan dinámicamente con la musculatura del cuerpo.',
    specialties: ['Blackwork', 'Dark Art', 'Grabado Medieval', 'Horror'],
    instagram: '@valeria.nocturna',
    availableDates: ['04 Jul, 2026', '08 Jul, 2026', '15 Jul, 2026', '22 Jul, 2026'],
    portfolioIds: ['port-1', 'port-5', 'port-9']
  },
  {
    id: 'art-2',
    name: 'Clara Sterling',
    role: 'Especialista en Micro-Ilustración',
    portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    bio: 'Clara es una maestra del trazo fino y la geometría sagrada. Su obsesión por la precisión milimétrica y la simetría la ha convertido en un referente del diseño ornamental y minimalista, logrando que cada línea parezca grabada de manera natural sobre la piel.',
    specialties: ['Fineline', 'Geometric', 'Ornamental', 'Micro-Tatuaje'],
    instagram: '@clara.sterling.ink',
    availableDates: ['05 Jul, 2026', '06 Jul, 2026', '12 Jul, 2026', '19 Jul, 2026'],
    portfolioIds: ['port-2', 'port-6', 'port-10']
  },
  {
    id: 'art-3',
    name: 'Kenji Sato',
    role: 'Especialista en Neo-Anime & Manga',
    portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    bio: 'Kenji combina la estética tradicional del manga de autor y el cyberpunk futurista. Con un manejo soberbio del alto contraste y los semitonos (screentones), transforma escenas legendarias de la cultura pop japonesa en monumentos atemporales sobre la piel.',
    specialties: ['Anime', 'Cyberpunk', 'Lettering Gótico', 'Blackwork'],
    instagram: '@kenji.sato.art',
    availableDates: ['10 Jul, 2026', '11 Jul, 2026', '18 Jul, 2026', '25 Jul, 2026'],
    portfolioIds: ['port-3', 'port-7', 'port-11']
  },
  {
    id: 'art-4',
    name: 'Damián Frost',
    role: 'Artista Residente Tradicional',
    portrait: 'https://images.unsplash.com/photo-1620122303020-43ec4b6cf7f8?q=80&w=600&auto=format&fit=crop',
    bio: 'Damián rinde homenaje a los pioneros del tatuaje occidental con su estilo Tradicional Americano. Sus diseños destacan por líneas extraordinariamente gruesas, pigmentos negros impenetrables y una solidez que garantiza que la pieza permanezca intacta por décadas.',
    specialties: ['Traditional', 'Neo-Traditional', 'Lettering heavy', 'Color Sólido'],
    instagram: '@damian.frost.tattoo',
    availableDates: ['07 Jul, 2026', '14 Jul, 2026', '21 Jul, 2026', '28 Jul, 2026'],
    portfolioIds: ['port-4', 'port-8', 'port-12']
  }
];

export const BODY_TEMPLATES: BodyTemplate[] = [
  {
    id: 'temp-arm',
    name: 'Brazo (Arm)',
    imageUrl: '/assets/images/regenerated_image_1784164849299.png'
  },
  {
    id: 'temp-forearm',
    name: 'Antebrazo (Forearm)',
    imageUrl: '/assets/images/regenerated_image_1784063089242.webp'
  },
  {
    id: 'temp-hand',
    name: 'Mano (Hand)',
    imageUrl: '/assets/images/regenerated_image_1784063089894.webp'
  },
  {
    id: 'temp-leg',
    name: 'Pierna (Leg)',
    imageUrl: '/assets/images/regenerated_image_1784063090737.webp'
  },
  {
    id: 'temp-chest',
    name: 'Pecho (Chest)',
    imageUrl: '/assets/images/regenerated_image_1784063092000.webp'
  },
  {
    id: 'temp-back',
    name: 'Espalda (Back)',
    imageUrl: '/assets/images/regenerated_image_1784063092632.webp'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'La Consagración del Caos',
    imageUrl: '/assets/images/portfolio_bat_1782922738242.jpg',
    artistId: 'art-1',
    bodyPart: 'Espalda',
    style: 'Blackwork',
    size: '40x50 cm',
    year: 2025,
    colorType: 'Black & Grey',
    description: 'Pieza de espalda completa inspirada en grabados góticos alemanes del siglo XV. Representa figuras místicas entrelazadas por patrones orgánicos.',
    healingPhotos: [
      '/assets/images/portfolio_bat_1782922738242.jpg'
    ]
  },
  {
    id: 'port-2',
    title: 'Ecuación Sagrada',
    imageUrl: '/assets/images/portfolio_ghost_1782922754442.jpg',
    artistId: 'art-2',
    bodyPart: 'Brazo',
    style: 'Geometric',
    size: '15x15 cm',
    year: 2026,
    colorType: 'Black & Grey',
    description: 'Mandala simétrico ultra-detallado con micropuntillismo degradado y líneas concéntricas de 0.15mm.',
    healingPhotos: [
      '/assets/images/portfolio_ghost_1782922754442.jpg'
    ]
  },
  {
    id: 'port-3',
    title: 'Despertar de la Ciber-Geisha',
    imageUrl: '/assets/images/portfolio_seraphim_1782922764899.jpg',
    artistId: 'art-3',
    bodyPart: 'Brazo',
    style: 'Anime',
    size: '22x14 cm',
    year: 2025,
    colorType: 'Black & Grey',
    description: 'Diseño neo-manga fusionado con elementos mecánicos cibernéticos y alto contraste en fondos sólidos.',
    healingPhotos: [
      '/assets/images/portfolio_seraphim_1782922764899.jpg'
    ]
  },
  {
    id: 'port-4',
    title: 'El Duelo Inmortal',
    imageUrl: '/assets/images/portfolio_palms_1782922776487.jpg',
    artistId: 'art-4',
    bodyPart: 'Pecho',
    style: 'Traditional',
    size: '25x20 cm',
    year: 2026,
    colorType: 'Color',
    description: 'Composición clásica americana de águila y serpiente con paleta reducida a negro saturado, rojo sangre y amarillo mostaza.',
    healingPhotos: [
      '/assets/images/portfolio_palms_1782922776487.jpg'
    ]
  },
  {
    id: 'port-5',
    title: 'Ojo del Abismo Celestial',
    imageUrl: '/assets/images/portfolio_thumbs_1782922785223.jpg',
    artistId: 'art-1',
    bodyPart: 'Mano',
    style: 'Dark Art',
    size: '12x10 cm',
    year: 2026,
    colorType: 'Black & Grey',
    description: 'Ojo esotérico hiperdetallado en el dorso de la mano con lágrimas geométricas que descienden hacia las falanges.',
    healingPhotos: [
      '/assets/images/portfolio_thumbs_1782922785223.jpg'
    ]
  },
  {
    id: 'port-6',
    title: 'Lágrimas del Zodiaco',
    imageUrl: '/assets/images/portfolio_eyes_1782922794305.jpg',
    artistId: 'art-2',
    bodyPart: 'Cuello',
    style: 'Fineline',
    size: '8x5 cm',
    year: 2025,
    colorType: 'Black & Grey',
    description: 'Constelaciones astronómicas y órbitas celestes dibujadas con elegancia suprema bajo la base del lóbulo.',
    healingPhotos: [
      '/assets/images/portfolio_eyes_1782922794305.jpg'
    ]
  }
];

export const FLASH_ITEMS: FlashItem[] = [
  {
    id: 'fls-1',
    name: 'Liebres Lunares',
    size: '15x15 cm',
    estimatedTime: '3 horas',
    price: 320,
    availability: 'disponible',
    isLimited: true,
    svgPath: '',
    imageUrl: '/assets/images/flash_rabbits_circle_1782924506874.jpg'
  },
  {
    id: 'fls-2',
    name: 'Conejito de Amor',
    size: '10x10 cm',
    estimatedTime: '1.5 horas',
    price: 180,
    availability: 'reservado',
    isLimited: false,
    svgPath: '',
    imageUrl: '/assets/images/flash_bunny_heart_1782924523290.jpg'
  },
  {
    id: 'fls-3',
    name: 'Sigilo Neogótico',
    size: '20x12 cm',
    estimatedTime: '4 horas',
    price: 450,
    availability: 'vendido',
    isLimited: true,
    svgPath: '',
    imageUrl: '/assets/images/flash_gothic_sigil_1782924536837.jpg'
  },
  {
    id: 'fls-4',
    name: 'Sello de Ilusión',
    size: '12x15 cm',
    estimatedTime: '2.5 horas',
    price: 280,
    availability: 'disponible',
    isLimited: false,
    svgPath: '',
    imageUrl: '/assets/images/flash_argentina_stamp_1782924552442.jpg'
  }
];
