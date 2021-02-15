import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionAComponent } from './components/landing-page/section-a/section-a.component';
import { SectionBComponent } from './components/landing-page/section-b/section-b.component';
import { SectionCComponent } from './components/landing-page/section-c/section-c.component';
import { FactComponent } from './components/landing-page/section-c/fact/fact.component';
import { SectionDComponent } from './components/landing-page/section-d/section-d.component';
import { CardComponent } from './components/landing-page/section-d/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAComponent,
    SectionBComponent,
    SectionCComponent,
    FactComponent,
    SectionDComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
