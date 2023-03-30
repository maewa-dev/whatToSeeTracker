import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) { 
    this.search()
  }


  _bestSeries = new BehaviorSubject( {} );
  _series= new BehaviorSubject( {} );

  url: string = 'https://api.simkl.com';
  apikey: string = '5bba675b79c32d0e657633817613dc7c0abda342a465b8591896d170b944d852';
  postersUrl: string = 'https://simkl.in'
  type: string = 'tv'

  search() {
    this.getBestSeries().subscribe(resp => {
      this._bestSeries.next(resp);
    })
  }

  //ttps://api.simkl.com/tv/best/filter?type=series&client_id=***

  getBestSeries(): Observable<any[] | {}> {
    const url = `${ this.url }/tv/best/filter?type=${this.type}&client_id=${ this.apikey }`;
    console.log('desde service', this.bestSeries)
    return this.http.get(url);
  }

  get bestSeries():Observable<any> {
    return this._bestSeries.asObservable();
  }

  getSeries(query:string) {
    if(query) {
      const url = `${ this.url }/search/${ this.type }?q=${ query }&client_id=${ this.apikey }`;
      return this.http.get(url).pipe(map(searched => searched));
    } else {
      return this.getBestSeries()
    }
  }

  get series():Observable<any> {
    return this._series.asObservable();
  }

  searchByQuery(query:string) {
    console.log('llego al service', query)
    this.getSeries(query).subscribe(resp => {
      console.log('resp', resp)
      this._series.next(resp)
    })
  }
}
