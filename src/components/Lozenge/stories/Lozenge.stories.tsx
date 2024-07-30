import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Lozenge } from '../Lozenge';

const meta: Meta<typeof Lozenge> = {
  title: 'Lozenge',
  component: Lozenge,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  render: (args) => <Lozenge {...args}>LABEL</Lozenge>,
};

export default meta;

type Story = StoryObj<typeof Lozenge>;

export const Basic: Story = {
  args: {
    appearance: 'default',
  },
};
