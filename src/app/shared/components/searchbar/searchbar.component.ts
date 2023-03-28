import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent  implements OnInit {

  constructor( private animeService: AnimeService) { }

  ngOnInit() {}

  handleSearch(query:string) {
    console.log(this.animeService.searchByQuery(query))
    this.animeService.searchByQuery(query)
  }

  onKeyPressed(event: any) {
    if (event.keyCode == 13) {
      let query = event.target.value;
      this.handleSearch(query)
    }
  }

}
