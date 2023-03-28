import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {

  constructor(
    private animeService: AnimeService
  ) { 
    this.animeService.bestAnimes.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.bestAnimes = resp;
      } 
    })
    ;
  }

  bestAnimes : any[] = [];
  animes : any[] = [];

  ngOnInit() {
    this.animeService.animes.subscribe(resp=>{
      if(Array.isArray(resp)){
        this.bestAnimes = resp;
      } 
    })
    ;
  }



}
