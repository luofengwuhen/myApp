import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { NewsPage } from '../../pages/news/news';
// import {VgAPI } from 'videogular2/core';
 //import { VideoPlayer } from '@ionic-native/video-player';
 //import { StreamingMedia,StreamingVideoOptions } from '@ionic-native/streaming-media';
 
 import { DomSanitizer } from '@angular/platform-browser';
 import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})
export class HomePage {
  //api:VgAPI;
  jk:any;
  adress:any;
  longUrl:any;
  poster:any;
  mediaUrl:any;

  private CreditRuleUrl: any ;//= AppConfig.CREDIT_RULE_URL;

  constructor(public navCtrl: NavController,private sanitizer: DomSanitizer ,private http:Http) {
    //,private streamingMedia: StreamingMedia ,private videoPlayer:VideoPlayer
    this.jk="http://jx.618g.com/?url="; //设置默认接口


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // this.http.get("http://jx.618g.com/?url=https://v.qq.com/x/cover/wi8e2p5kirdaf3j.html", new RequestOptions({headers:headers}))
    // .subscribe(data=>
    // {
    //   console.log(data); 
    //   //this.list.push(data['results']);
    //   //resolve(data);
    // }) 

    // this.videoPlayer.play('http://jx.618g.com/?url=https://v.qq.com/x/cover/wi8e2p5kirdaf3j.html').then(() => {
    //   console.log('video completed');
    //  }).catch(err => {
    //   console.log(err);
    //  });


    // let options: StreamingVideoOptions = {
    //   successCallback: () => { console.log('Video played') },
    //   errorCallback: (e) => { console.log('Error streaming') },
    //   orientation: 'landscape'
    // };
    // this.streamingMedia.playVideo('https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4', options);

  }
  // gonews(){
  //   this.navCtrl.push(NewsPage);
  // }

  // onPlayerReady(api: VgAPI) { 
  //   this.api = api;
  //  }

 
  play(){
    
      
     this.longUrl=this.jk+this.adress;
     //this.poster=this.longUrl;
    //  this.mediaUrl=this.longUrl;
    this.CreditRuleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.longUrl);

     console.log(this.CreditRuleUrl);

    //  this.http.jsonp("https://randomuser.me/api/?results=25","").subscribe(data=>
    //   {
    //     console.log(data); 
    //     //this.list.push(data['results']);
    //     //resolve(data);
    //   }) 
  }
 

}
