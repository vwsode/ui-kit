import { FC, MouseEvent } from 'react';

import { composeTestingPath } from '@/utils';

import { PageSelector } from './constants';
import { PageButton } from './Page.styles';

import type { PageProps } from './types';

export const Page: FC<PageProps> = ({ page, onClick, testId, isSelected = false, isDisabled = false }) => {
  const handleClick = (event: MouseEvent) => {
    onClick?.(event, Number(page));
  };
  return (
    <PageButton
      isDisabled={isDisabled}
      testId={composeTestingPath(PageSelector.PAGE, testId)}
      onClick={handleClick}
      appearance="subtle"
      isSelected={isSelected}
    >
      {page}
    </PageButton>
  );
};

Page.displayName = 'Pagination.Page';
