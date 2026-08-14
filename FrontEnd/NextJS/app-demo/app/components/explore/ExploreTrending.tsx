
import { TrendingHashTag } from "@/app/types/hash.types";
import PostsCounter from "../counter/PostsCounter";
import Link from "next/link";
import MessageHashtag from "../message/MessageHashtag";

type ExploreTrendingProps = {
    hashes: TrendingHashTag[]
}

const ExploreTrending = ({hashes}: ExploreTrendingProps) => {

    // Si no existen hashes, no renderiza el componente
    if (!hashes || hashes.length === 0) return <></>

    return (
        <div className=" text-black bg-gray-100 rounded-lg px-8 py-4" style={{minWidth:250}}>
            <h2 className="mb-2">Tendencia</h2>
            {hashes.slice(0,2).map((hash, index) => (
                <div key = {`hash-trending-${index}`} className="mb-4">
                    <MessageHashtag hash={hash}/>
                    <PostsCounter count={hash.count}/>
                </div>
            )
            )}
            {hashes.length > 2 && <div>
                <Link href={`/explore?type=HASHTAGS`} className="text-blue-500 hover:underline">
                    <h3 className="text-center cursor-pointer uppercase">Ver más</h3>
                </Link>
                
            </div>}
            
        </div>
    )
}

export default ExploreTrending;