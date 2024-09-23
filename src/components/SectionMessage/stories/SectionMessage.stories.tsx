import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '@/components/Button';

import { SectionMessage } from '../components/SectionMessage';

const meta: Meta<typeof SectionMessage> = {
  title: 'SectionMessage',
  component: SectionMessage,
  argTypes: {},
  args: {
    title: 'Title',
  },
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: (args) => (
    <SectionMessage {...args}>
      You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission
      settings for this space.
    </SectionMessage>
  ),
};

export default meta;

type Story = StoryObj<typeof SectionMessage>;

export const Informational: Story = {
  args: {},
};

export const Discovery: Story = {
  args: {
    appearance: 'discovery',
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

export const Error: Story = {
  args: {
    appearance: 'error',
  },
};

export const WithActions: Story = {
  args: {},
  render: (args) => (
    <SectionMessage {...args}>
      You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission
      settings for this space.
      <SectionMessage.Actions>
        <Button appearance="link">Action link</Button>
        <Button appearance="link">Action link</Button>
      </SectionMessage.Actions>
    </SectionMessage>
  ),
};

export const WithCustomIcon: Story = {
  args: {
    icon: 'editor-done',
  },
  render: (args) => (
    <SectionMessage {...args}>
      You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission
      settings for this space.
      <SectionMessage.Actions>
        <Button appearance="link">Action link</Button>
        <Button appearance="link">Action link</Button>
      </SectionMessage.Actions>
    </SectionMessage>
  ),
};
