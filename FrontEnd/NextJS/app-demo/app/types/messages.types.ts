export type MessageType = {
  id: number;
  name: string;
  username: string;
  content: string;
  repliesCount: number;
};

export type MessageProps = {
  mensaje: MessageType;
};