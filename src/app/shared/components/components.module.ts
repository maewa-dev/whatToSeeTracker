import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeAccordionComponent } from './episode-accordion/episode-accordion.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PageGridComponent } from './page-grid/page-grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EpisodeAccordionComponent,
    SearchbarComponent,
    PageGridComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    EpisodeAccordionComponent,
    SearchbarComponent,
    PageGridComponent
  ]
})
export class ComponentsModule { }
