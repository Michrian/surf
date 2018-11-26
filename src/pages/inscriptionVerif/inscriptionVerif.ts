import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

@Component({
  selector: 'page-inscriptionVerif',
  templateUrl: 'inscriptionVerif.html'
})
export class InscriptionVerifPage {
  numero : string
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.numero =navParams.get("numero");
    console.log(this.numero);
  }


}
