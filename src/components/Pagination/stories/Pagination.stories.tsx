import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Pagination } from '../components/Pagination/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  argTypes: {},
  args: {
    pages: Array.from({ length: 20 }, (v, i) => i + 1),
    currentPage: 3,
  },
  tags: ['autodocs'],
  render: (args) => <Pagination {...args} />,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};
