import { createGlobalStyle } from 'styled-components';

import { fonts } from '../../themes/styles';

export const Global = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
};

${fonts}
`;
