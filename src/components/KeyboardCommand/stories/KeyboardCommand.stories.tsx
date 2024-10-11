import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from '@/components/Text';

import { KeyboardCommand } from '../KeyboardCommand';

const meta: Meta<typeof KeyboardCommand> = {
  title: 'Text/KeyboardCommand',
  component: KeyboardCommand,
  argTypes: {},
  args: {
    command: 'Shift',
  },
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: (args) => <KeyboardCommand {...args} />,
};

export default meta;

type Story = StoryObj<typeof KeyboardCommand>;

export const Basic: Story = {};

export const Example: Story = {
  render(args) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <KeyboardCommand command="Ctrl" />
        <Text type="button" accent="primary">
          +
        </Text>
        <KeyboardCommand command="Shift" />
      </div>
    );
  },
};
