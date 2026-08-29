import { httpGetPublic, httpPost } from "../common/http.service";
import { MessageType } from "@/app/types/message.type";
import { PageType } from "@/app/types/pagination.types";



class MessagesApi {
    getMessagesFeed = async (page:number, size: number): Promise<PageType<MessageType>> => 
        httpGetPublic(`/messages/feed`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
    getMessagesReplies = async (id:string,page:number, size: number): Promise<PageType<MessageType>> => 
        httpGetPublic(`/messages/${id}/replies`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
    
    getMessages = async (id:string): Promise<MessageType> => 
        httpGetPublic(`/messages/${id}`);
    
    postMessage = async (message: string): Promise<MessageType> => {
        return httpPost('/message', {message: message});
    }
}

const messageAPI = new MessagesApi();

export default messageAPI;
