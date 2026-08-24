import { UserType } from "./user.type"

export type MessageType = {
    name: UserType,
    username: string,
    message: string
}

export type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[]
}

