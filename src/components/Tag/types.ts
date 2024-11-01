import { ElementType, ReactNode } from 'react';

import { IconVariant } from '@/icons';
import { TestableComponent } from '@/types/controls';

export type TagAppearance = 'rounded' | 'default';

export type TagColor =
  | 'standard'
  | 'blue'
  | 'green'
  | 'teal'
  | 'purple'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'magenta'
  | 'lime'
  | 'gray'
  | 'green-light'
  | 'teal-light'
  | 'blue-light'
  | 'purple-light'
  | 'red-light'
  | 'yellow-light'
  | 'orange-light'
  | 'magenta-light'
  | 'lime-light'
  | 'gray-light';

export type TagProps<C extends ElementType> = {
  /**
   *
   */
  appearance?: TagAppearance;

  /**
   *
   */
  color?: TagColor;

  /**
   *
   */
  isRemovable?: boolean;

  /**
   *
   */
  onRemove?: () => void;

  /**
   *
   */
  iconBefore?: IconVariant | ReactNode;

  /**
   *
   */
  text: string;

  /**
   *
   */
  linkComponent?: C;
} & TestableComponent;

export type StyledTagProps = {
  appearance: TagAppearance;
  color: TagColor;
  isLink: boolean;
} & TestableComponent;
