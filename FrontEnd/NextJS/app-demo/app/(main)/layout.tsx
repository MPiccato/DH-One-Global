import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import Menu from "../components/menu/Menu";
import ExploreTrending from "../components/explore/ExploreTrending";
import exploreAPI from "../services/explore/explore.service";
import ExploreUsers from "../components/explore/ExploreUsers";
import { userCardLayout } from "../components/users/UserCard";


const LINKS = [
      {title:'Inicio', href:'/'},
      {title:'Explorar',href:'/explore'},
      {title:"Perfil",href:'/users/mpiccato'}
    ]


const UsersLayout: FC<PropsWithChildren> = async ({children}) => {

    const hashesPromise =  exploreAPI.getTrendingHashtags(0,3) // Llamada a la API para obtener los hashtags de tendencia
    const usersPromise =  exploreAPI.getFollowRecomendations(0,5) // Llamada a la API para obtener los usuarios recomendados
    
    const [hashes, users] = await Promise.all([hashesPromise, usersPromise]) // Espera a que ambas promesas se resuelvan
    
    return <>
        <div className = "w-full h-full grid grid-cols-12 text-blue">
        
            <div className='col-span-3'>
                <Menu links={LINKS} />
            
            </div>
            <main className=" col-span-6 px-8">
                {children}
            </main>
            <div className='col-span-3'>
                <ExploreTrending hashes={hashes.content} />
            </div>
            <div className='col-span-3'>
                <ExploreUsers users={users.content} layout={userCardLayout.VERTICAL} />
            </div>
            <Link href="/faq">
                <div className = "link-primary text-center mt-4">
                    Preguntas Frecuentes
                </div>
            </Link>
        </div>

    </>
}
export default UsersLayout;
