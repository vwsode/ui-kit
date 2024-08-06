import { render, screen, fireEvent } from '@testing-library/react';

import { Tab, TabList, TabPanel, Tabs } from '..';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { TabsSelector } from '../constants';

import { MOCK_OPTIONS } from './mock';

describe('Tabs component: ', () => {
  const getTabItemByIndex = (index: number): HTMLElement => {
    return screen.getAllByTestId(TabsSelector.TAB_ITEM, {
      exact: false,
    })[index];
  };

  const getTabPanel = () => screen.getByTestId(TabsSelector.TAB_PANEL);

  const changeTab = (index: number): void => {
    fireEvent.click(getTabItemByIndex(index));
  };

  it('should render component with options correctly', () => {
    const handleChange = jest.fn();
    const selected = 0;

    render(
      <ThemeProvider themeName="standard">
        <Tabs id="tabs" selected={selected} onChange={handleChange}>
          <TabList>
            {MOCK_OPTIONS.map(({ label }, index) => (
              <Tab index={index} key={index}>
                {label}
              </Tab>
            ))}
          </TabList>
          {MOCK_OPTIONS.map(({ content }, index) => (
            <TabPanel index={index} key={index}>
              {content}
            </TabPanel>
          ))}
        </Tabs>
      </ThemeProvider>,
    );

    let indexOfTestableTab = 0;

    expect(getTabPanel()).toBeInTheDocument();
    expect(getTabPanel()).toHaveTextContent(MOCK_OPTIONS[indexOfTestableTab].content);

    indexOfTestableTab = 1;
    changeTab(indexOfTestableTab);

    expect(getTabPanel()).toBeInTheDocument();
    expect(getTabPanel()).toHaveTextContent(MOCK_OPTIONS[indexOfTestableTab].content);
  });

  it('should change tab content when a different tab is clicked', () => {
    const handleChange = jest.fn();
    const selected = 0;

    render(
      <ThemeProvider themeName="standard">
        <Tabs id="tabs" selected={selected} onChange={handleChange}>
          <TabList>
            {MOCK_OPTIONS.map(({ label }, index) => (
              <Tab index={index} key={index}>
                {label}
              </Tab>
            ))}
          </TabList>
          {MOCK_OPTIONS.map(({ content }, index) => (
            <TabPanel index={index} key={index}>
              {content}
            </TabPanel>
          ))}
        </Tabs>
      </ThemeProvider>,
    );

    expect(getTabPanel()).toHaveTextContent(MOCK_OPTIONS[0].content);

    changeTab(1);
    expect(getTabPanel()).toHaveTextContent(MOCK_OPTIONS[1].content);
  });

  it('should call onChange when tab is changed', () => {
    const handleChange = jest.fn();
    const selected = 0;

    render(
      <ThemeProvider themeName="standard">
        <Tabs id="tabs" selected={selected} onChange={handleChange}>
          <TabList>
            {MOCK_OPTIONS.map(({ label }, index) => (
              <Tab index={index} key={index}>
                {label}
              </Tab>
            ))}
          </TabList>
          {MOCK_OPTIONS.map(({ content }, index) => (
            <TabPanel index={index} key={index}>
              {content}
            </TabPanel>
          ))}
        </Tabs>
      </ThemeProvider>,
    );

    changeTab(1);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should have all tabs accessible', () => {
    render(
      <ThemeProvider themeName="standard">
        <Tabs id="tabs" selected={0} onChange={() => {}}>
          <TabList>
            {MOCK_OPTIONS.map(({ label }, index) => (
              <Tab index={index} key={index} data-testid={TabsSelector.TAB_ITEM}>
                {label}
              </Tab>
            ))}
          </TabList>
          {MOCK_OPTIONS.map(({ content }, index) => (
            <TabPanel index={index} key={index} data-testid={TabsSelector.TAB_PANEL}>
              {content}
            </TabPanel>
          ))}
        </Tabs>
      </ThemeProvider>,
    );

    const tabItems = screen.getAllByTestId(TabsSelector.TAB_ITEM);
    expect(tabItems.length).toBe(MOCK_OPTIONS.length);

    tabItems.forEach((tab, index) => {
      expect(tab).toHaveTextContent(MOCK_OPTIONS[index].label);
    });
  });
});
