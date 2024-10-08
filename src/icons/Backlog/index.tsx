import { FC } from 'react';

import { IconBaseProps, IconSize } from '../types';

const iconSizes: Partial<Record<IconSize, JSX.Element>> = {
  24: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 19.002C5 19 17 19 17 19V16.998C17 17 5 17 5 17V19.002ZM3 16.998C3 15.894 3.895 15 4.994 15H17.006C18.107 15 19 15.898 19 16.998V19.002C19.0003 19.5313 18.7904 20.039 18.4165 20.4137C18.0426 20.7883 17.5353 20.9992 17.006 21H4.994C4.46479 20.9989 3.95762 20.788 3.58379 20.4134C3.20995 20.0388 3 19.5312 3 19.002V16.998Z"
        fill="currentColor"
      />
      <path d="M5 15H17V13H5V15ZM3 11H19V17H3V11Z" fill="currentColor" />
      <path
        d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9V11.002ZM5 8.998C5 7.894 5.895 7 6.994 7H19.006C20.107 7 21 7.898 21 8.998V11.002C21.0003 11.5313 20.7904 12.039 20.4165 12.4137C20.0426 12.7883 19.5353 12.9992 19.006 13H6.994C6.46479 12.9989 5.95762 12.788 5.58379 12.4134C5.20995 12.0388 5 11.5312 5 11.002V8.998Z"
        fill="currentColor"
      />
      <path
        d="M5 5V7H17V5H5ZM3 4.998C3 3.894 3.895 3 4.994 3H17.006C18.107 3 19 3.898 19 4.998V9H3V4.998Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export const Backlog: FC<IconBaseProps> = ({ size }) => {
  return iconSizes[size];
};
