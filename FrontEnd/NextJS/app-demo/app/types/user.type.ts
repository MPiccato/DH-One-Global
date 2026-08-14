export type BaseUser= {
    "id": string,
    "username": string,
    "name": string,
    "bio": string,
    "photoUrl": string,

}

export type UserType = BaseUser & {
    
    "createAt": string,
    "followersCount": string,
    "followingCount": string,
    "messageCount": number
    
}

export type TrendingUserType = BaseUser & {
    "count": number
}