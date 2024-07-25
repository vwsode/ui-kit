import React, { FC } from 'react';
import { Normalize } from 'styled-normalize';

import { Global } from './GlobalStyles.style';
import { GlobalStylesProps } from './types';

export const GlobalStyles: FC<GlobalStylesProps> = ({ children }) => {
  return (
    <>
      <Normalize />
      <Global />
      {children}
    </>
  );
};

GlobalStyles.displayName = 'GlobalStyles';
