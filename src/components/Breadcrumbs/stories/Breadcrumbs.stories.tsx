import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/components/Button';

import { Breadcrumbs, BreadcrumbsItem } from '..';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
  args: {
    visibleAfterCollapse: 2,
    visibleBeforeCollapse: 3,
    maxItems: 8,
  },
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  render: (args) => {
    return (
      <div>
        <Breadcrumbs {...args}>
          <BreadcrumbsItem text="Item 1" />
          <BreadcrumbsItem text="Item 2" />
          <BreadcrumbsItem text="Item 3" />
          <BreadcrumbsItem text="Item 4" />
          <BreadcrumbsItem text="Item 5" />
          <BreadcrumbsItem text="Item 6" />
          <BreadcrumbsItem text="Item 7" />
          <BreadcrumbsItem text="Item 8" />
          <BreadcrumbsItem text="Item 9" iconAfter="backlog" />
        </Breadcrumbs>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {},
};

export const VisibleBeforeAndAfter: Story = {
  args: {
    visibleAfterCollapse: 1,
    visibleBeforeCollapse: 1,
  },
};

export const ControlledExpand: Story = {
  args: {},
  render: (args) => {
    const [isExpanded, setExpanse] = useState<boolean>(false);

    const handleExpand = () => {
      setExpanse((prev) => !prev);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Breadcrumbs isExpanded={isExpanded} {...args}>
          <BreadcrumbsItem text="Item 1" />
          <BreadcrumbsItem text="Item 2" />
          <BreadcrumbsItem text="Item 3" />
          <BreadcrumbsItem text="Item 4" />
          <BreadcrumbsItem text="Item 5" />
          <BreadcrumbsItem text="Item 6" />
          <BreadcrumbsItem text="Item 7" />
          <BreadcrumbsItem text="Item 8" />
          <BreadcrumbsItem text="Item 9" iconAfter="backlog" />
        </Breadcrumbs>

        <Button onClick={handleExpand}>Toggle</Button>
      </div>
    );
  },
};

export const BreadcrumbWithIcon = (): Story => ({
  args: {},
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsItem text="Item 1" iconAfter="backlog" iconBefore="warning" />
    </Breadcrumbs>
  ),
});

export const BreadcrumbWithTruncation = (): Story => ({
  args: {},
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsItem text="Link" />
      <BreadcrumbsItem truncationWidth={100} text="The quick brown fox jumps over the lazy dog" />
    </Breadcrumbs>
  ),
});
