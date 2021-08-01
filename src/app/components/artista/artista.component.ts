
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista : any = {};
  loadingArtist : boolean;

  constructor( private _ActivatedRoute : ActivatedRoute,
              private _SpotifyService : SpotifyService
    ) { 

    this.loadingArtist=true;

    this._ActivatedRoute.params.subscribe(params =>{    

      this.getArtista(params['idArtista'])
      this.loadingArtist = false;

    })

  }


  getArtista(id:string){

    this.loadingArtist = true;

    this._SpotifyService.getArtista(id).subscribe(artista =>{
      this.artista = artista;      
      console.log(artista)
      this.loadingArtist = false;

    })
  }


  gettopTracks(id:string){
    this._SpotifyService.getTopTracks(id).subscribe(artista =>{

    })
  }

  ngOnInit(): void {
  }

}
