import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Menu from '@/app/components/menu/Menu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Menu/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;




// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   
  },
};
