export type StrapiPaginationType = {
    "pageCount": number,
    "total": number,
    "page": number,
    "pageSize": number,
    first: boolean,
    last: boolean
}

export type StrapiResultType<T> = {
    "data": T[],
    "meta": {pagination: StrapiPaginationType}
}
