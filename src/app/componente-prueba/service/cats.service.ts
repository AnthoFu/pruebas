import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  apiURL = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) { }

  getRandomCat(){
    return this.http.get(`${this.apiURL}`);
  }
}
