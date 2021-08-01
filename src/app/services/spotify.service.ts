
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private _httpClient:HttpClient) { }//constructor

  getQuery(query:string){
    
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAuGu_MIYnKSzrmJPhn3MjtRgsjBImAodSQbWnaEhS_ckiK7bU_HX1Z3ytTSMpwLXiK13kj7Dqml7n0Rdk'
    });

    return this._httpClient.get(URL, {headers});

  }


  getNewRealeases(){
  
    return this.getQuery("browse/new-releases").pipe(map((data:any) =>{
        return data['albums'].items
    }))

  }//getNewRealeases


  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any)=>{
        return data['artists'].items
      }))
    
  } 

  getArtista(idArtista:string){
    return this.getQuery(`artists/${idArtista}`);
  }

}//class
