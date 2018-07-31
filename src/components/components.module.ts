import { NgModule } from '@angular/core';
import { AcionsheetComponent } from './acionsheet/acionsheet';
//支持旧版的angular方法
import { BrowserModule } from '@angular/platform-browser';
import { UserlistComponent } from './userlist/userlist';

@NgModule({
	declarations: [AcionsheetComponent,
    UserlistComponent],
	imports: [BrowserModule],//依赖注入
	exports: [AcionsheetComponent,
    UserlistComponent]
})
export class ComponentsModule {}
