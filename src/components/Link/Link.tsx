import React, { FC } from 'react';

import { Text } from '../Text';

import { StyledLink } from './Link.style';
import { LinkProps } from './types';

export const Link: FC<LinkProps> = ({ target, to, children, ...props }) => {
  return (
    <StyledLink target={target} to={to} {...props}>
      <Text as="span" type="link" accent="primary">
        {children}
      </Text>
    </StyledLink>
  );
};

Link.displayName = 'Link';
