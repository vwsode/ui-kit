import { FC } from 'react';

import { IconBaseProps, IconSize } from '../types';

const iconSizes: Partial<Record<IconSize, JSX.Element>> = {
  24: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9949 10.995C15.1824 11.1825 15.2877 11.4368 15.2877 11.702C15.2877 11.9672 15.1824 12.2215 14.9949 12.409L10.4019 17.002C10.2156 17.1846 9.96482 17.2862 9.70399 17.2849C9.44317 17.2836 9.19339 17.1794 9.00896 16.995C8.82452 16.8105 8.72032 16.5608 8.71901 16.2999C8.71769 16.0391 8.81936 15.7883 9.00192 15.602L12.9019 11.702L9.00192 7.80201C8.81936 7.61572 8.71769 7.36491 8.71901 7.10408C8.72032 6.84325 8.82452 6.59348 9.00896 6.40904C9.19339 6.22461 9.44317 6.12041 9.70399 6.11909C9.96482 6.11777 10.2156 6.21944 10.4019 6.40201L14.9949 10.995Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export const ChevronRight: FC<IconBaseProps> = ({ size }) => {
  return iconSizes[size];
};
