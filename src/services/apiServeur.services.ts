import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



import { apiServeurModel  } from '../models/apiServeur.model';

@Injectable()
export class apiServeurServices  {
    private baseUrl:string = "http://localhost:8008";
  
    constructor (private http : Http){

    }

public getUtisateur():any {
   const url=this.baseUrl+"/surfeur/1";
   
   return this.http.get(url)
   .toPromise()
   .then(response =>response.json() as apiServeurModel)
   .catch(error =>console.log("misy erreur ah"+  error))

}
 
}

