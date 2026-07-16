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
    portrait: 'https://i.pinimg.com/736x/b2/37/6a/b2376a03f7a449cf808757650cbddf85.jpg', // Our generated asset!
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
    portrait: 'https://i.pinimg.com/1200x/90/c9/1f/90c91fa1828b6451336f0d53ead5aee7.jpg',
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfCVbsSc51dc0Lf5rZoqrEW00ut0N1kBY2SeS54X9MiYatp0xh55qX6A&s=10'
  },
  {
    id: 'temp-forearm',
    name: 'Antebrazo (Forearm)',
    imageUrl: 'https://img.magnific.com/foto-gratis/mano-sensible-haciendo-expresiones-delicadas_23-2149524497.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: 'temp-hand',
    name: 'Mano (Hand)',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1666107278223-780557577da0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'temp-leg',
    name: 'Pierna (Leg)',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/003/512/604/large_2x/women-s-leg-bent-at-the-knee-free-photo.jpg'
  },
  {
    id: 'temp-chest',
    name: 'Pecho (Chest)',
    imageUrl: 'https://elosklinik.com/wp-content/uploads/2025/03/goguste-sivilce.webp'
  },
  {
    id: 'temp-back',
    name: 'Espalda (Back)',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUaJumyKdUcp6HO67RYjyS98wqmI67zKjjfesjzyXXMSQu6EFRfzwIg&s=10'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'La Consagración del Caos',
    imageUrl: 'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/670272648_18094125440515789_6344895025006018279_n.webp?stp=dst-webp_p720x720&_nc_cat=107&ig_cache_key=Mzg3NDYzODU2MTc0MDI4NjMwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=P4eXuMOK9UMQ7kNvwFw62xx&_nc_oc=AdqKmNIGaG0qSRFg4izWbYbX2Kq2TSgMOE4G5r1D4_DuOwcFbdQF5TmqiiX-88nBz9hbVJrlQVcBUerq4_3659uQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQC2EYQ3GI5_Eoaes0kRyOv3qM2XvR2RH93t3TEDkRUrbw&oe=6A5E1C0A',
    artistId: 'art-1',
    bodyPart: 'Espalda',
    style: 'Blackwork',
    size: '40x50 cm',
    year: 2025,
    colorType: 'Black & Grey',
    description: 'Pieza de espalda completa inspirada en grabados góticos alemanes del siglo XV. Representa figuras místicas entrelazadas por patrones orgánicos.',
    healingPhotos: [
      'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/670272648_18094125440515789_6344895025006018279_n.webp?stp=dst-webp_p720x720&_nc_cat=107&ig_cache_key=Mzg3NDYzODU2MTc0MDI4NjMwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=P4eXuMOK9UMQ7kNvwFw62xx&_nc_oc=AdqKmNIGaG0qSRFg4izWbYbX2Kq2TSgMOE4G5r1D4_DuOwcFbdQF5TmqiiX-88nBz9hbVJrlQVcBUerq4_3659uQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQC2EYQ3GI5_Eoaes0kRyOv3qM2XvR2RH93t3TEDkRUrbw&oe=6A5E1C0A'
    ]
  },
  {
    id: 'port-2',
    title: 'Ecuación Sagrada',
    imageUrl: 'https://instagram.fepa14-1.fna.fbcdn.net/v/t51.82787-15/652058043_18090671684515789_8236650776401866259_n.webp?stp=dst-webp_p720x720&_nc_cat=100&ig_cache_key=Mzg1NDM2OTU1MjE2ODA2ODkwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Z1xq_8VxfZAQ7kNvwGVLSA9&_nc_oc=AdoFpDdokDU6muihROhQMrsZDnWiop8Tkn0CFeAxZozgK4RsBe9WLjzGB120CWBabaOk-GP750ujoCN-C8IBgIvG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa14-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQAicUaM213VJf3xWBCo8Atmi2I6JbW4GkLYTY9Vpl-hdg&oe=6A5DF68B',
    artistId: 'art-2',
    bodyPart: 'Brazo',
    style: 'Geometric',
    size: '15x15 cm',
    year: 2026,
    colorType: 'Black & Grey',
    description: 'Mandala simétrico ultra-detallado con micropuntillismo degradado y líneas concéntricas de 0.15mm.',
    healingPhotos: [
      'https://instagram.fepa14-1.fna.fbcdn.net/v/t51.82787-15/652058043_18090671684515789_8236650776401866259_n.webp?stp=dst-webp_p720x720&_nc_cat=100&ig_cache_key=Mzg1NDM2OTU1MjE2ODA2ODkwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Z1xq_8VxfZAQ7kNvwGVLSA9&_nc_oc=AdoFpDdokDU6muihROhQMrsZDnWiop8Tkn0CFeAxZozgK4RsBe9WLjzGB120CWBabaOk-GP750ujoCN-C8IBgIvG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa14-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQAicUaM213VJf3xWBCo8Atmi2I6JbW4GkLYTY9Vpl-hdg&oe=6A5DF68B'
    ]
  },
  {
    id: 'port-3',
    title: 'Despertar de la Ciber-Geisha',
    imageUrl: 'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/695677163_18097553168515789_1628480445891358663_n.webp?stp=dst-webp_p720x720&_nc_cat=109&ig_cache_key=Mzg5NDg4NjY2NzAxMzQ4NTAzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_hjOFqVV1I8Q7kNvwF9HZPB&_nc_oc=Ado-EWXpDvhQ-gL5iaytWNjA0gMKZylNYoXxcLBAQlt5yNhirew6iJBaT7uTHIWxSgUO56rZ7IK5sNe5vf8cQnAp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQCFJbfFjanoVkRxfNCPsOxbojsV1xYRCnmG4Qxyfioavg&oe=6A5DFE4D',
    artistId: 'art-3',
    bodyPart: 'Brazo',
    style: 'Anime',
    size: '22x14 cm',
    year: 2025,
    colorType: 'Black & Grey',
    description: 'Diseño neo-manga fusionado con elementos mecánicos cibernéticos y alto contraste en fondos sólidos.',
    healingPhotos: [
      'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/695677163_18097553168515789_1628480445891358663_n.webp?stp=dst-webp_p720x720&_nc_cat=109&ig_cache_key=Mzg5NDg4NjY2NzAxMzQ4NTAzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_hjOFqVV1I8Q7kNvwF9HZPB&_nc_oc=Ado-EWXpDvhQ-gL5iaytWNjA0gMKZylNYoXxcLBAQlt5yNhirew6iJBaT7uTHIWxSgUO56rZ7IK5sNe5vf8cQnAp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQCFJbfFjanoVkRxfNCPsOxbojsV1xYRCnmG4Qxyfioavg&oe=6A5DFE4D'
    ]
  },
  {
    id: 'port-4',
    title: 'El Duelo Inmortal',
    imageUrl: 'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/720509365_18101280593515789_4023535422940916516_n.webp?stp=dst-webp_p720x720&_nc_cat=105&ig_cache_key=MzkxNTkyMTg1MjcxNDYzNzMyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=QZbADpsSTxMQ7kNvwEF86I0&_nc_oc=AdpgEJiCmiGlso0w1f0TbF42o1b9zHql4VnHPP5p_WSAEpjI0QSNnCy3lMUUfgkS9wUbeRNbtFIBrJL1pa39xZZ7&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQC2P_f2h8SfWRr1k9QEOUodEUEt3-CeDGHCNo-lV8BVjA&oe=6A5E1C76',
    artistId: 'art-4',
    bodyPart: 'Pecho',
    style: 'Traditional',
    size: '25x20 cm',
    year: 2026,
    colorType: 'Color',
    description: 'Composición clásica americana de águila y serpiente con paleta reducida a negro saturado, rojo sangre y amarillo mostaza.',
    healingPhotos: [
      'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/720509365_18101280593515789_4023535422940916516_n.webp?stp=dst-webp_p720x720&_nc_cat=105&ig_cache_key=MzkxNTkyMTg1MjcxNDYzNzMyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=QZbADpsSTxMQ7kNvwEF86I0&_nc_oc=AdpgEJiCmiGlso0w1f0TbF42o1b9zHql4VnHPP5p_WSAEpjI0QSNnCy3lMUUfgkS9wUbeRNbtFIBrJL1pa39xZZ7&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQC2P_f2h8SfWRr1k9QEOUodEUEt3-CeDGHCNo-lV8BVjA&oe=6A5E1C76'
    ]
  },
  {
    id: 'port-5',
    title: 'Ojo del Abismo Celestial',
    imageUrl: 'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/656722383_18091844531515789_8318997019918823621_n.webp?stp=dst-webp_p720x720&_nc_cat=101&ig_cache_key=Mzg2MDE2NDk2MjgwNzY4MDc4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8ZfOqrpJF_IQ7kNvwHMT8eY&_nc_oc=Adp0onIFFthz5PkBVNbXaNmrF2yjW2abeOMEa_HfR2jCHVJ_cR8AjUN8c6J5xbr-l6Of90vNJ0GFpdBgX8V5MzYc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQBaW2FzunI3JebOb0I1iyljnuHDrPTExlkbyTsB6bNrFQ&oe=6A5E2491',
    artistId: 'art-1',
    bodyPart: 'Mano',
    style: 'Dark Art',
    size: '12x10 cm',
    year: 2026,
    colorType: 'Black & Grey',
    description: 'Ojo esotérico hiperdetallado en el dorso de la mano con lágrimas geométricas que descienden hacia las falanges.',
    healingPhotos: [
      'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/656722383_18091844531515789_8318997019918823621_n.webp?stp=dst-webp_p720x720&_nc_cat=101&ig_cache_key=Mzg2MDE2NDk2MjgwNzY4MDc4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8ZfOqrpJF_IQ7kNvwHMT8eY&_nc_oc=Adp0onIFFthz5PkBVNbXaNmrF2yjW2abeOMEa_HfR2jCHVJ_cR8AjUN8c6J5xbr-l6Of90vNJ0GFpdBgX8V5MzYc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQBaW2FzunI3JebOb0I1iyljnuHDrPTExlkbyTsB6bNrFQ&oe=6A5E2491'
    ]
  },
  {
    id: 'port-6',
    title: 'Lágrimas del Zodiaco',
    imageUrl: 'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/649171431_18089665520515789_2507383293027811095_n.webp?stp=dst-webp_p720x720&_nc_cat=107&ig_cache_key=Mzg0OTI0NTAzMzgyNDcyMTE4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=1aUG5Efch1gQ7kNvwHyDGLP&_nc_oc=Adpt3dNU8BwNSK3G19je14q-qm_7jmHNUV4ZY4ix-h8ZzlytpKmKoo1sggnjUXS2bF8aHT9E8xawVg3Aeg3dOEhL&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQCcI-JPLFIBwzA1s6eTeZvI9_46jmgoSAKsE0GWjDN3Dw&oe=6A5E047B',
    artistId: 'art-2',
    bodyPart: 'Cuello',
    style: 'Fineline',
    size: '8x5 cm',
    year: 2025,
    colorType: 'Black & Grey',
    description: 'Constelaciones astronómicas y órbitas celestes dibujadas con elegancia suprema bajo la base del lóbulo.',
    healingPhotos: [
      'https://instagram.fepa8-1.fna.fbcdn.net/v/t51.82787-15/649171431_18089665520515789_2507383293027811095_n.webp?stp=dst-webp_p720x720&_nc_cat=107&ig_cache_key=Mzg0OTI0NTAzMzgyNDcyMTE4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=1aUG5Efch1gQ7kNvwHyDGLP&_nc_oc=Adpt3dNU8BwNSK3G19je14q-qm_7jmHNUV4ZY4ix-h8ZzlytpKmKoo1sggnjUXS2bF8aHT9E8xawVg3Aeg3dOEhL&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fepa8-1.fna&_nc_gid=6dU_cuKV1r1c8LI2FGFfCQ&_nc_ss=7a22e&oh=00_AQCcI-JPLFIBwzA1s6eTeZvI9_46jmgoSAKsE0GWjDN3Dw&oe=6A5E047B'
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
    imageUrl: 'https://i.pinimg.com/736x/3b/6f/d8/3b6fd8ea556e99c8d096f1829c0cef94.jpg'
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
    imageUrl: 'https://i.pinimg.com/736x/66/ab/2b/66ab2bad41eba7b6d71ed2bef44fe7eb.jpg'
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
    imageUrl: 'https://i.pinimg.com/736x/01/07/f8/0107f8fcfaf985242f8293b167f19640.jpg'
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
    imageUrl: 'https://i.pinimg.com/1200x/67/12/b1/6712b15fdf27542db769e1a1f9d41561.jpg'
  }
];
