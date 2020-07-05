import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor( private httpClient: HttpClient) { }

  getAllCharacters(){
    return this.httpClient.get(environment.url + '/characters');
  }

  getCharacterName(name){
    return this.httpClient.get(environment.url + '/characters/' + name);
  }

  getAllHouses(){
    return this.httpClient.get(environment.url + '/houses')
  }
  
  getHouseName(name){
    return this.httpClient.get(environment.url + '/houses/' + name);
  }
}
