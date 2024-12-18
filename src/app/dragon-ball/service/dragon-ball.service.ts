import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

  URL = 'https://dragonball-api.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number, limit: number){
    // this.url + '/characters' + '?page=' + page + '&' + 'limit=' + limit;
    return this.http.get(`${this.URL}/characters?page=${page}&limit=${limit}`);
  }

}
