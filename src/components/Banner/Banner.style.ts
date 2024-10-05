import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { Spacing, ThemeType } from '@/themes';
import { textBanner } from '@/themes/typography';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { BannerSelector } from './constants';

import type { BannerAppearance, StyledBannerProps } from './types';

const getBannerStyles = (appearance: BannerAppearance, theme: ThemeType) => {
  const { colors } = theme;

  switch (appearance) {
    case 'announcement': {
      return css`
        background-color: ${colors.background.neutral.bold.default};
        color: ${colors.text.inverse};
      `;
    }
    case 'error': {
      return css`
        background-color: ${colors.background.danger.bold.default};
        color: ${colors.text.inverse};
      `;
    }
    case 'warning': {
      return css`
        background-color: ${colors.background.warning.bold.default};
        color: ${colors.text.warning.inverse};
      `;
    }
  }
};

export const Root = styled.div.attrs<StyledBannerProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BannerSelector.BANNER, testId),
}))<StyledBannerProps>`
  padding: ${Spacing.M};
  width: 100%;
  ${({ theme, appearance }) => getBannerStyles(appearance, theme)};
`;

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: ${Spacing.XS};
`;

export const Content = styled.div.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BannerSelector.BANNER_CONTENT, testId),
}))<TestableComponent>`
  ${textBanner}
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
