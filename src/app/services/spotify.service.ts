
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private _httpClient:HttpClient) { }//constructor

  getNewRealeases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBxqCbJTexhVI7tT1xZG63gG1na9lwxcxYeg6gB3n811wtpqFj_0U0pibwwwggWD78IomXfa54XTmUtH7U'
    });

    return this._httpClient.get( 'https://api.spotify.com/v1/browse/new-releases',{headers})

  }//getNewRealeases


  getArtista(termino:string){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBxqCbJTexhVI7tT1xZG63gG1na9lwxcxYeg6gB3n811wtpqFj_0U0pibwwwggWD78IomXfa54XTmUtH7U'
    });

    return this._httpClient.get( `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})

  } 

}//class


/*
·<.-.-..{ñ.ṕ´}
 [ ^· ─ ; "~ ""'+ 'wf dffd "]
*/