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
        < MessageProvider initialPage={messagesResponse}>
            <SearchBar initialQuery={initialQuery} />
            <MessagePostForm/>

            <MessageFeed />
        </MessageProvider>

                  
    
    </>
}

export default IndexPageContainer;