import { ComponentProps, ElementType } from 'react';

import { Icon, IconVariant } from '@/icons';

import { ButtonClose, IconWrapper, Root, Text } from './Tag.styles';
import { TagProps } from './types';

export const Tag = <C extends ElementType = 'span'>(
  props: TagProps<C> & Omit<ComponentProps<C>, keyof TagProps<C>>,
) => {
  const {
    appearance = 'default',
    color = 'standard',
    text,
    linkComponent: Component = 'span',
    isRemovable,
    onRemove,
    iconBefore,
    testId,
    ...rest
  } = props;

  const isLink = Component === 'a' || typeof Component !== 'string';

  return (
    <Root isLink={isLink} as={Component} testId={testId} appearance={appearance} color={color} {...rest}>
      {iconBefore && (
        <IconWrapper testId={testId}>
          {typeof iconBefore === 'string' ? <Icon type={iconBefore as IconVariant} size={16} /> : iconBefore}
        </IconWrapper>
      )}
      <Text testId={testId}>{text}</Text>
      {isRemovable && (
        <ButtonClose onClick={onRemove} testId={testId}>
          <Icon type="editor-close" size={16} />
        </ButtonClose>
      )}
    </Root>
  );
};

Tag.displayName = 'Tag';
