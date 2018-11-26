import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { apiServeurServices } from '../../services/apiServeur.services';
import {  apiServeurModel} from '../../models/apiServeur.model';


@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})

export class InscriptionPage {
  /*news:apiServeurModel =new apiServeurModel();
  numero :string;*/

  numeroIdentifiant : number;

  codeSms : string;
  validation: boolean = false;

  info1 :boolean =true;
  info2 :boolean =false;
  constructor(public navCtrl: NavController,public navParams: NavParams){ //private ApiService:apiServeurServices) {
    this.numeroIdentifiant =this.navParams.get("numeroIdentifiant");
  }


private btnValiderCode (){

this.codeSms = this.codeSms;

      //console.log(this.codeSms+"/"+this.validation);
      if(this.codeSms == "10"){
            this.validation =true; //afficher formulaire
            this.info1 =false; //masquer information 1
            this.info2 =true;
            console.log("OK"+this.codeSms+"/"+this.validation);
      }else{
          this.validation =false;
          this.info1 =true; //masquer information 1
          this.info2 =false;
          console.log("NOK");
      }

    }

  
}
