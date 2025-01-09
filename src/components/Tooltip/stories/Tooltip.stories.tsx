import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Button';
import { Lozenge } from '@/components/Lozenge';

import { Tooltip } from '../Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {},
  },
  args: {
    content:
      'Do not put essential information in a tooltip. Tooltips have low discoverability and have usability issues on devices without hover interactions.',
    placement: 'bottom',
    truncate: false,
  },
  tags: ['autodocs'],
  render: (args) => {
    return (
      <Tooltip {...args}>
        <Button appearance="primary">Hover me</Button>
      </Tooltip>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    content:
      'Do not put essential information in a tooltip. Tooltips have low discoverability and have usability issues on devices without hover interactions.',
    placement: 'bottom',
    truncate: false,
  },
};

export const WithTruncation: Story = {
  args: {
    content:
      'Do not put essential information in a tooltip. Tooltips have low discoverability and have usability issues on devices without hover interactions.',
    placement: 'bottom',
    truncate: true,
  },
};

export const WithCustomContent: Story = {
  args: {
    placement: 'bottom',
    initialOpen: true,
    truncate: false,
  },
  render: (args) => {
    return (
      <Tooltip
        {...args}
        content={
          <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 0', gap: '4px' }}>
            Custom tooltip content
            <Lozenge appearance="inprogress" isBold>
              Lozenge component
            </Lozenge>
          </div>
        }
      >
        <Button appearance="primary">Hover me</Button>
      </Tooltip>
    );
  },
};
