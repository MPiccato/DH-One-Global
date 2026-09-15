
import messageAPI from "@/app/services/messages/messages.service";
import MessagePageContainer from "./page.container";

const MessagesPage = async ({params}:{params: {id:string}}) => {
    //Promesas api
    const repliesPagePromise = messageAPI.getMessagesReplies(params.id,0,10);
    const getMessagePromise = messageAPI.getMessages(params.id)
    const [repliesPage, message] = await Promise.all([repliesPagePromise,getMessagePromise])
    
    return <>

            <main className="flex flex-col bg-gray-100 p-4 text-black">
                    
                <MessagePageContainer message={message} repliesPage={repliesPage} parentId={params.id} />     
                    
            </main>
    </>
}
export default MessagesPage;