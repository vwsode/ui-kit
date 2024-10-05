import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Range } from '../Range';

const meta: Meta<typeof Range> = {
  title: 'Form/Range',
  component: Range,
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
      description: 'The current value of the slider',
      defaultValue: 0,
    },
    step: {
      control: {
        type: 'number',
      },
      description: 'The step value for the slider',
      defaultValue: 1,
    },
    min: {
      control: {
        type: 'number',
      },
      description: 'The minimum value of the slider',
      defaultValue: 0,
    },
    max: {
      control: {
        type: 'number',
      },
      description: 'The maximum value of the slider',
      defaultValue: 100,
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disables the slider if true',
      defaultValue: false,
    },
    onChange: {
      action: 'changed',
      description: 'Callback function when the value changes',
    },
  },
  tags: ['autodocs'],
  render: (args) => <Range {...args} />,
};

export default meta;

type Story = StoryObj<typeof Range>;

export const Basic: Story = {
  args: {
    value: 20,
  },
};

export const Disabled: Story = {
  args: {
    value: 20,
    isDisabled: true,
  },
};
