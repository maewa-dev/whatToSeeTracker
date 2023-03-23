export interface Anime {
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
    simkl: Simkl;
    mal:   Mal;
}

export interface Mal {
    rating: number | string;
    votes:  number;
}

export interface Simkl {
    rating: number;
    votes:  number;
}
