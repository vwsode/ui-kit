import { FC } from 'react';

import { IconBaseProps, IconSize } from '../types';

const iconSizes: Partial<Record<IconSize, JSX.Element>> = {
  24: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00494 10.995L13.5979 6.40199C13.6895 6.30854 13.7987 6.23416 13.9192 6.18318C14.0397 6.13219 14.1692 6.10559 14.3 6.10493C14.4309 6.10427 14.5605 6.12956 14.6816 6.17932C14.8026 6.22909 14.9125 6.30236 15.0051 6.39488C15.0976 6.48741 15.1708 6.59736 15.2206 6.71837C15.2704 6.83939 15.2957 6.96907 15.295 7.09992C15.2943 7.23077 15.2677 7.36019 15.2168 7.48069C15.1658 7.6012 15.0914 7.7104 14.9979 7.80199L11.0979 11.702L14.9979 15.602C15.1805 15.7883 15.2822 16.0391 15.2809 16.2999C15.2795 16.5607 15.1753 16.8105 14.9909 16.995C14.8065 17.1794 14.5567 17.2836 14.2959 17.2849C14.035 17.2862 13.7842 17.1846 13.5979 17.002L9.00494 12.41C8.81747 12.2225 8.71216 11.9682 8.71216 11.703C8.71216 11.4378 8.81747 11.1835 9.00494 10.996V10.995Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export const ChevronLeft: FC<IconBaseProps> = ({ size }) => {
  return iconSizes[size];
};
