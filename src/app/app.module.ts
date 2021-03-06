import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { DeuxiemeComponent } from './deuxieme/deuxieme.component';
import { TroisiemeComponent } from './troisieme/troisieme.component';
import { QuatriemeComponent } from './MesComposants/quatrieme/quatrieme.component';
import { CinquiemeComponent } from './MesComposants/cinquieme/cinquieme.component';


@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    TroisiemeComponent,
    QuatriemeComponent,
    CinquiemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
