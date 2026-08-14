import { UserType } from "./user.type"

export type MessageType = {
    user: UserType,
    name: string,
    message: string
}

export type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[]
}

