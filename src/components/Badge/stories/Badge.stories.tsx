import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Badge } from '../Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  render: (args) => <Badge {...args}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Badge>,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    appearance: 'default',
    value: 25,
  },
};
