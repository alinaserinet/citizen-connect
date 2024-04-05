import { twMerge } from 'tailwind-merge';

import type { Color } from './colors';
import { colorsClassName } from './colors';
import type { Genre } from './genres';
import { genresClassName } from './genres';
import type { SectionRecord } from './types';

export function generateClassName(
  color: Color,
  genre: Genre,
  fill: boolean,
): SectionRecord {
  const genreClassName = genresClassName[genre];
  const colorClassName = colorsClassName[color];

  return {
    hint: twMerge(
      fill ? colorClassName.fill.hint : colorClassName.normal.hint,
      genreClassName.hint,
    ),
    icon: twMerge(
      fill ? colorClassName.fill.icon : colorClassName.normal.icon,
      genreClassName.icon,
    ),
    main: twMerge(
      fill ? colorClassName.fill.main : colorClassName.normal.main,
      genreClassName.main,
    ),
    message: twMerge(
      fill ? colorClassName.fill.message : colorClassName.normal.message,
      genreClassName.message,
    ),
    root: twMerge(
      fill ? colorClassName.fill.root : colorClassName.normal.root,
      genreClassName.root,
    ),
  };
}
