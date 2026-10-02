import InfiniteScroll from "react-infinite-scroll-component";
import Message from "./Message";

import useMessages from "@/app/contexts/message.context";


const MessageFeed = () => {

    const {messages, messagePage, fetchNextPage, refresh }=useMessages();


  
    
    return (

        <>
           <InfiniteScroll
                dataLength={messages.length}
                next={fetchNextPage} // Función 
                hasMore={!messagePage.pagination.last}
                refreshFunction={refresh}
                pullDownToRefresh={false}
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