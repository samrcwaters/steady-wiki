import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private pageService: PageService) { }

  pages;

  ngOnInit() {
    this.getPageNames();
  }

  private getPageNames() {
    this.pageService.getPageNames()
      .subscribe((res) => {
        this.pages = res;
      });
  }

}
