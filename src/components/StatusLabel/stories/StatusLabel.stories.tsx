import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { StatusLabel } from '../StatusLabel';

const meta: Meta<typeof StatusLabel> = {
  title: 'StatusLabel',
  component: StatusLabel,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  render: (args) => <StatusLabel {...args}>Lorem ipsum dolor sit amet.</StatusLabel>,
};

export default meta;

type Story = StoryObj<typeof StatusLabel>;

export const Basic: Story = {
  args: {
    type: 'info',
    title: 'Info message',
  },
};

export const Critical: Story = {
  args: {
    type: 'critical',
    title: 'Critical message',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error message',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning message',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Info message',
  },
};
