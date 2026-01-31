export enum ToolType {
  DASHBOARD = 'DASHBOARD',
  EDITOR = 'EDITOR',
  AI_ENHANCER = 'AI_ENHANCER',
  PASSPORT_MAKER = 'PASSPORT_MAKER',
  CONVERTER = 'CONVERTER',
  STEGANOGRAPHY = 'STEGANOGRAPHY',
  PDF_TOOLS = 'PDF_TOOLS',
  PHOTO_SCANNER = 'PHOTO_SCANNER',
}

export interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

export type AspectRatio = 'FREE' | '1:1' | '16:9' | '4:3' | '3:4' | '9:16';

export interface FilterSettings {
  brightness: number;
  contrast: number;
  saturation: number;
  grayscale: number;
  blur: number;
  sepia: number;
  hueRotate: number;
  invert: number;
}

export interface TransformSettings {
  rotate: number; // degrees 0, 90, 180, 270
  flipX: boolean;
  flipY: boolean;
}

export interface TextOverlay {
  text: string;
  x: number; // 0-1 percentage
  y: number; // 0-1 percentage
  color: string;
  size: number;
}