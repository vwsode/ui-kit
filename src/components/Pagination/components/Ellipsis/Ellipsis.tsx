import { FC } from 'react';

import { ELLIPSIS_SYMBOL } from './constants';
import { Root } from './Ellipsis.styles';

import type { EllipsisProps } from './types';

export const Ellipsis: FC<EllipsisProps> = ({ testId }) => {
  return (
    <Root tabIndex={-1} testId={testId}>
      {ELLIPSIS_SYMBOL}
    </Root>
  );
};

Ellipsis.displayName = 'Pagination.Ellipsis';
