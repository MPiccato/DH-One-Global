import { httpGetPublic } from "../common/http.service";
import { MessageType } from "@/app/types/message.type";
import { PageType } from "@/app/types/pagination.types";


class MessagesApi {
    getMessagesFeed = async (page:number, size: number): Promise<PageType<MessageType>> => 
        httpGetPublic(`/messages/feed`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
    
}

const messageAPI = new MessagesApi();

export default messageAPI;
