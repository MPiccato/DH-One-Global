import { PageType } from "@/app/types/pagination.types";
import UserCard, {userCardLayout} from "./UserCard";
import exploreAPI from "@/app/services/explore/explore.service";
import { TrendingUserType, UserType } from "@/app/types/user.type";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type UserListProps = {
    initialUserPage: PageType<TrendingUserType>

}

const UserList = ({initialUserPage}:UserListProps) => {

    const [page,setPage] = useState<PageType<TrendingUserType>>(initialUserPage);

    const [users, setUsers] = useState<TrendingUserType[]>(initialUserPage.content)

    const userPromise = exploreAPI.getFollowRecomendations(0, 20);


    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1;
        const response = await exploreAPI.getFollowRecomendations(pageNumber,20);
        setPage(response);
        setUsers({...users, ...response.content})
       
  
    }
    const refresh = async () => {
        
        const response = await exploreAPI.getFollowRecomendations(0,20);
        setPage(response);
        setUsers(response.content);
        
    }



    return (

         <InfiniteScroll
                dataLength={users.length}
                next={fetchData} // Función 
                hasMore={!page.pagination.last}
                refreshFunction={refresh}
                loader={<p>Cargando mensajes...</p>}
                endMessage={<p style={{ textAlign: 'center' }}>Todos los elementos agregados</p>}
                >
                        {users.map((user, index) => (
                                <UserCard key={`explore-user-${index}`} user={user}
                                    layout={userCardLayout.VERTICAL} />
                        ))}
                        
            </InfiniteScroll>
        
    )

}

export default UserList;