
//系统组件 必须,不用管
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//根组件
import { MyApp } from './app.component';

//引入component模块
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

//自定义组件
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { NewsdetailsPage } from '../pages/newsdetails/newsdetails';

import { HttpModule } from '@angular/http';

//服务 打包成app以后配置启动画面导航条的服务,正常不用管
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewProvider } from '../providers/new/new';

//视频播放
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
//视频播放
import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [ //申明组件
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage,
    NewsdetailsPage 
  ],
  imports: [ //引入的模块,依赖的模块
    BrowserModule,
    ComponentsModule,
    PipesModule,  
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:'true',//隐藏子页面tabs  tabsHideOnSubPages
      backButtonText:"返回" //返回按钮设置 ,""为空
    }), 
    HttpModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  bootstrap: [IonicApp], //默认启动的模块
  entryComponents: [ //配置不会在模板中使用的组件  
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage,
    NewsdetailsPage
  ],
  providers: [//配置服务
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewProvider,
    VideoPlayer, 
    StreamingMedia 
  ]
})
export class AppModule {}
