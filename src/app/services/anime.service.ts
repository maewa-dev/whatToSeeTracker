import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Anime } from '../interfaces/animes';
import { AnimeInfo } from '../interfaces/anime-info';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) {
    this.search()
   }

  
  //     https://api.simkl.com/anime/best/?client_id=5bba675b79c32d0e657633817613dc7c0abda342a465b8591896d170b944d852


  _animes= new BehaviorSubject( {} );
  _bestAnimes = new BehaviorSubject( {} );
  _animeInfo= new BehaviorSubject( {} );
  url: string = 'https://api.simkl.com';
  apikey: string = '5bba675b79c32d0e657633817613dc7c0abda342a465b8591896d170b944d852';
  postersUrl: string = 'https://simkl.in'
  type: string = 'anime'

  getBestAnimes(): Observable<Anime[] | {}> {
    const url = `${ this.url }/anime/best/?client_id${ this.apikey }`;
    return this.http.get(url);
  }

  get bestAnimes():Observable<any> {
    return this._bestAnimes.asObservable();
  }


  getAnimeInfo(query:string): Observable<AnimeInfo | {}> {
    const url = `${ this.url }/anime/${ query }?extended=full`;
    return this.http.get(url).pipe(map(animeInfo => animeInfo));
  }

  get animeInfo():Observable<any> {
    return this._animeInfo.asObservable();
  }


  search() {
    this.getBestAnimes().subscribe(resp => {
      this._bestAnimes.next(resp);
    })
  }

  // https://api.simkl.com/search/movie?q=john%20wick&client_id=***
  getAnimes(query:string) {
    if(query) {
      const url = `${ this.url }/search/${ this.type }?q=${ query }&client_id=${ this.apikey }`;
      return this.http.get(url).pipe(map(searched => searched));
    } else {
      return this.getBestAnimes()
    }
    
  }

  get animes():Observable<any> {
    return this._animes.asObservable();
  }

  searchByQuery(query:string) {
    this.getAnimes(query).subscribe(resp => {
      this._animes.next(resp)
      console.log('service', resp)
    })
  }
}
