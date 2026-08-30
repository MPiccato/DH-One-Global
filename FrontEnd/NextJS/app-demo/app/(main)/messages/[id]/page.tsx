
import Message from "@/app/components/message/Message";
import MessagePostForm from "@/app/components/message/MessagePostForm";
import messageAPI from "@/app/services/messages/messages.service";

const MessagesPage = async ({params}:{params: {id:string}}) => {
    //Promesas api
    const repliesPagePromise = messageAPI.getMessagesReplies(params.id,0,10);
    const getMessagePromise = messageAPI.getMessages(params.id)
    const [repliesPage, message] = await Promise.all([repliesPagePromise,getMessagePromise])
    
    return <>

            <main className="flex flex-col bg-gray-100 p-4 text-black">
                    <section className="flex flex-col mb-6">
                        <Message  message={message}/>
                    </section>
                    <section className="flex flex-col mb-6">
                        <MessagePostForm parentid={params.id} />

                    </section>
                    <section className="flex flex-col w-full">
                        {repliesPage.content.map((replies,index) => <Message key={index} message={replies}/>)}
                    </section>
                    
                </main>
    </>
}
export default MessagesPage;