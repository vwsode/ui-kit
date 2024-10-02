import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Button';
import { Icon } from '@/icons';

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
    fullWidth: true,
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

export const Subtle: Story = {
  args: {
    appearance: 'subtle',
  },
};

export const None: Story = {
  args: {
    appearance: 'none',
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Compact: Story = {
  args: {
    isCompact: true,
  },
};

export const Monospaced: Story = {
  args: {
    isMonospaced: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const WithSubElements: Story = {
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <TextField {...args} />
        <TextField elemAfter={<Button spacing="compact">Button</Button>} {...args} />
        <TextField
          elemBefore={<Icon type="info" size={24} />}
          elemAfter={<Button spacing="compact">Button</Button>}
          {...args}
        />
      </div>
    );
  },
};
