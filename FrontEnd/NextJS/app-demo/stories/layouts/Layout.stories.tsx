import type { Meta, StoryObj } from '@storybook/nextjs-vite';


import UsersLayout from '@/app/(main)/layout';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layout/Base',
  component: UsersLayout,
  
  tags: ['autodocs'],
  
} satisfies Meta<typeof UsersLayout>;

export default meta;
type Story = StoryObj<typeof meta>;





// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: <>Esto es un contenido</>
   
  },
};
