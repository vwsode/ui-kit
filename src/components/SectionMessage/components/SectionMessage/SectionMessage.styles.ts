import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { BorderRadius, FontSize, FontWeight, LineHeight, Spacing, ThemeType } from '@/themes';
import { textBody } from '@/themes/typography';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { SectionMessageSelector } from './constants';

import type { SectionMessageAppearance, SectionMessageStyledProps } from './types';

function getSectionMessageStyles(appearance: SectionMessageAppearance, theme: ThemeType) {
  const { colors } = theme;

  switch (appearance) {
    case 'information': {
      return css`
        background-color: ${colors.background.discovery.default};
        color: ${colors.icon.brand};
      `;
    }
    case 'warning': {
      return css`
        background-color: ${colors.background.warning.default};
        color: ${colors.icon.warning.default};
      `;
    }
    case 'success': {
      return css`
        background-color: ${colors.background.success.default};
        color: ${colors.icon.success};
      `;
    }
    case 'discovery': {
      return css`
        color: ${colors.icon.discovery};
        background-color: ${colors.background.discovery.default};
      `;
    }
    case 'error': {
      return css`
        color: ${colors.icon.danger};
        background-color: ${colors.background.danger.default};
      `;
    }
  }
}

export const Root = styled.div.attrs<SectionMessageStyledProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(SectionMessageSelector.ROOT, testId),
}))<SectionMessageStyledProps>`
  padding: ${Spacing.L};
  border-radius: ${BorderRadius.SMALL};
  display: flex;
  align-items: flex-start;
  gap: ${Spacing.L};

  ${({ appearance, theme }) => getSectionMessageStyles(appearance, theme)};
`;

export const Content = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(SectionMessageSelector.CONTENT, testId),
}))<TestableComponent>`
  ${textBody};
  display: flex;
  flex-direction: column;
  gap: ${Spacing.S};
  color: ${({ theme }) => theme.colors.text.default};
`;

export const Title = styled.h5.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(SectionMessageSelector.TITLE, testId),
}))<TestableComponent>`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.default};
  font-size: ${FontSize.S};
  line-height: ${LineHeight.XS};
  font-weight: ${FontWeight.SemiBold};
`;
