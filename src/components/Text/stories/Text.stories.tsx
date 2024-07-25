import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from '../Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    as: { control: false },
  },
  parameters: {
    layout: 'centered',
    docs: {},
  },
  render: (args) => <Text {...args}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    type: 'page',
    accent: 'primary',
  },
};
