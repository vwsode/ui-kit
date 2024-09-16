import React, { FC } from 'react';

import { StyledStoryPage } from './StoryPage.style';
import { StoryPageProps } from './types';

export const StoryPage: FC<StoryPageProps> = ({ children }) => {
  return <StyledStoryPage>{children}</StyledStoryPage>;
};

StoryPage.displayName = 'StoryPage';
