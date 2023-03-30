import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'anime',
    loadChildren: () => import('./pages/anime/anime.module').then( m => m.AnimePageModule)
  },
  {
    path: 'anime-info/:simklCode',
    loadChildren: () => import('./pages/anime-info/anime-info.module').then( m => m.AnimeInfoPageModule)
  },  {
    path: 'series',
    loadChildren: () => import('./pages/series/series.module').then( m => m.SeriesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
