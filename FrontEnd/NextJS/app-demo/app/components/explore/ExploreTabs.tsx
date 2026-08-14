'use client'

import {TrendingHashTag as TrendingHashtag} from "@/app/types/hash.types";
import { TrendingUserType } from "@/app/types/user.type";
import { useEffect, useState } from "react";
import UserCard, { userCardLayout } from "../users/UserCard";
import MessageHashtag from "../message/MessageHashtag";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


enum TabView {
    HASHTAGS, USERS
}

type ExploreTabsProps = {
    hashes: TrendingHashtag[],
    users: TrendingUserType[],
    initialTab?: string
}



const UserTabs = ({hashes, users, initialTab}: ExploreTabsProps) => {
    const [tab, setTab] = useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS);
    
    const searchParams = useSearchParams();

    useEffect(() => {
        const type = searchParams.get('type');
        setTab(type ? TabView[type as keyof typeof TabView] : tab);
    },[searchParams,tab]);

    return <>

        <div className="flex justify-evenly mb-3">
            
            <Link href="/explore?type=HASHTAGS">
                <div 
                    
                    className={`cursor-pointer  ${tab === TabView.HASHTAGS ? 'border-b-4 border-black-300':''}`}>
                        HashTags
                </div>
            </Link>
            
            <Link href="/explore?type=USERS">
                <div 
                  
                    className={`cursor-pointer  ${tab === TabView.USERS ? 'border-b-4 border-black-300':''}`}>
                        Usuarios
                </div>
            </Link>
        </div>
        <div>
            {tab === TabView.HASHTAGS && hashes.map((hash, index) => (
                <MessageHashtag hash={hash} key={`explore-hash-${index}`}/>
            ))}
            {tab === TabView.USERS && users.map((user, index) => (
                <UserCard key={`explore-user-${index}`} user={user}
                    layout={userCardLayout.VERTICAL} />

            ))}
        </div>
    
    </>
};

export default UserTabs;