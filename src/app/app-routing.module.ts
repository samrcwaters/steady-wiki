import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiPageComponent } from './wiki-page/wiki-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: ':pagename', component: WikiPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}