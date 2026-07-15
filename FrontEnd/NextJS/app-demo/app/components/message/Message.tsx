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
                        <h4 className="font-semibold text-sm">
                            {message.name}
                        </h4>
                        <h3 className="text-sm ml-2 text-gray-600 cursor-pointer">
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