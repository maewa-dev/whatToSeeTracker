import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import * as simkl from '../utils/simkl';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { 
    this.search()
  }

  _trendingMovies = new BehaviorSubject( {} );
  _movies = new BehaviorSubject( {} );
  type: string = 'movie'

  search() {
    this.getTrendingMovies().subscribe(resp => {
      this._trendingMovies.next(resp);
    })
  }

  getTrendingMovies(): Observable<any[] | {}> {
    return this.http.get(simkl.getUrlTrendingMovies());
  }

  get trendingMovies():Observable<any> {
    return this._trendingMovies.asObservable();
  }

  getMovies(query:string) {
    if(query) {
      return this.http.get(simkl.getUrlSearch(this.type, query)).pipe(map(searched => searched));
    } else {
      return this.getTrendingMovies();
    }
  }

  get series():Observable<any> {
    return this._movies.asObservable();
  }

  searchByQuery(query:string) {
    this.getMovies(query).subscribe(resp => {
      this._movies.next(resp);
    })
  }
}
