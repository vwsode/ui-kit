import { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../TextField';

const meta: Meta<typeof TextField> = {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {},
  args: {
    isInvalid: false,
    isDisabled: false,
    isCompact: false,
    isMonospaced: false,
    appearance: 'standard',
  },
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: (args) => {
    return <TextField placeholder="Placeholder" {...args} />;
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};
