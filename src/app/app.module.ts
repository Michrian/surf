import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
/*======================PAGES================================= */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PageAuth } from "../pages/authentification/authentification";
import { InscriptionPage } from "../pages/inscription/inscription";
import { InscriptionVerifPage } from '../pages/inscriptionVerif/inscriptionVerif';
import { BienvenuePage } from '../pages/bienvenue/bienvenue';
import { IdentificationPage } from '../pages/identification/identification';

/*============================================================== */

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { apiServeurServices } from '../services/apiServeur.services';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    MyApp,
    IdentificationPage,
    BienvenuePage,
    HomePage,
    ListPage,
    PageAuth,
    InscriptionPage,
    InscriptionVerifPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IdentificationPage,
    BienvenuePage,
    HomePage,
    ListPage,
    PageAuth,
    InscriptionPage,
    InscriptionVerifPage
  ],
  providers: [
    apiServeurServices,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
