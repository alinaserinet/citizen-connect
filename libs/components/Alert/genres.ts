import type { SectionRecord } from './types';

export type Genre = 'full' | 'pop';

export const genresClassName: Record<Genre, SectionRecord> = {
  full: {
    hint: '',
    icon: '',
    main: '',
    message: '',
    root: '',
  },
  pop: {
    hint: '',
    icon: '',
    main: '',
    message: '',
    root: 'bg-white dark:bg-gray-800',
  },
};
