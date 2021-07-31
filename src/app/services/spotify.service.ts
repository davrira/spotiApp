
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
      'Authorization' : 'Bearer BQB8yyx47_SCIuLle1wAo9fBnGNDV077ro-xPuUH3SeiMHUxewJXX4_EF1bAz7Y0xhdb7EJJHPUe-wN4L4w'
    });

    return this._httpClient.get(URL, {headers});

  }


  getNewRealeases(){
  
    return this.getQuery("browse/new-releases").pipe(map((data:any) =>{
        return data['albums'].items
    }))

  }//getNewRealeases


  getArtista(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data:any)=>{
        return data['artists'].items
      }))
    
  } 

}//class
