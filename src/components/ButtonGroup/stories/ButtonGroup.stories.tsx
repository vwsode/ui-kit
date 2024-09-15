import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '@/components/Button';

import { ButtonGroup } from '../ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
  args: {
    direction: 'horizontal',
    fullWidth: false,
  },
  tags: ['autodocs'],
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Cancel</Button>
      <Button appearance="primary">Create</Button>
    </ButtonGroup>
  ),
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button icon="more" iconOnly />
        <Button>Cancel</Button>
        <Button appearance="primary">Create</Button>
      </ButtonGroup>
    );
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button>Cancel</Button>
        <Button appearance="primary">Create</Button>
      </ButtonGroup>
    );
  },
};
