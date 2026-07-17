import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExploreTrending from '../../app/components/explore/ExploreTrending';

import UsersLayout from '@/app/(main)/layout';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Explore/ExploreTrending',
  component: ExploreTrending,
  
  
  tags: ['autodocs'],
  
} satisfies Meta<typeof ExploreTrending>;

export default meta;
type Story = StoryObj<typeof meta>;





// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   
  },
};
