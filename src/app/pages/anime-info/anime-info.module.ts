import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeInfoPageRoutingModule } from './anime-info-routing.module';

import { AnimeInfoPage } from './anime-info.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeInfoPageRoutingModule,
    ComponentsModule

  ],
  declarations: [AnimeInfoPage]
})
export class AnimeInfoPageModule {}
