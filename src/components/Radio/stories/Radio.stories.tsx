import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Radio } from '../Radio';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    isDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the radio button will be disabled and not interactable.',
      defaultValue: false,
      type: 'boolean',
    },
    isInvalid: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the radio button will be marked as invalid, typically by changing its border color.',
      defaultValue: false,
      type: 'boolean',
    },
    isChecked: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the radio button will be checked (selected).',
      defaultValue: false,
      type: 'boolean',
    },
    isRequired: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the radio button will be required in the form.',
      defaultValue: false,
      type: 'boolean',
    },
    label: {
      control: {
        type: 'text',
      },
      description:
        'The label displayed next to the radio button. It can be a string or a ReactNode for more complex labels.',
      defaultValue: '',
    },
  },
  tags: ['autodocs'],
  render: (args) => <Radio {...args} />,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Basic: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
};

export const InvalidChecked: Story = {
  args: {
    isInvalid: true,
    isChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    isDisabled: true,
    isChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'With label',
    isChecked: false,
  },
};
