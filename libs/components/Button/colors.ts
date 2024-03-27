export type Color = 'error' | 'info' | 'primary' | 'success' | 'warning';

type ColorType = 'fill' | 'nonFill';

export const colorsClassName: Record<Color, Record<ColorType, string>> = {
  error: {
    fill: '',
    nonFill: '',
  },
  info: {
    fill: '',
    nonFill: '',
  },
  primary: {
    fill: '',
    nonFill: '',
  },
  success: {
    fill: 'bg-emerald-600 hover:bg-emerald-600/80 text-white',
    nonFill: '',
  },
  warning: {
    fill: '',
    nonFill: '',
  },
};
