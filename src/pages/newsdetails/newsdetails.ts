import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsdetails',
  templateUrl: 'newsdetails.html',
})
export class NewsdetailsPage {
  val:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.val = navParams.get('val');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsdetailsPage');
  }

}
