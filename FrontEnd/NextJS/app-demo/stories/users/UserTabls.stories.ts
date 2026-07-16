import type { Meta, StoryObj } from '@storybook/nextjs-vite';



import UserTabs from '@/app/components/users/UserTabs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Users/UserTabs',
  component: UserTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
} satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages =  [
            {username:"mpiccato",name:"Martin Piccato",message: "Buen programador", repliesCount:3},
            {username:"lolopiccato",name:"Lorenzo Piccato",message: "Le falta profundidad de conocimiento", repliesCount:15},
        ]
const replies = [
            {username:"mpiccato",name:"Martin Piccato",message: "Es cierto que es bueno", repliesCount:2},
            {username:"lpiccato",name:"Lautaro Piccato",message: "Lo bueno es que va aprendiendo", repliesCount:4},
        ]




// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MessageTabs: Story = {
  args: {
    messages: messages,
    replies: replies
  },
};
