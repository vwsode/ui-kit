import React, { FC } from 'react';

import { iconComponentsMap } from './constants';
import { IconWrapper } from './Icon.style';
import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ type, className, testId, size, fill }) => {
  const Component = iconComponentsMap[`${type}-${size}`];

  return (
    <IconWrapper className={className} type={type} testId={testId} size={size} fill={fill}>
      <Component />
    </IconWrapper>
  );
};

Icon.displayName = 'Icon';
