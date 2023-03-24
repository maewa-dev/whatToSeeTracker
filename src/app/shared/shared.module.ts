import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports:[
    MenuComponent,
    HeaderComponent,
    SearchbarComponent
  ]
})
export class SharedModule { }
