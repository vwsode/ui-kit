import { FontSize, LineHeight } from '../../../themes';
import { TextType } from '../types';

export const MOCK_TEXT = 'Testing...';

export const MOCK_TEXT_TYPES: { type: TextType; fontSize: string; lineHeight: string }[] = [
  { type: 'greeting', fontSize: FontSize.XXL, lineHeight: LineHeight.XXL },
  { type: 'page', fontSize: FontSize.XL, lineHeight: LineHeight.XL },
  { type: 'email-header', fontSize: FontSize.L, lineHeight: LineHeight.L },
  { type: 'page-header', fontSize: FontSize.M, lineHeight: LineHeight.M },
  { type: 'subject', fontSize: FontSize.S, lineHeight: LineHeight.S },
  { type: 'button', fontSize: FontSize.XS, lineHeight: LineHeight.XS },
  { type: 'caption', fontSize: FontSize.XXS, lineHeight: LineHeight.XXS },
];
