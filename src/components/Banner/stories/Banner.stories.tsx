import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Icon } from '../../../icons';
import { Banner } from '../Banner';

const meta: Meta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  render: (args) => (
    <div style={{ maxWidth: '1920px', minWidth: '956px' }}>
      <Banner {...args}>LABEL</Banner>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Basic: Story = {
  args: {
    appearance: 'announcement',
  },
};

export const Announcement: Story = {
  args: {
    appearance: 'announcement',
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

export const WithIcon: Story = {
  args: {
    appearance: 'error',
    icon: <Icon type="warning" size={20} />,
  },
};
