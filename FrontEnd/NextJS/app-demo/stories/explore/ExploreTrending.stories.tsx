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

export const Primary: Story = {
  args: {
    hashes: [
      {hash:"Martin",count:4},
      {hash:"Lautaro",count:2},
      {hash:"Lorenzo",count:1},
    ]
   
  },
};

export const Empty: Story = {
  args: {
    
  },
};

