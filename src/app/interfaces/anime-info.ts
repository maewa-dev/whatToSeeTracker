export interface AnimeInfo {
    title:                 string;
    year:                  number;
    type:                  string;
    ids:                   AnimeInfoIDS;
    year_start_end:        string;
    en_title:              null;
    alt_titles:            AltTitle[];
    anime_type:            AnimeType;
    studios:               Studio[];
    season_name_year:      string;
    rank:                  number;
    poster:                string;
    fanart:                string;
    first_aired:           Date;
    airs:                  Airs;
    runtime:               number;
    certification:         null;
    overview:              string;
    genres:                string[];
    country:               string;
    total_episodes:        number;
    status:                string;
    network:               string;
    ratings:               Ratings;
    trailers:              Trailer[];
    users_recommendations: Ation[];
    relations:             Ation[];
}

export interface Airs {
    day:      string;
    time:     string;
    timezone: string;
}

export interface AltTitle {
    name: string;
    lang: number;
    type: Type;
}

export enum Type {
    Official = "official",
    Short = "short",
    Synonym = "synonym",
}

export enum AnimeType {
    Movie = "movie",
    Ona = "ona",
    Tv = "tv",
}

export interface AnimeInfoIDS {
    simkl:    number;
    slug:     string;
    anidb:    string;
    tmdb:     string;
    imdb:     string;
    ann:      string;
    mal:      string;
    anfo:     string;
    offjp:    string;
    wikien:   string;
    wikijp:   string;
    allcin:   string;
    vndb:     string;
    offen:    string;
    tvdbslug: string;
}

export interface Ratings {
    simkl: Simkl;
    mal:   Mal;
}

export interface Mal {
    rating: number;
    votes:  number;
    rank:   number;
}

export interface Simkl {
    rating: number;
    votes:  number;
}

export interface Ation {
    title:          string;
    en_title:       null | string;
    year:           number;
    poster:         string;
    anime_type:     AnimeType;
    relation_type?: string;
    is_direct?:     boolean;
    ids:            RelationIDS;
    users_percent?: string;
    users_count?:   number;
}

export interface RelationIDS {
    simkl: number;
    slug:  string;
}

export interface Studio {
    id:   number;
    name: string;
}

export interface Trailer {
    name:    null | string;
    youtube: string;
    size:    number;
}
