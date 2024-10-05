import styled, { css } from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils.ts';
import { BorderRadius, Duration, Spacing, StrokeWidth, ThemeType } from '@/themes';
import { composeTestingPath } from '@/utils';
import { textButton } from '@themes/typography.ts';

import { IconWrapper } from '../../icons/Icon.style.ts';

import { ButtonSelector } from './constants.ts';

import type { ButtonAppearance, ButtonProps, ButtonSpacing } from './types.ts';

enum ButtonDefault {
  Height = '32px',
}

enum ButtonCompact {
  Height = '24px',
}

enum ButtonNone {
  Height = '24px',
}

const getSpacingStyles = (spacing: ButtonSpacing, iconOnly: boolean) => {
  switch (spacing) {
    case 'default': {
      return css`
        ${textButton};
        padding: ${Spacing.S_NUDGE} ${Spacing.M};
        border-radius: ${BorderRadius.SMALL};
        height: ${ButtonDefault.Height};

        ${iconOnly &&
        css`
          padding: ${Spacing.XS};
        `}
      `;
    }
    case 'compact': {
      return css`
        ${textButton};
        padding: ${Spacing.XXS} ${Spacing.M};
        border-radius: ${BorderRadius.SMALL};
        height: ${ButtonCompact.Height};

        ${iconOnly &&
        css`
          padding: 0 ${Spacing.XS};
        `}
      `;
    }
    case 'none': {
      return css`
        ${textButton};
        height: ${ButtonNone.Height};
      `;
    }
  }
};

const getAppearanceStyles = (
  appearance: ButtonAppearance,
  isSelected: boolean,
  isDisabled: boolean,
  isLoading: boolean,
  theme: ThemeType,
) => {
  const { colors } = theme;

  switch (appearance) {
    case 'default': {
      return css`
        background-color: ${colors.background.neutral.default};
        color: ${colors.text.default};

        &:hover {
          background-color: ${colors.background.neutral.hovered};
        }

        &:active {
          background-color: ${colors.background.neutral.pressed};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.background.neutral.default};
          }
        `}
      `;
    }
    case 'primary': {
      return css`
        background-color: ${colors.background.brand.bold.default};
        color: ${colors.text.inverse};

        ${IconWrapper} {
          color: ${colors.icon.inverse};
        }

        &:hover {
          background-color: ${colors.background.brand.bold.hovered};
        }

        &:active {
          background-color: ${colors.background.brand.bold.pressed};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.background.brand.bold.default};
          }
        `}
      `;
    }
    case 'subtle': {
      return css`
        background-color: transparent;
        color: ${colors.text.default};

        ${IconWrapper} {
          color: ${colors.text.default};
        }

        &:hover {
          background-color: ${colors.background.neutral.subtle.hovered};
        }

        &:active {
          background-color: ${colors.background.neutral.subtle.pressed};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: transparent;
          }
        `}
      `;
    }
    case 'link': {
      return css`
        background-color: transparent;
        color: ${colors.link.default};

        ${IconWrapper} {
          color: ${colors.link.default};
        }

        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: ${colors.link.pressed};
          text-decoration: underline;
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: transparent;
          }
        `}
      `;
    }
    case 'subtle-link': {
      return css`
        background-color: transparent;
        color: ${colors.text.subtle};

        ${IconWrapper} {
          color: ${colors.text.subtle};
        }

        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: ${colors.text.default};
          text-decoration: underline;
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: transparent;
          }
        `}
      `;
    }
    case 'warning': {
      return css`
        background-color: ${colors.background.warning.bold.default};
        color: ${colors.text.warning.inverse};

        ${IconWrapper} {
          color: ${colors.icon.warning.inverse};
        }

        &:hover {
          background-color: ${colors.background.warning.bold.hovered};
        }

        &:active {
          background-color: ${colors.background.warning.bold.pressed};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.background.warning.bold.default};
          }
        `}
      `;
    }
    case 'danger': {
      return css`
        background-color: ${colors.background.danger.bold.default};
        color: ${colors.text.inverse};

        ${IconWrapper} {
          color: ${colors.icon.inverse};
        }

        &:hover {
          background-color: ${colors.background.danger.bold.hovered};
        }

        &:active {
          background-color: ${colors.background.danger.bold.pressed};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.background.danger.bold.default};
          }
        `}
      `;
    }
  }
};

export const Root = styled.button.attrs<ButtonProps>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(ButtonSelector.BUTTON, testId),
}))<ButtonProps>`
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${Spacing.XS};
  width: fit-content;

  ${({ appearance, isSelected, isDisabled, isLoading, theme }) =>
    getAppearanceStyles(appearance, isSelected, isDisabled, isLoading, theme)};
  ${({ spacing, iconOnly }) => getSpacingStyles(spacing, iconOnly)};

  transition-property: background-color, color, border-color;
  transition-duration: ${Duration.Quick}ms;

  &:focus-visible {
    outline: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.border.focused};
    outline-offset: 2px;
    position: relative;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.background.selected.default};
      color: ${theme.colors.text.selected};

      ${IconWrapper} {
        color: ${theme.colors.text.selected};
      }

      &:hover,
      &:active {
        background-color: ${theme.colors.background.selected.default};
        text-decoration: none;
        color: ${theme.colors.text.selected};
      }
    `}

    ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background-color: ${theme.colors.background.disabled};
      color: ${theme.colors.text.disabled};
      cursor: not-allowed;

      ${IconWrapper} {
        color: ${theme.colors.icon.disabled};
      }

      &:hover,
      &:active {
        background-color: ${theme.colors.background.disabled};
        text-decoration: none;
        color: ${theme.colors.text.disabled};
      }
    `}
`;
