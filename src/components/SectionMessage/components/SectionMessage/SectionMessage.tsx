import { isString } from 'lodash';
import { FC } from 'react';

import { Icon, IconVariant } from '@/icons';

import { Actions } from '../Actions';

import { SectionMessageIconMap, SectionMessageSelector } from './constants';
import { Root, Content, Title } from './SectionMessage.styles';

import type { SectionMessageProps } from './types';

const SectionMessageComponent: FC<SectionMessageProps> = ({
  children,
  title,
  testId,
  icon,
  appearance = 'information',
}) => {
  return (
    <Root appearance={appearance} testId={testId}>
      {!icon && <Icon testId={SectionMessageSelector.ICON} type={SectionMessageIconMap[appearance]} size={24} />}
      {isString(icon) ? <Icon type={icon as IconVariant} size={24} /> : icon}
      <Content testId={testId}>
        <Title testId={testId}>{title}</Title>
        {children}
      </Content>
    </Root>
  );
};

SectionMessageComponent.displayName = 'SectionMessage';

export const SectionMessage = Object.assign(SectionMessageComponent, {
  Actions: Actions,
});
