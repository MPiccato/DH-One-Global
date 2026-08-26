import exploreAPI from "@/app/services/explore/explore.service";
import { TrendingHashTag } from "@/app/types/hash.types";
import { PageType } from "@/app/types/pagination.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard, { userCardLayout } from "../users/UserCard";
import MessageHashtag from "./MessageHashtag";

type MessageHashtagsListProps = {
    initialPage: PageType<TrendingHashTag>
}

const MessageHashtagsList = ({initialPage}:MessageHashtagsListProps ) => {

     const [page,setPage] = useState<PageType<TrendingHashTag>>(initialPage);

    const [hashtags, setHashtags] = useState<TrendingHashTag[]>(initialPage.content)

    const userPromise = exploreAPI.getFollowRecomendations(0, 20);


    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1;
        const response = await exploreAPI.getTrendingHashtags(pageNumber,20);
        setPage(response);
        setHashtags({...hashtags, ...response.content})
       
  
    }
    const refresh = async () => {
        
        const response = await exploreAPI.getTrendingHashtags(0,20);
        setPage(response);
        setHashtags(response.content);
        
    }

  return (
    <InfiniteScroll
                dataLength={hashtags.length}
                next={fetchData} // Función 
                hasMore={!page.pagination.last}
                refreshFunction={refresh}
                loader={<p>Cargando mensajes...</p>}
                endMessage={<p style={{ textAlign: 'center' }}>Todos los elementos agregados</p>}
                >
                      {hashtags.map((hash, index) => (
                                <MessageHashtag hash={hash} key={`explore-hash-${index}`}/>
                ))}
                        
            </InfiniteScroll>

    
  )
}

export default MessageHashtagsList;