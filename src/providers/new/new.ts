import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the NewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewProvider {
  
  path: string = 'https://randomuser.me/api/?results=25';
  public list=[];
  constructor(public http: HttpClient) {
    console.log('Hello NewProvider Provider');
  }

  myAlert(){
    alert('服务类的方法');
  }

  load(){ 
     
    return new Promise(resolve=>{this.http.get(this.path).subscribe(data=>
      {
        //console.log(data['results']); 
        //this.list.push(data['results']);
        resolve(data);
      }) 
    });
    // if(this.data)
    // {
    //   return Promise.resolve(this.data); 
    // }
    // return new Promise(resvole=>{
    //   this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot')
    //   .map(res=>res.json)
    //   .surscribe(data=>{
    //     this.data=data;
    //     resvole(this.data);
    //   });  
    // });
  }

}
