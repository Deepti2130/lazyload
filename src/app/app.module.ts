import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImgComponent } from './shared/component/img/img.component';
import { LazyloadDirective } from './shared/directive/lazyload.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    LazyloadDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
