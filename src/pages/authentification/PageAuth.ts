import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
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
}