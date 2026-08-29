
import Message from "@/app/components/message/Message";
import messageAPI from "@/app/services/messages/messages.service";

const MessagesPage = async ({params}:{params: {id:string}}) => {
    const repliesPagePromise = messageAPI.getMessagesReplies(params.id,0,10);
    const getMessagePromise = messageAPI.getMessages(params.id)

    const [repliesPage, message] = await Promise.all([repliesPagePromise,getMessagePromise])

    const {id} = await params;
    console.log(id);
    return <>

            <main className="flex flex-col bg-gray-100 p-4 text-black">
                    <section className="flex flex-col mb-6">
                        <Message  message={message}/>
                    </section>
                    <div>
                        {repliesPage.content.map((replies,index) => <Message key={index} message={replies}/>)}
                    </div>
                    
                </main>





        
    </>
}
export default MessagesPage;