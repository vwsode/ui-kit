import { FC, MouseEvent } from 'react';

import { Button } from '@/components/Button';
import { composeTestingPath } from '@/utils';

import { PageSelector } from './constants';

import type { PageProps } from './types';

export const Page: FC<PageProps> = ({ page, onClick, testId, isSelected = false }) => {
  const handleClick = (event: MouseEvent) => {
    onClick?.(event, page);
  };

  return (
    <Button
      testId={composeTestingPath(PageSelector.PAGE, testId)}
      onClick={handleClick}
      appearance="subtle"
      isSelected={isSelected}
    >
      {page}
    </Button>
  );
};

Page.displayName = 'Pagination.Page';
