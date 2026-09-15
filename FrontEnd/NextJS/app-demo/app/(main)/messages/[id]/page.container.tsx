// Archivo que engloba todo el contenido de la página de mensajes,
//  incluyendo el componente principal y cualquier otro componente relacionado 
// con la funcionalidad de mensajes. 
"use client"
import Message from "@/app/components/message/Message";
import MessagePostForm from "@/app/components/message/MessagePostForm";
import { MessageProvider } from "@/app/contexts/message.context";
import { MessageType } from "@/app/types/message.type";
import { PageType } from "@/app/types/pagination.types";

type MessagePageProps = {
    message: MessageType;
    repliesPage: PageType<MessageType>;
    parentId: string;
}
const MessagePageContainer = ({message, repliesPage, parentId}: MessagePageProps) => {
    return <MessageProvider>
            <section className="flex flex-col mb-6">
                        <Message  message={message}/>
                </section>
                <section className="flex flex-col mb-6">
                    <MessagePostForm parentid={parentId} />

                </section>
                <section className="flex flex-col w-full">
                    {repliesPage.content.map((replies,index) => <Message key={index} message={replies}/>)}
            </section>
    
        </MessageProvider>

}

export default MessagePageContainer;