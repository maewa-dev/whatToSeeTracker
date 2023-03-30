import { Component, Input, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { SeriesService } from 'src/app/services/series.service';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  constructor(
    private animeService: AnimeService,
    private seriesService: SeriesService,
    private movieService: MovieService
  ) { }

  @Input() type: string = '';

  ngOnInit() {}

  handleSearch(query: string) {
    console.log(query)
    switch (this.type) {
      case 'anime':
        this.animeService.searchByQuery(query)
        break;
      case 'series':
        this.seriesService.searchByQuery(query);
        break;
      case 'movie':
        this.movieService.searchByQuery(query);
        break;
    }
    //todo_mrt libros
  }

  onKeyPressed(event: any) {
    if (event.keyCode == 13) {
      let query = event.target.value;
      this.handleSearch(query)
    }
  }

}
