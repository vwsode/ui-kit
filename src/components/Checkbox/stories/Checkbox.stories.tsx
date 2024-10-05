import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {},
  args: {
    label: '',
    isChecked: true,
    isIndeterminate: false,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
  },
  tags: ['autodocs'],
  render: (args) => <Checkbox {...args} />,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Checkbox {...args} isChecked={false} />
        <Checkbox {...args} isChecked={true} />
        <Checkbox {...args} isDisabled={true} isChecked={false} />
        <Checkbox {...args} isDisabled={true} isChecked={true} />
      </div>
    );
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Получать рассылки',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Checkbox {...args} />
        <Checkbox {...args} isDisabled={true} />
      </div>
    );
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Checkbox {...args} isChecked={false} />
        <Checkbox {...args} />
      </div>
    );
  },
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
        <Checkbox {...args} isIndeterminate={true} />
        <Checkbox {...args} isIndeterminate={true} isDisabled={true} />
      </div>
    );
  },
};
