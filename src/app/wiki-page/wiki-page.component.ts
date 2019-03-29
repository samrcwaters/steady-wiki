import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wiki-page',
  templateUrl: './wiki-page.component.html',
  styleUrls: ['./wiki-page.component.css']
})
export class WikiPageComponent implements OnInit {

  constructor(private pageService: PageService,
              private sanitizer: DomSanitizer) { }

  pageNames: string[];
  pageName: string;
  pageContent: string;

  ngOnInit() {
    this.findPageName();
    this.getPageNames();
    // this.addClickListeners();
  }

  /* Retrieves name of desired page from url parameters */
  private findPageName() {
    const url = window.location.pathname;
    // Remove forward slash from url to get page name
    this.pageName = url.substring(1);
  }

  /* Uses PageNameService to get all page names from server */
  private getPageNames() {
    this.pageService.getPageNames()
      .subscribe((pageNames) => {
        this.pageNames = pageNames;
        if (pageNames.includes(this.pageName)){
          this.getPageContent();
        }
      });
  }

  /* Uses PageNameService to get page's content from server */
  private getPageContent() {
    this.pageService.getPageContent(this.pageName)
      .subscribe((res) => {
        let content = res.content;
        this.pageNames.forEach(name => {
          content = this.replacePageNameOccurrences(name, content);
        });
        this.sanitizer.bypassSecurityTrustHtml(content);
        this.pageContent = content;
      });
  }

  private replacePageNameOccurrences(pageName: string, pageContent: string) {
      let pageNameLen = pageName.length;
      let contentLen = pageContent.length;
      let startIndex = 0, index, indices = [];
      while ((index = pageContent.indexOf(pageName, startIndex)) > -1) {
        indices.push(index);
        let before = pageContent.slice(0, index);
        let after = pageContent.slice(index + pageNameLen, contentLen-1);
        let insert = `<a href="/${pageName}">${pageName}</a>`;
        startIndex = index + insert.length;
        pageContent = before + insert + after;
      }
      return pageContent;  
  }

}
