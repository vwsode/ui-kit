import styled from 'styled-components';
import { WithTheme } from '../../types/styles';

export const STest = styled.div<WithTheme>`
  color: ${(props) => props.theme.colors.colorNeutralUI2};
`;
