import type { Icon } from '@phosphor-icons/react';

export interface AppError {
  type: 'client' | 'domain' | 'http' | 'server';
  message: string;
  icon?: Icon;
  description?: string;
  fixed?: boolean;
  showRefreshBtn?: boolean;
  doesUserLogout?: boolean;
  url?: string;
  requestInit?: RequestInit;
  time?: number;
  code?: number;
}

export const isInstanceOfAppError = (error: unknown): boolean => {
  if (!error || typeof error !== 'object') {
    return false;
  }

  return ['type', 'message', 'faMessage'].every(key => key in error);
};
