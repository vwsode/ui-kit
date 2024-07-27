import { CheckmarkCircle } from './CheckmarkCircle';
import { ErrorCircle } from './ErrorCircle';
import { IconBaseProps, IconVariant } from './types';
import { Warning } from './Warning';

export const iconComponentsMap: Record<IconVariant, React.FC<IconBaseProps>> = {
  'checkrmark-circle': CheckmarkCircle,
  'error-circle': ErrorCircle,
  warning: Warning,
};
