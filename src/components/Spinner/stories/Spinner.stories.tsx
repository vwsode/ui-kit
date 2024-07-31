import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Spinner } from '../Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Spinner',
  component: Spinner,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  render: (args) => <Spinner {...args} />,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  args: {
    size: 'medium',
  },
};
