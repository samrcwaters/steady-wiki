import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const apiUrl = "http://localhost:3001/api";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  /**
   * getPageNames
   */
  public getPageNames(): Observable<any> {
    return this.http.get(`${apiUrl}/pages`);
  }

  /**
   * getPageContent
   */
  public getPageContent(pageName: string): Observable<any> {
    return this.http.get(`${apiUrl}/pages/${pageName}`);
  }
}
