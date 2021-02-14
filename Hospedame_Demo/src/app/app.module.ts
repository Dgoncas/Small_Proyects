import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionAComponent } from './components/landing-page/section-a/section-a.component';
import { SectionBComponent } from './components/landing-page/section-b/section-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAComponent,
    SectionBComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
