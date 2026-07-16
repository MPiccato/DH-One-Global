'use client'

import { UserTabsProps } from "@/app/types/message.type";
import Message from "../message/Message";
import { useState } from "react";


enum TabView {
    MESSAGES, REPLIES
}


const UserTabs = ({messages,replies}: UserTabsProps) => {
    const [tab, setTab] = useState<TabView>(TabView.MESSAGES);
    return <>

        <div className="flex justify-evenly mb-3">
            <div 
                onClick={() => setTab(TabView.MESSAGES)} 
                className={`cursor-pointer  ${tab === TabView.MESSAGES ? 'border-b-4 border-black-300':''}`}>
                    Mensajes
            </div>
            <div 
                onClick={() => setTab(TabView.REPLIES)} 
                className={`cursor-pointer  ${tab === TabView.REPLIES ? 'border-b-4 border-black-300':''}`}>
                    Respuestas
            </div>
        </div>
        <div>
            {tab === TabView.MESSAGES && messages.map((mensaje, index) => (
                <Message key={index} message={mensaje} />

            ))}
            {tab === TabView.REPLIES && replies.map((mensaje, index) => (
                <Message key={index} message={mensaje} />

            ))}
        </div>
    
    </>
};

export default UserTabs;