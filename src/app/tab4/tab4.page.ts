import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private navCtrl: NavController) {}

  navigateToTab5() {
    this.navCtrl.navigateForward('/tabs/tab5');
  }
}
