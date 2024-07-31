import { FC } from 'react';

import { IconBaseProps, IconSize } from '../types';

const iconSizes: Partial<Record<IconSize, JSX.Element>> = {
  8: (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_8070_10222"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="8"
        height="8"
      >
        <rect width="8" height="8" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_8070_10222)">
        <mask
          id="mask1_8070_10222"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="9"
          height="8"
        >
          <circle cx="3.99182" cy="4" r="4" fill="currentColor" />
        </mask>
        <g mask="url(#mask1_8070_10222)">
          <path
            d="M3.34795 0.0407775C3.40321 0.0295466 3.45762 0.017223 3.51312 0.00720681C3.74343 -0.0320156 3.93699 0.0956098 3.98602 0.318384C4.03382 0.535084 3.91915 0.727886 3.69169 0.784236C3.30391 0.879498 2.91977 0.983505 2.57734 1.1973C1.51733 1.85926 0.915288 2.80507 0.851049 4.07985C0.845912 4.17766 0.845827 4.27571 0.843216 4.37364C0.83552 4.62502 0.679689 4.78761 0.44568 4.7871C0.229228 4.78683 0.0678183 4.62041 0.0551101 4.37634C0.0284593 3.88213 0.090955 3.39572 0.247115 2.93013C0.759991 1.40098 1.80766 0.45061 3.34795 0.0407775Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  ),
  16: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_8070_10224"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_8070_10224)">
        <mask
          id="mask1_8070_10224"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="17"
          height="16"
        >
          <circle cx="7.9837" cy="8" r="8" fill="currentColor" />
        </mask>
        <g mask="url(#mask1_8070_10224)">
          <path
            d="M6.69597 0.0814939C6.80648 0.0590322 6.91529 0.0343851 7.0263 0.0143526C7.48693 -0.0640922 7.87403 0.191159 7.9721 0.636707C8.06769 1.07011 7.83836 1.45571 7.38344 1.56841C6.60787 1.75894 5.83961 1.96695 5.15475 2.39454C3.03473 3.71845 1.83064 5.61008 1.70216 8.15965C1.69189 8.35526 1.69171 8.55136 1.68649 8.74721C1.6711 9.24997 1.35944 9.57515 0.891421 9.57414C0.458517 9.57359 0.135698 9.24076 0.110281 8.75262C0.0569797 7.76419 0.181971 6.79138 0.494291 5.86019C1.52004 2.8019 3.61538 0.901159 6.69597 0.0814939Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  ),
  24: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_8070_10229"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_8070_10229)">
        <mask
          id="mask1_8070_10229"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="25"
          height="24"
        >
          <circle cx="11.9755" cy="12" r="12" fill="currentColor" />
        </mask>
        <g mask="url(#mask1_8070_10229)">
          <path
            d="M10.0439 0.122272C10.2097 0.0885788 10.3729 0.0516082 10.5394 0.0215595C11.2304 -0.0961077 11.811 0.286768 11.9581 0.95509C12.1015 1.60519 11.7575 2.1836 11.0751 2.35265C9.91178 2.63843 8.75938 2.95045 7.73209 3.59184C4.55206 5.57771 2.74593 8.41515 2.55321 12.2395C2.5378 12.5329 2.53754 12.8271 2.52971 13.1208C2.50662 13.875 2.03913 14.3628 1.3371 14.3612C0.687745 14.3604 0.203516 13.8612 0.165391 13.129C0.085439 11.6463 0.272926 10.1871 0.741405 8.79032C2.28004 4.20289 5.42304 1.35177 10.0439 0.122272Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  ),
  48: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_8070_10227"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_8070_10227)">
        <mask
          id="mask1_8070_10227"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="49"
          height="48"
        >
          <circle cx="23.951" cy="24" r="24" fill="currentColor" />
        </mask>
        <g mask="url(#mask1_8070_10227)">
          <path
            d="M20.0878 0.244543C20.4194 0.177158 20.7458 0.103216 21.0788 0.0431191C22.4607 -0.192215 23.622 0.573537 23.9162 1.91018C24.203 3.21038 23.515 4.36719 22.1503 4.7053C19.8236 5.27687 17.5188 5.90091 15.4642 7.18369C9.10412 11.1554 5.49185 16.8303 5.10642 24.479C5.07559 25.0659 5.07508 25.6541 5.05942 26.2417C5.01324 27.75 4.07826 28.7255 2.6742 28.7225C1.37549 28.7208 0.407032 27.7224 0.330783 26.2579C0.170878 23.2926 0.545852 20.3742 1.48281 17.5806C4.56007 8.40577 10.8461 2.70354 20.0878 0.244543Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  ),
  96: (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_8070_10230"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="96"
        height="96"
      >
        <rect width="96" height="96" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_8070_10230)">
        <mask
          id="mask1_8070_10230"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="97"
          height="96"
        >
          <circle cx="47.9021" cy="48" r="48" fill="currentColor" />
        </mask>
        <g mask="url(#mask1_8070_10230)">
          <path
            d="M40.1757 0.489025C40.8387 0.354254 41.4916 0.206372 42.1577 0.0861769C44.9214 -0.384492 47.2441 1.14701 47.8325 3.8203C48.406 6.42071 47.03 8.73432 44.3005 9.41053C39.6471 10.5537 35.0375 11.8018 30.9284 14.3673C18.2082 22.3108 10.9837 33.6605 10.2128 48.9579C10.1512 50.1316 10.1502 51.3082 10.1188 52.4833C10.0265 55.4999 8.15652 57.451 5.3484 57.4449C2.75098 57.4416 0.814064 55.4446 0.661566 52.5158C0.341757 46.5852 1.0917 40.7484 2.96562 35.1612C9.12014 16.8115 21.6922 5.40702 40.1757 0.489025Z"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  ),
};

export const Spinner: FC<IconBaseProps> = ({ size }) => {
  return iconSizes[size];
};
