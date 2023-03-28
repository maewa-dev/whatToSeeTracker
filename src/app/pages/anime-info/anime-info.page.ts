import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { ActivatedRoute, ActivationStart, Router, RouterOutlet } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AnimeInfo } from '../../interfaces/anime-info';
import { numberToArray } from 'src/app/utils/functions';
import { Console } from 'console';
import { status } from 'src/app/utils/colors';

@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.page.html',
  styleUrls: ['./anime-info.page.scss'],
})
export class AnimeInfoPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService,
    private router: Router
  ) { }


  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  simklCode: any;
  animeInfo!: AnimeInfo;
  episodes: any[];
  status: {[key: string]: string} = status

  pagination: number[] = [0]

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });

    this.activatedRoute.params
      .pipe(
        switchMap(({simklCode}) => this.animeService.getAnimeInfo(simklCode)),
        tap( console.log )  //todo_mrt forma corta de hacer una impresion en consola
      ).subscribe( anime => {
        this.animeInfo = anime

        let numPage = Math.floor(this.animeInfo?.total_episodes / 100)
        this.pagination = numberToArray(numPage+1)  //todo_mrt para que cargen los 'ultimos'
    
      });
  }

  get statusColorScheme(): string {
    return this.status[this.animeInfo?.status] 
  }

}
