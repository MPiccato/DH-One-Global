
import { TrendingUserType } from "@/app/types/user.type";

import { httpGetPublic } from "../common/http.service";

import { PageType } from "@/app/types/pagination.types";
import { TrendingHashTag } from "@/app/types/hash.types";


class ExploreAPI {
    getTrendingHashtags = async (page: number, size: number): Promise<TrendingHashTag[]> => 
        httpGetPublic(`/explore/trending`, new URLSearchParams({page:`${page}`, size:`${size}`}));
    
    getFollowRecomendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> => 
        httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page:`${page}`, size:`${size}`}));
}

const exploreAPI = new ExploreAPI();

export default exploreAPI;
