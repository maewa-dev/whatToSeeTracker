import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { numberToArrayRange } from 'src/app/utils/functions';

@Component({
  selector: 'app-episode-accordion',
  templateUrl: './episode-accordion.component.html',
  styleUrls: ['./episode-accordion.component.scss'],
})
export class EpisodeAccordionComponent  implements OnInit {

  @Input() page: number ;
  @Input() pagination: number[] ;
  @Input() lastEmmited: number | undefined ;

  accordionInitialEpisode: number;
  accordionFinalEpisode: number;
  buttons: any[];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.accordionInitialEpisode = (this.page - 1) * 100 +1;
    this.accordionFinalEpisode = this.page * 100;

    this.getButtons()
  }

  get isLastAccordion(){
    return this.pagination.slice(-1)[0] === this.page
  }

  getButtons() {
    this.isLastAccordion
    ? this.buttons = numberToArrayRange(this.accordionInitialEpisode, this.lastEmmited!)
    : this.buttons = numberToArrayRange(this.accordionInitialEpisode, this.accordionFinalEpisode) 
  
    this.buttons = this.buttons.map((episode) => {
        return {
          episode: episode, 
          seen: false
        }
      })
  }

  toggleSeen(episode:number ) {
    let previousEpisode = this.buttons.find(e => e.episode === episode-1)
    let episodeActual = this.buttons.find(e => e.episode === episode)
    
    if ( previousEpisode  && !previousEpisode.seen && !episodeActual.seen ){
      this.presentAlert(episode)
    } else {
      this.markEpisode(episode)
    } 
  }

  markEpisode(episode:number) {
    this.buttons = this.buttons.map(e => e.episode === episode ? {...e, seen: !e.seen } : e);
  }

  markPreviousEpisode(episode:number) {
    this.buttons = this.buttons.map(e => e.episode <= episode ? {...e, seen: true } : e);
  }

  async presentAlert(episode:number) {
    const alert = await this.alertController.create({
      header: '¿Quieres marcar los capítulos anteriores?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { this.markEpisode(episode)
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.markPreviousEpisode(episode)
          },
        },
      ],
    });

    await alert.present();

  }

}
