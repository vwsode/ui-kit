import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Flag } from '../components/Flag';
import { FlagAction } from '../components/FlagAction';

const meta: Meta<typeof Flag> = {
  title: 'Flag',
  component: Flag,
  argTypes: {},
  args: {
    title: 'Title',
    appearance: 'normal',
    fullWidth: false,
  },
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: (args) => (
    <Flag {...args}>
      <Flag.Content>
        You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission
        settings for this space.
      </Flag.Content>
    </Flag>
  ),
};

export default meta;

type Story = StoryObj<typeof Flag>;

export const Normal: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    appearance: 'error',
  },
};

export const Info: Story = {
  args: {
    appearance: 'info',
  },
};

export const Success: Story = {
  args: {
    appearance: 'success',
  },
};

export const Warning: Story = {
  args: {
    appearance: 'warning',
  },
};

export const WithActions: Story = {
  args: {
    appearance: 'error',
  },
  render: (args) => {
    return (
      <Flag {...args}>
        <Flag.Content>
          You're not allowed to change these restrictions. It's either due to the restrictions on the page, or
          permission settings for this space.
        </Flag.Content>
        <Flag.Actions>
          <FlagAction>Remove</FlagAction>
          <FlagAction>Cancel</FlagAction>
        </Flag.Actions>
      </Flag>
    );
  },
};
