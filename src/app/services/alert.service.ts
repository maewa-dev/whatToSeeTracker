import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }
  
  async presentAlertTwoButtons(mesagge:string) {
    const alert = await this.alertController.create({
      header: mesagge,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {  
            alert.dismiss({accepted: false})
            return false;
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { 
            alert.dismiss({accepted: true})
            return false;
          },
        },
      ],
    });

    await alert.present()
    return await alert.onDidDismiss()
  }
  
}