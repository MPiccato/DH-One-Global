
import { UserType } from "@/app/types/user.type";

import { httpGet, httpGetPublic } from "../common/http.service";
import { MessageType } from "@/app/types/message.type";
import { PageType } from "@/app/types/pagination.types";


class UserAPI {
    getUserData = async (username: string): Promise<UserType> => 
        httpGetPublic(`/users/${username}`);
    getUserMessages = async (username: string): Promise<PageType<MessageType>> => 
        httpGetPublic(`/users/${username}/messages`);
    getUserMessagesReplies = async (username: string): Promise<PageType<MessageType>> => 
        httpGetPublic(`/users/${username}/replies`);
}

const userAPI = new UserAPI();

export default userAPI;
