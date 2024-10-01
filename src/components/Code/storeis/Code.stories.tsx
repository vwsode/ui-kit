import { Meta, StoryObj } from '@storybook/react';

import { Code } from '../Code';

const meta: Meta<typeof Code> = {
  title: 'Text/Code',
  component: Code,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    children: 'npm install',
  },
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: ({ children, ...args }) => {
    return (
      <div>
        <Code {...args}>{children}</Code>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {},
};
