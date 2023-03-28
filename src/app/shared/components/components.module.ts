import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeAccordionComponent } from './episode-accordion/episode-accordion.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    EpisodeAccordionComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EpisodeAccordionComponent,
    SearchbarComponent
  ]
})
export class ComponentsModule { }
