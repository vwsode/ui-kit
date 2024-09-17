import { CheckmarkCircle } from './CheckmarkCircle';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import { EditorClose } from './EditorClose';
import { EditorDone } from './EditorDone';
import { ErrorCircle } from './ErrorCircle';
import { More } from './More';
import { Spinner } from './Spinner/Spinner';
import { IconBaseProps, IconVariant } from './types';
import { Warning } from './Warning';

export const iconComponentsMap: Record<IconVariant, React.FC<IconBaseProps>> = {
  'checkrmark-circle': CheckmarkCircle,
  'error-circle': ErrorCircle,
  'editor-close': EditorClose,
  'editor-done': EditorDone,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  warning: Warning,
  spinner: Spinner,
  more: More,
};
