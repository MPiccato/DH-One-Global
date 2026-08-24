export type BaseUser= {
    "id": string,
    "name": string,
    "username": string,
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