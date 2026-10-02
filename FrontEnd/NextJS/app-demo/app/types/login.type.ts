import { UserType } from "./user.type";
export type LoginResponseType = {
    token: string;
    user: UserType;
}