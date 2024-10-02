import { FC } from 'react';

import { ExpandButtonProps } from '../../types';

import { Root } from './ExpandButton.styles';

export const ExpandButton: FC<ExpandButtonProps> = ({ onClick, testId }) => {
  return (
    <Root onClick={onClick} testId={testId}>
      …
    </Root>
  );
};

ExpandButton.displayName = 'Breadcrumbs.ExpandButton';
