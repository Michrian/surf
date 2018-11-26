import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PageAuth } from '../pages/authentification/authentification';
import { InscriptionPage } from '../pages/inscription/inscription';
import { InscriptionVerifPage } from '../pages/inscriptionVerif/inscriptionVerif';
import { BienvenuePage } from '../pages/bienvenue/bienvenue';

import { IdentificationPage } from '../pages/identification/identification';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IdentificationPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Bienvenue', component: BienvenuePage },
      { title: 'Home', component: HomePage }, 
      { title: 'List', component: ListPage },
      { title: 'Authentification', component: PageAuth },
      { title: 'Inscription', component: InscriptionPage },
      { title: 'VerifierCode', component: InscriptionVerifPage } 
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
