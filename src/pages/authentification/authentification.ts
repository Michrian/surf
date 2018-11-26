import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { InscriptionPage } from '../inscription/inscription';


@Component({
  selector: 'page-auth',
  templateUrl: 'authentification.html'
})
export class PageAuth {

  constructor(public navCtrl: NavController) {

  }

  private btnConnexion() {
  this.navCtrl.push(HomePage);
  }

  private btnCreerCompte() {
    this.navCtrl.push(InscriptionPage);
    }
  
}
