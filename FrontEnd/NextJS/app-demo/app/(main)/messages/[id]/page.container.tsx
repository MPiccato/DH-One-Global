// Archivo que engloba todo el contenido de la página de mensajes,
//  incluyendo el componente principal y cualquier otro componente relacionado 
// con la funcionalidad de mensajes. 
"use client"
import Message from "@/app/components/message/Message";
import MessageList from "@/app/components/message/MessageList";
import MessagePostForm from "@/app/components/message/MessagePostForm";
import useMessages, { MessageProvider } from "@/app/contexts/message.context";
import { MessageType } from "@/app/types/message.type";
import { PageType } from "@/app/types/pagination.types";


type MessagePageProps = {
    message: MessageType;
    repliesPage: PageType<MessageType>;
    parentId: string;
}

const MessageContainer = () => {
    const {message} = useMessages();
    if (!message) {
        return <div>Loading...</div>
    }
    return <>
        <section className="flex flex-col mb-6">
                <Message  message={message}/>
        </section>

    
    </>
}
const MessagePageContainer = ({message, repliesPage, parentId}: MessagePageProps) => {

    return <MessageProvider initialPage={repliesPage}>

                <MessageContainer/>
            
                <section className="flex flex-col mb-6">
                    <MessagePostForm parentId={parentId} />

                </section>
                <section className="flex flex-col w-full">
                   <MessageList/>
            </section>
    
        </MessageProvider>

}

export default MessagePageContainer;