import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Anime } from '../interfaces/animes';
import { AnimeInfo } from '../interfaces/anime-info';
import * as simkl from '../utils/simkl';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) {
    this.search()
   }

  _animes= new BehaviorSubject( {} );
  _bestAnimes = new BehaviorSubject( {} );
  _animeInfo= new BehaviorSubject( {} );
  type: string = 'anime'

  getBestAnimes(): Observable<Anime[] | {}> {
    return this.http.get(simkl.getUrlBestAnimes());
  }

  get bestAnimes():Observable<any> {
    return this._bestAnimes.asObservable();
  }

  getAnimeInfo(query:string): Observable<AnimeInfo | {}> {
    return this.http.get(simkl.getUrlAnimeInfo(query)).pipe(map(animeInfo => animeInfo));
  }

  get animeInfo():Observable<any> {
    return this._animeInfo.asObservable();
  }

  search() {
    this.getBestAnimes().subscribe(resp => {
      this._bestAnimes.next(resp);
    })
  }

  getAnimes(query:string) {
    if(query) {
      return this.http.get(simkl.getUrlSearch(this.type, query)).pipe(map(searched => searched));
    } 
    return this.getBestAnimes();
  }

  get animes():Observable<any> {
    return this._animes.asObservable();
  }

  searchByQuery(query:string) {
    this.getAnimes(query).subscribe(resp => {
      this._animes.next(resp);
    })
  }
}
