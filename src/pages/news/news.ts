import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsdetailsPage } from '../newsdetails/newsdetails';
 

/**
 * Generated class for the NewsPage page.
 *
1. ionic g page news
2.app.module.ts 引入申明组件
3.需要跳转的页面里引入 并this.navCtrl.push(NewsPage);跳转到页面


 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public msg='这是一个新闻的页面';
  public list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    for(var i=0;i<10;i++)
    {
      this.list.push("这是第"+i+"条数据dde");
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  goDetails(item){
    this.navCtrl.push(NewsdetailsPage);
  }

}
