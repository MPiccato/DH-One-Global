
import messageAPI from '../services/messages/messages.service';


import IndexPageContainer from './page.container';

const IndexPage = async ({searchParams}:{searchParams?: {[key:string]: string | undefined}}) => {
    const messagesResponse = searchParams?.query ? 
        await messageAPI.getMessagesByHash(searchParams.query, 0, 10) :
        await messageAPI.getMessagesFeed(0, 10);


    return (
        <>
            <main className="flex flex-col bg-gray-100 p-4 text-black">
                <IndexPageContainer 
                    initialQuery={searchParams?.query || ''} 
                    messagesResponse={messagesResponse}
                />
            </main>
        
        
        </>
    )
}
export default IndexPage;