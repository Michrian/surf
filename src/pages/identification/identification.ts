import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
/**
 * Generated class for the IdentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identification',
  templateUrl: 'identification.html',
})
export class IdentificationPage {

  numeroIdentifiant :number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

 
  public btnEnvoiNumero (){
    //numeroIdentifiant
    this.presentLoading();
    this.navCtrl.push(InscriptionPage,{numeroIdentifiant : this.numeroIdentifiant});
  }


  public presentLoading() {

    const loader = this.loadingCtrl.create({
      content: "Veuillez attendre svp...",
      duration: 2000
    });
    loader.present();
  }

}

