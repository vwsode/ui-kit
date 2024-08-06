import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ProgressBar } from '../ProgressBar';
import { Colors } from '../../../themes/standard/colors';

const FIGMA_URL =
  'https://www.figma.com/design/iDJVkkFf8pXZGizL3SzI8A/ADS-Components-(Community)?node-id=4633-0&t=oRTvFPj2JL1szxrt-0';

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    appearance: {
      control: {
        type: 'select',
        options: ['default', 'invert', 'success'],
      },
      description: 'The visual style of the progress bar.',
      defaultValue: 'default',
    },
    isIndeterminate: {
      control: {
        type: 'boolean',
      },
      description: 'Shows the progress bar in an indeterminate state when true.',
      defaultValue: false,
    },
    value: {
      control: {
        type: 'number',
      },
      description: 'The current value of the progress bar (0-100). Required when isIndeterminate is false.',
      defaultValue: 20,
    },
    testId: {
      control: {
        type: 'text',
      },
      description: 'A unique identifier used for testing component or element.',
      defaultValue: '',
    },
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: FIGMA_URL,
    },
    docs: {
      description: {
        component: `Horizontal indicator showing the process of performing an action`,
      },
    },
  },
  tags: ['autodocs'],
  render: (args) => <ProgressBar {...args} />,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Basic: Story = {
  args: {
    value: 20,
  },
};

export const Invert: Story = {
  args: {
    value: 20,
    appearance: 'inverse',
  },
  render: ({ ...args }) => {
    return (
      <div style={{ backgroundColor: Colors.colorTabSelected, padding: '20px' }}>
        <ProgressBar {...args} />
      </div>
    );
  },
};

export const Success: Story = {
  args: {
    value: 100,
    appearance: 'success',
  },
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
};
