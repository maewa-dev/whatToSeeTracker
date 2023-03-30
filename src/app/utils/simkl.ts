import { environment } from "src/environments/environment"

export const simklParams = {
    baseUrl: 'https://api.simkl.com'
}

export function getUrlSearch(type: string, query: string) {
    return simklParams.baseUrl + '/search/' + type + '?q=' + query + '&client_id=' + environment.apikey
}

export function getUrlAnimeInfo(query: string) {
    return simklParams.baseUrl + '/anime/' + query + '?extended=full'
}

export function getUrlBestAnimes() {
    return simklParams.baseUrl + '/anime/best/?client_id' + environment.apikey
}

export function getUrlBestSeries() {
    return simklParams.baseUrl + '/tv/best/filter?type=tv&client_id=' + environment.apikey
}
