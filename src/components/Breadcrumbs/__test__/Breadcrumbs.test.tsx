import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/contexts/ThemeContext';

import { Breadcrumbs } from '../components/Breadcrumbs';
import { BreadcrumbsItem } from '../components/BreadcrumbsItem';
import { BreadcrumbsSelector } from '../constants';

import { BREADCRUMBS_ITEMS } from './mocks';

describe('Breadcrumbs component: ', () => {
  it('should render component correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Breadcrumbs isExpanded>
          {BREADCRUMBS_ITEMS.map((breadcrumb, index) => (
            <BreadcrumbsItem {...breadcrumb} key={index} />
          ))}
        </Breadcrumbs>
      </ThemeProvider>,
    );

    expect(screen.getAllByTestId(BreadcrumbsSelector.BREADCRUMBS_ITEM).length).toBe(BREADCRUMBS_ITEMS.length);
  });

  it('shows ellipsis when breadcrumbs are collapsed', () => {
    render(
      <ThemeProvider themeName="standard">
        <Breadcrumbs visibleAfterCollapse={1} visibleBeforeCollapse={1}>
          {BREADCRUMBS_ITEMS.map((breadcrumb, index) => (
            <BreadcrumbsItem {...breadcrumb} key={index} />
          ))}
        </Breadcrumbs>
      </ThemeProvider>,
    );

    expect(screen.getAllByTestId(BreadcrumbsSelector.BREADCRUMBS_ITEM).length).toBe(2);
    expect(screen.getByTestId(BreadcrumbsSelector.EXPAND_BUTTON)).toBeInTheDocument();
  });

  it('expands breadcrumbs when ExpandButton is clicked', () => {
    render(
      <ThemeProvider themeName="standard">
        <Breadcrumbs visibleAfterCollapse={1} visibleBeforeCollapse={1}>
          {BREADCRUMBS_ITEMS.map((breadcrumb, index) => (
            <BreadcrumbsItem {...breadcrumb} key={index} />
          ))}
        </Breadcrumbs>
      </ThemeProvider>,
    );

    const expandButton = screen.getByTestId(BreadcrumbsSelector.EXPAND_BUTTON);
    fireEvent.click(expandButton);

    expect(screen.getAllByTestId(BreadcrumbsSelector.BREADCRUMBS_ITEM).length).toBe(BREADCRUMBS_ITEMS.length);
    expect(expandButton).not.toBeInTheDocument();
  });

  it('renders all breadcrumbs if there are fewer than visibleBeforeCollapse + visibleAfterCollapse', () => {
    render(
      <ThemeProvider themeName="standard">
        <Breadcrumbs visibleBeforeCollapse={2} visibleAfterCollapse={2}>
          <BreadcrumbsItem text="Item 1" href="#" />
          <BreadcrumbsItem text="Item 2" href="#" />
        </Breadcrumbs>
      </ThemeProvider>,
    );

    expect(screen.getAllByTestId(BreadcrumbsSelector.BREADCRUMBS_ITEM).length).toBe(2);
  });
});
