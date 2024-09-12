
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restarpass',
  templateUrl: './restarpass.page.html',
  styleUrls: ['./restarpass.page.scss'],
})
export class RestarpassPage implements OnInit {


  constructor(private alertController: AlertController) {  
}


async enviar() {const alert = await this.alertController.create({
  header: 'Éxito',
  message: 'Revise su bandeja de entrada.',
  buttons: ['OK']
});

await alert.present();
}
  


  ngOnInit() {
  }

}
