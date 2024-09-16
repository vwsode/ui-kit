import { FC, MouseEvent } from 'react';

import { Ellipsis } from '../Ellipsis';
import { Navigator, NavigatorDirection } from '../Navigator';
import { Page } from '../Page';

import { Root } from './Pagination.styles';
import { PaginationProps } from './types';

export const Pagination: FC<PaginationProps> = ({ pages, currentPage }) => {
  const handlePageChange = (event: MouseEvent, page: number) => {};

  const handleNavigatorClick = (event: MouseEvent, direction: NavigatorDirection) => {
    handlePageChange(event, direction === 'next' ? currentPage + 1 : currentPage - 1);
  };

  return (
    <Root>
      <Navigator onClick={handleNavigatorClick} direction="prev" isDisabled />
      <Ellipsis />
      {pages.map((item, index) => (
        <Page onClick={handlePageChange} key={index} page={item} isSelected={currentPage === item} />
      ))}
      <Ellipsis />
      <Navigator onClick={handleNavigatorClick} direction="next" />
    </Root>
  );
};

Pagination.displayName = 'Pagination';
