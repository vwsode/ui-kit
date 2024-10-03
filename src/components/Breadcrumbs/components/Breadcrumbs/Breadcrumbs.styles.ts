import styled from 'styled-components';

import { TESTING_DATA_ATTRIBUTE } from '@/constants/TestUtils';
import { TestableComponent } from '@/types/controls';
import { composeTestingPath } from '@/utils';

import { BreadcrumbsSelector } from '../../constants';

export const Navigation = styled.nav.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BreadcrumbsSelector.BREADCRUMBS_NAV, testId),
}))<TestableComponent>``;

export const List = styled.ul.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BreadcrumbsSelector.BREADCRUMBS_LIST, testId),
}))<TestableComponent>`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li.attrs<TestableComponent>(({ testId }) => ({
  [TESTING_DATA_ATTRIBUTE]: composeTestingPath(BreadcrumbsSelector.BREADCRUMBS_LIST_ITEM, testId),
}))<TestableComponent>`
  display: flex;
  height: fit-content;
  padding: 0;
  box-sizing: border-box;
  align-items: center;

  &:not(:last-child)::after {
    content: '/';
    text-align: center;
    flex-shrink: 0;
    padding-block: 2px;
    padding-inline: 8px;
  }
`;
