import { UserType } from "./user.type"

export type MessageType = {
    id: string,
    user: UserType,
    username: string,
    message: string,
    repliesCount: number
}

export type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[]
}

