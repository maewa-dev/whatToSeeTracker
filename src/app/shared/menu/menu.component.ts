import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {}

  menuList: any[] = [
    {
      name: 'Anime',
      icon: '/assets/icon/anime.png',
      path: 'anime',
    },
    {
      name: 'Series',
      icon: '/assets/icon/series.png',
      path: 'series',
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
  ];

  close(){
    this.menu.close()
  }
}
