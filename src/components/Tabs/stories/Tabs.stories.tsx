import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Tab, TabList, TabPanel, Tabs } from '../';
import { BorderRadius, Spacing } from '../../../themes';
import { Colors } from '../../../themes/standard/colors';
import { textBody } from '../../../themes/typography';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  args: {
    selected: 1,
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export type Story = StoryObj<typeof Tabs>;

const Panel = styled.div`
  ${textBody};
  background-color: ${Colors.colorTabHover};
  border-radius: ${BorderRadius.SMALL};
  padding: ${Spacing.M};
  margin-top: ${Spacing.M_NUDGE};
`;

export const Basic: Story = {
  render: ({ selected }) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const options = [
      {
        content: 'Content 1',
        label: 'Tab 1',
      },
      {
        content: 'Content 2',
        label: 'Tab 2',
      },
      {
        content: 'Content 3',
        label: 'Tab 3',
      },
    ];

    const handleChange = (index: number) => {
      setSelectedTab(index);
    };

    useEffect(() => {
      if (selected) {
        setSelectedTab(selected);
      }
    }, [selected]);

    return (
      <Tabs id="tabs" selected={selectedTab} onChange={handleChange}>
        <TabList>
          {options.map(({ label }, index) => (
            <Tab index={index} key={index}>
              {label}
            </Tab>
          ))}
        </TabList>
        {options.map(({ content }, index) => (
          <TabPanel index={index} key={index}>
            <Panel>{content}</Panel>
          </TabPanel>
        ))}
      </Tabs>
    );
  },
};
