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
        background-color: ${colors.colorBackgroundNeutralDefault};
        color: ${colors.colorTextDefault};

        &:hover {
          background-color: ${colors.colorBackgroundNeutralHover};
        }

        &:active {
          background-color: ${colors.colorBackgroundNeutralPress};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.colorBackgroundNeutralDefault};
          }
        `}
      `;
    }
    case 'primary': {
      return css`
        background-color: ${colors.colorBackgroundBrandBoldDefault};
        color: ${colors.colorTextInverse};

        ${IconWrapper} {
          color: ${colors.colorTextInverse};
        }

        &:hover {
          background-color: ${colors.colorBackgroundBrandBoldHover};
        }

        &:active {
          background-color: ${colors.colorBackgroundBrandBoldPress};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.colorBackgroundBrandBoldDefault};
          }
        `}
      `;
    }
    case 'subtle': {
      return css`
        background-color: transparent;
        color: ${colors.colorTextDefault};

        ${IconWrapper} {
          color: ${colors.colorTextDefault};
        }

        &:hover {
          background-color: ${colors.colorBackgroundNeutralSubtleHover};
        }

        &:active {
          background-color: ${colors.colorBackgroundNeutralSubtlePress};
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
        color: ${colors.colorLinkDefault};

        ${IconWrapper} {
          color: ${colors.colorLinkDefault};
        }

        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: ${colors.colorLinkPress};
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
        color: ${colors.colorTextSubtle};

        ${IconWrapper} {
          color: ${colors.colorTextSubtle};
        }

        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: ${colors.colorTextDefault};
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
        background-color: ${colors.colorBackgroundWarningBoldDefault};
        color: ${colors.colorTextWarningInverse};

        ${IconWrapper} {
          color: ${colors.colorIconWarningInverse};
        }

        &:hover {
          background-color: ${colors.colorBackgroundWarningBoldHover};
        }

        &:active {
          background-color: ${colors.colorBackgroundWarningBoldPress};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.colorBackgroundWarningBoldDefault};
          }
        `}
      `;
    }
    case 'danger': {
      return css`
        background-color: ${colors.colorBackgroundDangerBoldDefault};
        color: ${colors.colorTextInverse};

        ${IconWrapper} {
          color: ${colors.colorTextInverse};
        }

        &:hover {
          background-color: ${colors.colorBackgroundDangerBoldHover};
        }

        &:active {
          background-color: ${colors.colorBackgroundDangerBoldPress};
        }

        ${isLoading &&
        css`
          cursor: wait;

          &:hover,
          &:active {
            background-color: ${colors.colorBackgroundDangerBoldDefault};
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
    outline: ${StrokeWidth.THICK} solid ${({ theme }) => theme.colors.colorBorderFocused};
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
      background-color: ${theme.colors.colorBackgroundSelectedDefault};
      color: ${theme.colors.colorTextSelected};

      ${IconWrapper} {
        color: ${theme.colors.colorTextSelected};
      }

      &:hover,
      &:active {
        background-color: ${theme.colors.colorBackgroundSelectedDefault};
        text-decoration: none;
        color: ${theme.colors.colorTextSelected};
      }
    `}

    ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background-color: ${theme.colors.colorBackgroundDisabled};
      color: ${theme.colors.colorTextDisabled};
      cursor: not-allowed;

      ${IconWrapper} {
        color: ${theme.colors.colorTextDisabled};
      }

      &:hover,
      &:active {
        background-color: ${theme.colors.colorBackgroundDisabled};
        text-decoration: none;
        color: ${theme.colors.colorTextDisabled};
      }
    `}
`;
