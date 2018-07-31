import { Component } from '@angular/core';

/**
 * Generated class for the UserlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'userlist',
  templateUrl: 'userlist.html'
})
export class UserlistComponent {

  text: string;
 public list=[];

  constructor() {
    console.log('Hello UserlistComponent Component');
    this.text = 'Hello World userlist';

    for(var i =0;i<10;i++)
    {
      this.list.push("这是第"+i+"个客户");
    }
  }

}
