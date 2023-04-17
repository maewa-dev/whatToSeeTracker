import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router, RouterOutlet } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.page.html',
  styleUrls: ['./movie-info.page.scss'],
})
export class MovieInfoPage implements OnInit {

  constructor(    
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router) { }

    @ViewChild(RouterOutlet) outlet: RouterOutlet;

    simklCode: any;
    movieInfo!: any;


  ngOnInit() {

    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });

    this.activatedRoute.params
      .pipe(
        switchMap(({simklCode}) => this.movieService.getMovieInfo(simklCode)),
        tap( console.log )  //todo_mrt forma corta de hacer una impresion en consola
      ).subscribe( anime => {
        this.movieInfo = anime
        console.log(anime)
      })
  }

}
