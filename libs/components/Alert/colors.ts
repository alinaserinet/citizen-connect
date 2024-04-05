import type { SectionRecord } from './types';

export type Color = 'error' | 'info' | 'success' | 'warning';
type ColorMode = 'fill' | 'normal';
type ColorModeRecord = Record<ColorMode, SectionRecord>;
type ColorRecord = Record<Color, ColorModeRecord>;

export const colorsClassName: ColorRecord = {
  error: {
    normal: {
      hint: 'text-gray-600 dark:text-gray-200',
      icon: 'bg-red-500 text-white',
      main: '',
      message: 'text-red-500 dark:text-red-400',
      root: '',
    },
    fill: {
      hint: '',
      icon: '',
      main: '',
      message: '',
      root: '',
    },
  },
  info: {
    normal: {
      hint: 'text-gray-600 dark:text-gray-200',
      icon: 'bg-blue-500 text-white',
      main: '',
      message: 'text-blue-500 dark:text-blue-400',
      root: '',
    },
    fill: {
      hint: '',
      icon: '',
      main: '',
      message: '',
      root: '',
    },
  },
  success: {
    normal: {
      hint: 'text-gray-600 dark:text-gray-200',
      icon: 'bg-emerald-500 text-white',
      main: '',
      message: 'text-emerald-500 dark:text-emerald-400',
      root: '',
    },
    fill: {
      hint: '',
      icon: '',
      main: '',
      message: '',
      root: '',
    },
  },
  warning: {
    normal: {
      hint: 'text-gray-600 dark:text-gray-200',
      icon: 'bg-yellow-400',
      main: '',
      message: 'text-yellow-400 dark:text-yellow-300',
      root: '',
    },
    fill: {
      hint: '',
      icon: '',
      main: '',
      message: '',
      root: '',
    },
  },
};
