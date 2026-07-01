import Message from "@/app/components/messages";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Messages/Message',
  component: Message,
  parameters: {
   layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Message>;

export const Primary: StoryObj<typeof Message> = {
  args: {
    mensaje: {id:1,name:"Martin Piccato", username: "mpiccato", content: "Hola, este es un mensaje de prueba de Storybook.", repliesCount: 13},
  
  },
};