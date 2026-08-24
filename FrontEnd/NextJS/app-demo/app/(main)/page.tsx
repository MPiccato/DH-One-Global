
import messageAPI from '../services/messages/messages.service';

import MessageFeed from '../components/message/MessageFeed';

const IndexPage = async () => {
    const messagesResponse = await messageAPI.getMessagesFeed(0, 10);


    return (
        <>
            <main className="flex flex-col bg-gray-100 p-4 text-black">
                <section className="flex flex-col mb-6">

                    <MessageFeed initialMessages={messagesResponse} />

                  

                </section>
            </main>
        
        
        </>
    )
}
export default IndexPage;