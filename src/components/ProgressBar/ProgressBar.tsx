import { FC } from 'react';

import { Progress, Root } from './ProgressBar.style';
import { ProgressBarProps } from './types';

export const ProgressBar: FC<ProgressBarProps> = ({
  testId,
  isIndeterminate = false,
  value = 0,
  appearance = 'default',
}) => {
  return (
    <Root role="progressbar" appearance={appearance} testId={testId}>
      <Progress isIndeterminate={isIndeterminate} appearance={appearance} value={value} testId={testId} />
    </Root>
  );
};

ProgressBar.displayName = 'ProgressBar';
