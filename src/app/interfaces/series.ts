export interface Series {
    title:   string;
    year:    number;
    poster:  string;
    url:     string;
    ids:     IDS;
    ratings: Ratings;
}

export interface IDS {
    simkl_id: number;
    slug:     string;
}

export interface Ratings {
    simkl: Imdb;
    imdb:  Imdb;
}

export interface Imdb {
    rating: number;
    votes:  number;
}
