import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiPageComponent } from './wiki-page/wiki-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KeepHtmlPipe } from './keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WikiPageComponent,
    PageNotFoundComponent,
    KeepHtmlPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
