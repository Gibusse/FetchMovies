import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export enum SearchType {
  all = '',
  movies = '',
  series = '',
  episode = ''
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'abc12695';
  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`)
        .pipe(
            map(results => {
              console.log('RAW', results);
               return results['Search'];
            })
        );
  }

  getDetails(id) {
      return this.http.get(`${this.url}?i=${(id)}&plot=full&apiKey=${this.apiKey}`);
  }
}
