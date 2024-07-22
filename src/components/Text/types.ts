import { PropsWithClassName, TestableComponent } from '../../types/controls';
import { WithTheme } from '../../types/styles';

export type AsType = keyof JSX.IntrinsicElements | React.ComponentType;

export type TextType = 'greeting' | 'page' | 'email-header' | 'page-header' | 'subject' | 'button' | 'caption' | 'link';

export type Accent = 'primary' | 'secondary' | 'tertiary';

export type WhiteSpace = 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
export type WordBreak = 'normal' | 'break-all' | 'break-word' | 'keep-all';

export type BaseTextProps = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  as?: AsType;
  /**
   * Text content to be rendered inside the component
   */
  children?: React.ReactNode;
  /**
   * Type of text to be displayed
   */
  type: TextType;
  /**
   * Accent color for the text
   */
  accent: Accent;
  /**
   * CSS 'white-space' property variants
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
   */
  whiteSpace?: WhiteSpace;
  /**
   * CSS 'word-break' property variants
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
   */
  wordBreak?: WordBreak;
} & TestableComponent;

export type TextProps = PropsWithClassName & BaseTextProps;

export type StyledTextProps = WithTheme<TextProps>;
