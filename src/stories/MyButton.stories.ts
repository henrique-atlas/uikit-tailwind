import type { Meta, StoryObj } from '@storybook/react';

import MyButton from './MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    primary: true,
    size: 'small',
    label: 'Button',
  },
};
