import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from '../Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  render: (args) => <Link {...args}>Hyperlink</Link>,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  args: {
    to: '#',
  },
};
