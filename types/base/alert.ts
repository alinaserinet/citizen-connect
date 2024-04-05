export type AlertColor = 'error' | 'info' | 'success' | 'warning';

export interface Alert {
  message: string;
  hint?: string;
  color: AlertColor;
}
