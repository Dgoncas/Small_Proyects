import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionAComponent } from './components/landing-page/section-a/section-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
