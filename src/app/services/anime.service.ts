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


  _bestAnimes = new BehaviorSubject( {} );
  _animeInfo= new BehaviorSubject( {} );
  url: string = 'https://api.simkl.com/anime';
  apikey: string = '5bba675b79c32d0e657633817613dc7c0abda342a465b8591896d170b944d852';
  postersUrl: string = 'https://simkl.in'

  getBestAnimes(): Observable<Anime[] | {}> {
    const url = `${ this.url }/best/?client_id${ this.apikey }`;
    return this.http.get(url);
  }

  get bestAnimes():Observable<any> {
    return this._bestAnimes.asObservable();
  }

  search() {
    this.getBestAnimes().subscribe(resp => {
      this._bestAnimes.next(resp);
    })
  }

  getAnimeInfo(query:string): Observable<AnimeInfo | {}> {
    const url = `${ this.url }/${ query }?extended=full`;
    return this.http.get(url).pipe(map(countries => countries));
  }



  get animeInfo():Observable<any> {
    return this._animeInfo.asObservable();
  }

}
