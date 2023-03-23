import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  menuList: any[] = [
    {
      name: 'Anime',
      icon: '/assets/icon/anime.png',
      path: '',
    },
    {
      name: 'Series',
      icon: '/assets/icon/series.png',
      path: '',
    },
    {
      name: 'Películas',
      icon: '/assets/icon/movies.png',
      path: '',
    },
    {
      name: 'Libros',
      icon: '/assets/icon/book.png',
      path: '',
    },
  ]
}
