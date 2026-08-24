"use client"

import { useState } from "react";

import { MessageType } from "@/app/types/message.type";
import { PageType } from "@/app/types/pagination.types";
import InfiniteScroll from "react-infinite-scroll-component";
import Message from "./Message";
import messageAPI from "@/app/services/messages/messages.service";

type MessageFeedProps = {  
    initialMessages: PageType<MessageType>,
}
const MessageFeed = ({ initialMessages }: MessageFeedProps) => {

    const [messagesResponse, setMessagesResponse] = useState<PageType<MessageType>>(initialMessages)
    const [messages, setMessage] = useState<MessageType[]>(initialMessages.content)
    const [hasMore, setHasMore] = useState<boolean>(!initialMessages.pagination.last)

    const fetchData = async () => {
        const page = messagesResponse.pagination.page + 1;
        const response = await messageAPI.getMessagesFeed(page,10);
        setMessagesResponse(response);
        setMessage({...messages, ...response.content})
        setHasMore(!response.pagination.last)
  
    }
    const refresh = async () => {
        
        const response = await messageAPI.getMessagesFeed(0,10);
        setMessagesResponse(response);
        setMessage(response.content);
        setHasMore(!response.pagination.last)
    }
    
    return (

        <>
           <InfiniteScroll
                dataLength={messages.length}
                next={fetchData} // Función 
                hasMore={hasMore}
                refreshFunction={refresh}
                loader={<p>Cargando mensajes...</p>}
                endMessage={<p style={{ textAlign: 'center' }}>Todos los elementos agregados</p>}
                >
                        {messages.map((mensaje, index) => (
                            <Message key={index} message={mensaje} />

                    ))
                }
                        
            </InfiniteScroll>
        
        </>
        
        
    );
}

export default MessageFeed;