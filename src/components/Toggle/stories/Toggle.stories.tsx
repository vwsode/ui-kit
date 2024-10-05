import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Toggle } from '../Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Form/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      type: 'string',
      control: {
        type: 'select',
      },
      options: ['large', 'regular'],
      description: "Determines the size of the toggle, either 'regular' or 'large'.",
    },
    isDisabled: {
      type: 'boolean',
      control: {
        type: 'boolean',
      },
      description: 'If true, the toggle is disabled and not interactive.',
    },
    isChecked: {
      type: 'boolean',
      control: {
        type: 'boolean',
      },
      description: 'Determines if the toggle is currently checked or not.',
    },
  },
  args: {
    size: 'large',
    isDisabled: false,
    isChecked: false,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toggle button is a component that can switch between two states, such as on and off, true and false, or selected and deselected',
      },
    },
  },
  tags: ['autodocs'],
  render: (args) => <Toggle {...args} onChange={() => {}} />,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Regular: Story = {
  args: {
    size: 'regular',
  },
};
