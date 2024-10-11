import { ReactNode } from 'react';

import { TestableComponent } from '@/types/controls';

export type KeyboardCommandProps = {
  /**
   * The property represents a keyboard command.
   */
  command: string | ReactNode;
} & TestableComponent;
