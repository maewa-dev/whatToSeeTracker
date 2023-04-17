import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(
    private movieService: MovieService
  ) { 
    this.movieService.trendingMovies.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.trendingMovies = resp;
        console.log(resp)
      } 
    });
  }

  trendingMovies :any[];

  ngOnInit() {
    this.movieService.movies.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.trendingMovies = resp;
      } 
    });
  }

}
