import { MessageType } from "@/app/types/message.type";
import Link from "next/link";


type MessageProps = {
    message: MessageType;
}

const Message = ({message}: MessageProps) => {
    return <>
            <div className="flex mb-3">
                <div className="rounded-full bg-gray-300 p-3 text-center w-15 mb-5">

                    <span className="text-lg font-semibold">MP</span> 
                </div>
                <div className="flex flex-col ml-3">
                    <div className='flex'>
                        <h2>
                            {message.name}
                        </h2>
                        <h3>
                            <Link href={`https://www.facebook.com/${message.username}`}>@{message.username}</Link>   
                        </h3>
                    </div>
                    <p>
                        {message.message}
                    </p>
                </div>
            </div>
    

    </>
}

export default Message;