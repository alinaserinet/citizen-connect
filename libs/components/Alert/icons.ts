import type { Icon } from '@phosphor-icons/react';
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from '@phosphor-icons/react';
import type { AlertColor } from '@types';

const icons: Record<AlertColor, Icon> = {
  error: WarningCircle,
  info: Info,
  success: CheckCircle,
  warning: Warning,
};

export default icons;
