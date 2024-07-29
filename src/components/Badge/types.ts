import { TestableComponent } from '../../types/controls';

export type BadgeAppearance = 'default' | 'primary' | 'primary-inverted' | 'important' | 'added' | 'removed';

export type BadgeProps = {
  /**
   * Defines the appearance of the badge.
   */
  appearance: BadgeAppearance;
  /**
   * The value displayed on the badge.
   */
  value: number;
  /**
   * Limits the value, substitutes `+` if the `value` is greater than the maximum number
   * The default max value of a badge is 99.
   */
  max?: number | false;
} & TestableComponent;

export type StyledBadgeProps = Omit<BadgeProps, 'value'>;

export type StyledBadgeTextProps = TestableComponent;
