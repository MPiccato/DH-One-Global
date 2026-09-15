import MessageFeed from "../components/message/MessageFeed";
import { MessageType } from "../types/message.type";
import SearchBar from "../components/search/SearchBar";
import MessagePostForm from "../components/message/MessagePostForm";
import { PageType } from "../types/pagination.types";
import { MessageProvider } from "../contexts/message.context";

type IndexPageContainerProps = {
    initialQuery: string;
    messagesResponse: PageType<MessageType>;
}


const IndexPageContainer = ({initialQuery, messagesResponse}: IndexPageContainerProps) => {
    return <>
        <MessageProvider>
            <SearchBar initialQuery={initialQuery} />
            <MessagePostForm/>

            <MessageFeed initialMessages={messagesResponse} />
        </MessageProvider>

                  
    
    </>
}

export default IndexPageContainer;