import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewProvider } from '../../providers/new/new';
import {HttpClient} from "@angular/common/http";
import { NewsdetailsPage } from '../newsdetails/newsdetails';
//  import 'rxjs/add/operator/map';
 

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  path: string = 'https://randomuser.me/api/?results=25';
  public list=[]; 
  public resList:any;
  res:any;
  constructor(public navCtrl: NavController,public http: HttpClient,public provider:NewProvider) {
    //this.newProvider.myAlert();
    
    
    // this.http.get(this.path)
    // .subscribe(data => {
    //   console.log((data['results'])); 
    //   this.list.push(data); 
    // });


    this.provider.load().then(data=>{
      console.log(data);
      this.list.push(data); 
    },(err)=>
    {
      console.log(err);
    });
    // console.log(this.resList);
    // this.list.push(this.resList);
  }

  goDetails(val){
      this.navCtrl.push(NewsdetailsPage,{val:val});
  }

  

}
