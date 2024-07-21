import React, { FC } from 'react';

import { StyledText } from './Text.style';
import { TextProps } from './types';

export const Text: FC<TextProps> = (props) => {
  return <StyledText {...props} />;
};

Text.displayName = 'Text';
