import { MessageType } from "@/app/types/message.type";

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