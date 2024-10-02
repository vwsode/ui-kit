import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs, BreadcrumbsItem } from '..';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
  args: {
    visibleAfterCollapse: 2,
    visibleBeforeCollapse: 3,
    maxItems: 8,
    isExpanded: true,
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
