
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private _httpClient:HttpClient) { }//constructor

  getNewRealeases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDvBGhYFUlROJ_es-f2bg8M7W1y7Ocx9PaF424cElQBFJif0JTtNWe0Lw769i3j31eJT_HaUdV_pQqrfks'
    });


    this._httpClient.get( 'https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(data =>{
      console.log(data);
    });

  }//getNewRealeases

}//class
