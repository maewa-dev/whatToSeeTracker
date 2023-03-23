import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from '../../interfaces/animes';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {

  constructor(
    private animeService: AnimeService
  ) { }

  bestAnimes : Anime[];

  ngOnInit() {
    this.animeService.bestAnimes.subscribe(resp=>{
      this.bestAnimes = resp;
      console.log(this.bestAnimes)
    });
    
  }



}
