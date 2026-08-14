


import { TrendingUserType } from "@/app/types/user.type";

import Link from "next/link";
import UserCard, { userCardLayout } from "../users/UserCard";

type ExploreUsersProps = {
    users: TrendingUserType[]
}

const ExploreUsers = ({users, layout}: ExploreUsersProps & { layout: userCardLayout }) => {

    // Si no existen users, no renderiza el componente
    if (!users || users.length === 0) return <></>

    return (
        <div className=" text-black bg-gray-100 rounded-lg px-8 py-4" style={{minWidth:250}}>
            <h2 className="mb-2">A quien seguir</h2>
            {users.slice(0,4).map((user, index) => (

                <UserCard key={`user-trending-${index}`} user={user} layout={layout} />
                
            )
            )}
            {users.length > 4 && <div>
                <Link href={`/explore?type=USERS`} className="text-blue-500 hover:underline">
                    <h3 className="text-center cursor-pointer uppercase">Ver más</h3>
                </Link>
                
            </div>}
            
        </div>
    )
}

export default ExploreUsers;