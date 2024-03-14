export interface Movie {
    id: number,
    name: string,
    rating: {
        kp: number,
        imdb: number
    },
    poster: {
        previewUrl: string
    },
    genres: {
        name: string
    }[]
}
