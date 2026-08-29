"use client"
import { MessageType } from "@/app/types/message.type";

import UserCard, { userCardLayout } from "../users/UserCard";
import RepliesCounter from "../counter/RepliesCounter";
import { useRouter } from "next/navigation";



type MessageProps = {
    message: MessageType;
}

const Message = ({message}: MessageProps) => {
    const router = useRouter()

    return ( 
            <UserCard  user={message.user} layout={userCardLayout.HORIZONTAL}>
                
                <div className="flex flex-col">
                    <p>{message.message}</p>
                    <div className="flex justify-end">
                        <RepliesCounter 
                            count={message.repliesCount}
                            onClick={()=> router.push(`/messages/${message.id}`)}
                        />

                    </div>
                </div>
                
            
            </UserCard>
        )

    
  
}

export default Message;