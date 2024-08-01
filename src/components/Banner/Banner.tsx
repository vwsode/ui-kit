import React, { FC } from 'react';

import { Content, Root, Wrapper } from './Banner.style';
import { BannerProps } from './types';

export const Banner: FC<BannerProps> = ({ children, appearance, testId, icon }) => {
  return (
    <Root appearance={appearance} testId={testId}>
      <Wrapper>
        {icon}
        <Content testId={testId}>{children}</Content>
      </Wrapper>
    </Root>
  );
};

Banner.displayName = 'Banner';
