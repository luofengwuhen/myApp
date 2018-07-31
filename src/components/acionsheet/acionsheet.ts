import { Component } from '@angular/core';

/**
 * Generated class for the AcionsheetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'acionsheet',
  templateUrl: 'acionsheet.html'
})
export class AcionsheetComponent {

  text: string;
  /**
   *  
   */
  public list=[];

  constructor() { //初始化触发
    console.log('Hello AcionsheetComponent Component');
    this.text = 'Hello World';

    for(var i=0;i<10;i++)
    {
      this.list.push("这是第"+i+"个组件");
    }
  }

}
