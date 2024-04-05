import type { Icon } from '@phosphor-icons/react';
import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from '@phosphor-icons/react';

import type { Color } from './colors';

const icons: Record<Color, Icon> = {
  error: WarningCircle,
  info: Info,
  success: CheckCircle,
  warning: Warning,
};

export default icons;
