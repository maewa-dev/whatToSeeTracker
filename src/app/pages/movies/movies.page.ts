import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(
    private moivieService: MovieService
  ) { 
    this.moivieService.trendingMovies.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.trendingMovies = resp;
      } 
    });
  }

  trendingMovies :any[];

  ngOnInit() {
    this.moivieService.series.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.trendingMovies = resp;
      } 
    });
  }

}
