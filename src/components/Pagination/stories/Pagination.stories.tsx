import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Pagination } from '../components/Pagination/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  argTypes: {},
  args: {
    pages: Array.from({ length: 10 }, (v, i) => i + 1),
    currentPage: 3,
    max: 1,
    siblingCount: 1,
    isDisabled: false,
    defaultSelectedPage: 3,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const WithSiblingCount: Story = {
  args: {
    siblingCount: 3,
    pages: Array.from({ length: 20 }, (v, i) => i + 1),
  },
};

export const WithMaxValue: Story = {
  args: {
    pages: Array.from({ length: 100 }, (v, i) => i + 1),
    max: 10,
  },
};
