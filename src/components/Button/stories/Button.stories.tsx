import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Icon } from '@/icons';

import { Button } from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {},
  args: {
    spacing: 'default',
    appearance: 'default',
    isDisabled: false,
    isLoading: false,
    isSelected: false,
    iconOnly: false,
    fullWidth: false,
  },
  tags: ['autodocs'],
  render: (args) => <Button {...args}>Button</Button>,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    appearance: 'default',
  },
};

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
};

export const Subtle: Story = {
  args: {
    appearance: 'subtle',
  },
};

export const Link: Story = {
  args: {
    appearance: 'link',
  },
};

export const SubtleLink: Story = {
  args: {
    appearance: 'subtle-link',
  },
};

export const Warning: Story = {
  args: {
    appearance: 'warning',
  },
};

export const Danger: Story = {
  args: {
    appearance: 'danger',
  },
};

export const Selected: Story = {
  args: {
    appearance: 'default',
    isSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    appearance: 'default',
    isDisabled: true,
  },
};

export const WithIcon: Story = {
  args: {},
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Button {...args} icon="editor-close" iconOnly={true}></Button>
        <Button {...args} appearance="primary" icon="editor-close">Hello</Button>
        <Button {...args} appearance="warning">
          <Icon type="editor-done" size={24} />
          Hello
        </Button>
        <Button  {...args} appearance="danger" iconOnly={true}>
          <Icon type="more" size={24} />
        </Button>
      </div>
    );
  },
};

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    layout: 'centered',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Button {...args} isLoading={true} appearance="default" />
        <Button {...args} isLoading={true} appearance="primary" />
        <Button {...args} isLoading={true} appearance="link" />
        <Button {...args} isLoading={true} appearance="subtle" />
        <Button {...args} isLoading={true} appearance="subtle-link" />
        <Button {...args} isLoading={true} appearance="warning" />
        <Button {...args} isLoading={true} appearance="danger" />
      </div>
    );
  },
};