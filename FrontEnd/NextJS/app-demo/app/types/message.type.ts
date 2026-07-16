export type MessageType = {
    username: string,
    name: string,
    message: string
}

export type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[]
}

