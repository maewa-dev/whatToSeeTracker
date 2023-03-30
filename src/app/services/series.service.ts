import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import * as simkl from '../utils/simkl';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { 
    this.search()
  }

  _bestSeries = new BehaviorSubject( {} );
  _series= new BehaviorSubject( {} );
  type: string = 'tv'

  search() {
    this.getBestSeries().subscribe(resp => {
      this._bestSeries.next(resp);
    })
  }

  getBestSeries(): Observable<any[] | {}> {
    return this.http.get(simkl.getUrlBestSeries());
  }

  get bestSeries():Observable<any> {
    return this._bestSeries.asObservable();
  }

  getSeries(query:string) {
    if(query) {
      return this.http.get(simkl.getUrlSearch(this.type, query)).pipe(map(searched => searched));
    } else {
      return this.getBestSeries();
    }
  }

  get series():Observable<any> {
    return this._series.asObservable();
  }

  searchByQuery(query:string) {
    this.getSeries(query).subscribe(resp => {
      this._series.next(resp);
    })
  }
}
