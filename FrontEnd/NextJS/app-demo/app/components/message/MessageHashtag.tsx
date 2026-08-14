import Link from "next/link";

import { TrendingHashTag } from "@/app/types/hash.types";
import PostsCounter from "../counter/PostsCounter";


type MessageHashtagProps = {  
    hash: TrendingHashTag,
}
const MessageHashtag = ({ hash }: MessageHashtagProps) => {
    return (

        <>
            
            <Link href={`/mensajes?query=${hash.hash}&type=hash`} className="text-blue-500 hover:underline">
                <h4 className="font-semibold gap-2"># {hash.hash}</h4>
            </Link>
            
            <div>
                <PostsCounter count={hash.count}/>
            </div>
        
        
        
        </>
        
        
    );
}

export default MessageHashtag;