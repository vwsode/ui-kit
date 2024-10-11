import { FC } from 'react';

import { Root } from './KeyboardCommand.styles';
import { KeyboardCommandProps } from './types';

export const KeyboardCommand: FC<KeyboardCommandProps> = ({ command, testId }) => {
  return <Root testId={testId}>{command}</Root>;
};

KeyboardCommand.displayName = 'KeyboardCommand';
