import { twMerge } from 'tailwind-merge';

import type { Color } from './colors';
import { colorsClassName } from './colors';
import type { Genre } from './genres';
import { genresClassName } from './genres';
import type { Size } from './sizes';
import { sizesClassName } from './sizes';

export function generateClassName(genre: Genre, color: Color, size: Size) {
  const genreClassName = genresClassName[genre];
  const colorClassName = colorsClassName[color][genre];
  const sizeClassName = sizesClassName[size];
  return twMerge(sizeClassName, colorClassName, genreClassName);
}
