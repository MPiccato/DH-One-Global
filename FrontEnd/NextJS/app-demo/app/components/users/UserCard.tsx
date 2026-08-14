import Image from "next/image";
import Link from "next/link";
import { TrendingUserType, UserType } from "@/app/types/user.type";
import PostsCounter from "../counter/PostsCounter";
import { PropsWithChildren } from "react";



export enum userCardLayout {
    HORIZONTAL, VERTICAL
}

const divClasses = {
    [userCardLayout.HORIZONTAL]: "flex",
    [userCardLayout.VERTICAL]: " flex flex-col"
}
const linkClasses = {
    [userCardLayout.HORIZONTAL]: "ml-2 text-md text-gray-600 cursor-pointer",
    [userCardLayout.VERTICAL]: "text-md text-gray-600 cursor-pointer"
}

type UserCardProps = PropsWithChildren & {
    user: TrendingUserType | UserType,
    layout: userCardLayout
}


const UserCard  = ({user, children, layout}: UserCardProps) => {

    return <>
        <div  className="grid grid-cols-12 mb-4">
                    <div className='w-full h-full mt-1 text-center mb-4 block relative col-span-2'>
                        <Image
                            src={user.photoUrl}
                            alt={`Foto de perfil de ${user.name}`}
                            priority
                            className="rounded-full object-cover"
                            width={40}
                            height={40} />
                    </div>

                    <div className="flex flex-col ml-3 col-span-10">
                        <div className={divClasses[layout]}>
                            <h2>
                                {user.name}
                            </h2>
                            <h3>
                                <div className={linkClasses[layout]}> 
                                    <Link href={`users/${user.username}`}>@{user.username}</Link>
                                </div>
                                
                            </h3>
                        </div>
                        {children}
                    </div>
                        <PostsCounter count={'count' in user ? user.count : 0} />
                        {/* <PostsCounter count={user.count} /> */}
                    </div>
    
    </>

}

export default UserCard;