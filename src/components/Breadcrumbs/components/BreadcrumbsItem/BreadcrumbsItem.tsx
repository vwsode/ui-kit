import { isString } from 'lodash';
import { ComponentProps, ElementType } from 'react';

import { Icon, IconVariant } from '@/icons';

import { Root, Text } from './BreadcrumbsItem.styles';

import type { BreadcrumbsItemProps } from '../../types';

export const BreadcrumbsItem = <C extends ElementType = 'a'>(
  props: BreadcrumbsItemProps<C> & Omit<ComponentProps<C>, keyof BreadcrumbsItemProps<C>>,
) => {
  const { text, component = 'a', truncationWidth, iconAfter, iconBefore, ...rest } = props;

  return (
    <Root href="#" as={component} {...rest} truncationWidth={truncationWidth}>
      {isString(iconBefore) ? <Icon type={iconBefore as IconVariant} size={24} /> : iconBefore}
      <Text>{text}</Text>
      {isString(iconAfter) ? <Icon type={iconAfter as IconVariant} size={24} /> : iconAfter}
    </Root>
  );
};

BreadcrumbsItem.displayName = 'Breadcrumbs.Item';
