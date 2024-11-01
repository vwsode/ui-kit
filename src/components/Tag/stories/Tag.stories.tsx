import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tag } from '../Tag';
import { TagColor } from '../types';

const tagColors: TagColor[] = [
  'standard',
  'blue',
  'green',
  'teal',
  'purple',
  'red',
  'yellow',
  'orange',
  'magenta',
  'lime',
  'gray',
  'green-light',
  'teal-light',
  'blue-light',
  'purple-light',
  'red-light',
  'yellow-light',
  'orange-light',
  'magenta-light',
  'lime-light',
  'gray-light',
];

const meta: Meta<typeof Tag> = {
  title: 'Base/Tag',
  component: Tag,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: (args) => <Tag {...args} text="Tag" />,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  args: {},
  render(args) {
    return <Tag {...args} text="Tag" />;
  },
};

export const WithIcon: Story = {
  args: {},
  render(args) {
    return <Tag {...args} iconBefore="bitbucket-branches" text="Tag" />;
  },
};

export const Colors: Story = {
  args: {},
  render(args) {
    return (
      <div style={{ display: 'flex', gap: 4 }}>
        {tagColors.map((color) => (
          <Tag key={color} color={color} {...args} text="Tag" />
        ))}
      </div>
    );
  },
};

export const TagLink: Story = {
  args: {
    href: '#jio',
    linkComponent: 'a',
  },
  render(args) {
    return <Tag {...args} text="Tag" />;
  },
};
