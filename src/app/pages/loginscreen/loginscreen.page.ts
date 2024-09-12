import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage  {
  username: string ='';

  constructor(private navCtrl: NavController) {}
  
  login(){
    if (this.username){
      localStorage.setItem('username', this.username)

      this.navCtrl.navigateRoot('/home');
    } else {
      alert('por favor ingrese su nombre de usuario')
    }
  }

  


  
}
