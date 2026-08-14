import { MessageType } from "@/app/types/message.type";
import Link from "next/link";
import Image from "next/image";
import UserCard, { userCardLayout } from "../users/UserCard";



type MessageProps = {
    message: MessageType;
}

const Message = ({message}: MessageProps) => {

    return  <UserCard  user={message.user} layout={userCardLayout.VERTICAL}>
                <p>
                    {message.message}
                </p>
            
            </UserCard>

    
  
}

export default Message;