import { fireEvent, render, screen } from '@testing-library/react';

import { ButtonSelector } from '@/components/Button';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { composeTestingPath } from '@/utils';

import { NavigatorDirection, Pagination, PaginationProps, PaginationSelector } from '../';

describe('Pagination component: ', () => {
  const defaultProps: PaginationProps = {
    pages: Array.from({ length: 10 }, (v, i) => i + 1),
    onChange: jest.fn(),
    defaultSelectedPage: 1,
    label: 'Pagination Label',
    isDisabled: false,
    max: 1,
    currentPage: 1,
    siblingCount: 1,
  };

  const getPagination = (): HTMLElement => {
    return screen.getByTestId(PaginationSelector.PAGINATION);
  };

  const getAllPaginationPages = (): HTMLElement[] => {
    return screen.getAllByTestId(composeTestingPath(ButtonSelector.BUTTON, PaginationSelector.PAGE));
  };

  const getPaginationPageByIndex = (page: number): HTMLElement => {
    return screen
      .getAllByTestId(composeTestingPath(ButtonSelector.BUTTON, PaginationSelector.PAGE))
      .filter((_, index) => page === index)[0];
  };

  const getPaginationNavigator = (direction: NavigatorDirection): HTMLElement => {
    const [prev, next] = screen.getAllByTestId(composeTestingPath(ButtonSelector.BUTTON, PaginationSelector.NAVIGATOR));

    return direction === 'next' ? next : prev;
  };

  //   const getPaginationEllipses = (): HTMLElement[] => {
  //     return screen.getAllByTestId(PaginationSelector.ELLIPSIS);
  //   };

  it('should render the Pagination component correctly', () => {
    render(
      <ThemeProvider themeName="standard">
        <Pagination {...defaultProps} />
      </ThemeProvider>,
    );

    expect(getPagination()).toHaveAttribute('aria-label', defaultProps.label);
    expect(getPagination()).toBeInTheDocument();
  });

  it('should render the correct number of pages and navigators', () => {
    render(
      <ThemeProvider themeName="standard">
        <Pagination {...defaultProps} />
      </ThemeProvider>,
    );

    expect(getAllPaginationPages().length).toBeGreaterThan(1);
    expect(getPaginationNavigator('next')).toBeInTheDocument();
    expect(getPaginationNavigator('prev')).toBeInTheDocument();
  });

  it('should call onChange when a page is clicked', () => {
    const onChangeMock = jest.fn();

    render(
      <ThemeProvider themeName="standard">
        <Pagination {...defaultProps} onChange={onChangeMock} />
      </ThemeProvider>,
    );

    fireEvent.click(getPaginationPageByIndex(1));
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object), 2);
  });

  it('should call onChange when the next or prev buttons are clicked', () => {
    const onChangeMock = jest.fn();

    render(
      <ThemeProvider themeName="standard">
        <Pagination {...defaultProps} onChange={onChangeMock} />
      </ThemeProvider>,
    );

    fireEvent.click(getPaginationNavigator('next'));

    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object), 2);

    fireEvent.click(getPaginationNavigator('prev'));

    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object), 1);
  });

  it('should disable next button on the last page', () => {
    const props: PaginationProps = {
      ...defaultProps,
      defaultSelectedPage: 10,
    };

    render(
      <ThemeProvider themeName="standard">
        <Pagination {...props} />
      </ThemeProvider>,
    );

    expect(getPaginationNavigator('next')).toBeDisabled();
  });

  test('should disable prev button on the first page', () => {
    render(
      <ThemeProvider themeName="standard">
        <Pagination {...defaultProps} />
      </ThemeProvider>,
    );

    expect(getPaginationNavigator('prev')).toBeDisabled();
  });

  test('should not call onChange when a disabled button is clicked', () => {
    const onChangeMock = jest.fn();

    render(
      <ThemeProvider themeName="standard">
        <Pagination {...defaultProps} onChange={onChangeMock} isDisabled={true} />
      </ThemeProvider>,
    );

    fireEvent.click(getPaginationPageByIndex(2));

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
