import type { Genre } from './genres';

export type Color = 'error' | 'info' | 'primary' | 'success' | 'warning';

export const colorsClassName: Record<Color, Record<Genre, string>> = {
  error: {
    fill: 'bg-red-600 hover:bg-red-600/80 text-white',
    link: '',
    outline: '',
  },
  info: {
    fill: '',
    link: '',
    outline: '',
  },
  primary: {
    fill: 'bg-cyan-600 hover:bg-cyan-600/80 text-white',
    link: '',
    outline: '',
  },
  success: {
    fill: 'bg-emerald-600 hover:bg-emerald-600/80 text-white',
    link: '',
    outline: '',
  },
  warning: {
    fill: '',
    link: '',
    outline: '',
  },
};
