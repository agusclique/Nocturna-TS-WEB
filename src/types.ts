/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TattooDesign {
  id: string;
  name: string;
  category: 'Blackwork' | 'Fineline' | 'Anime' | 'Horror' | 'Dark Art' | 'Traditional' | 'Geometric' | 'Lettering' | 'Ornamental';
  svgPath: string; // High-quality vector SVG path
  viewBox?: string;
  description: string;
  artistId: string;
}

export interface BodyTemplate {
  id: string;
  name: string;
  imageUrl: string;
}

export interface CanvasElement {
  id: string;
  designId?: string; // Optional if it's a custom uploaded tattoo
  src?: string; // If custom upload or SVG data URL
  svgPath?: string; // For rendering SVGs directly
  viewBox?: string;
  name: string;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number; // in degrees
  opacity: number; // 0 to 1
  blendMode: 'normal' | 'multiply' | 'overlay' | 'soft-light';
  blur: number; // px
  contrast: number; // % (e.g. 100)
  brightness: number; // % (e.g. 100)
  color: string; // hex color for ink (e.g. #000000, #4a0404 for dark red)
  isFlipped: boolean;
  isFlippedVertically?: boolean;
  zIndex: number;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  portrait: string;
  bio: string;
  specialties: string[];
  instagram: string;
  availableDates: string[];
  portfolioIds: string[];
}

export interface FlashItem {
  id: string;
  name: string;
  size: string; // e.g., "10x12 cm"
  estimatedTime: string; // e.g., "2-3 horas"
  price: number;
  availability: 'disponible' | 'reservado' | 'vendido';
  isLimited: boolean;
  svgPath: string; // High quality SVG design
  viewBox?: string;
  imageUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
  artistId: string;
  bodyPart: 'Brazo' | 'Pierna' | 'Pecho' | 'Espalda' | 'Cuello' | 'Mano' | 'Otros';
  style: string;
  size: string;
  year: number;
  colorType: 'Color' | 'Black & Grey';
  healingPhotos?: string[]; // Before/after or fully healed photos
  description: string;
}

export interface BookingState {
  artistId: string;
  bodyPart: string;
  inspirationImage: File | null;
  inspirationUrl?: string;
  description: string;
  preferredDate: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
}
