import { FC } from 'react';

import { Root } from './Ellipsis.styles';
import { EllipsisProps } from './types';

export const Ellipsis: FC<EllipsisProps> = ({ testId }) => {
  return (
    <Root tabIndex={-1} testId={testId}>
      ...
    </Root>
  );
};

Ellipsis.displayName = 'Pagination.Ellipsis';
