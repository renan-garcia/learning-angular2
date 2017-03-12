import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GiphyService {
  constructor(private http: Http){
  }

  pequisarGiphy(): Observable<Response> {
    let url = 'http://api.giphy.com/v1/gifs/search?q=rage&api_key=dc6zaTOxFJmzC&limit=50';
    return this.http.get(url);
  }
}
