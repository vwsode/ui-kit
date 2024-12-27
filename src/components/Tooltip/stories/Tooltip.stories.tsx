import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '@/components/Button';

import { Tooltip } from '../Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: (args) => {
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);

    return (
      <>
        <Button ref={setReferenceElement}>Hover me</Button>

        <Tooltip {...args} referenceElement={referenceElement} content="Short and brief" />
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {},
};
