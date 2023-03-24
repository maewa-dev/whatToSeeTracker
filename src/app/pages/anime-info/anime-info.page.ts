import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { ActivatedRoute, ActivationStart, Router, RouterOutlet } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { AnimeInfo } from '../../interfaces/anime-info';
import { numberToArray } from 'src/app/utils/functions';
import { Console } from 'console';

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

        this.episodes = [...Array(this.animeInfo?.total_episodes)].map((_,i) => {
          return {
            episode: i+1, 
            seen: false
          }
        })

        //this.episodes = numberToArray(this.animeInfo?.total_episodes)
      });
  }


  toggleSeen(episode:number ) {
    this.episodes = this.episodes.map(e => e.episode === episode ? {...e, seen: !e.seen } : e);
  }

}
