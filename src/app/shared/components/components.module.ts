import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeAccordionComponent } from './episode-accordion/episode-accordion.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    EpisodeAccordionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EpisodeAccordionComponent
  ]
})
export class ComponentsModule { }
