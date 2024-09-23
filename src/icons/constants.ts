import { CheckCircle } from './CheckCircle';
import { CheckmarkCircle } from './CheckmarkCircle';
import { ChevronDown } from './ChevronDown';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import { EditorClose } from './EditorClose';
import { EditorDone } from './EditorDone';
import { Error } from './Error';
import { ErrorCircle } from './ErrorCircle';
import { Info } from './Info';
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
  'check-circle': CheckCircle,
  info: Info,
  error: Error,
  'chevron-down': ChevronDown,
};
