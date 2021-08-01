
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {


  @Input() items:any [] = [];
  

  constructor( private _router : Router ) { }

  
  verArtista(item:any){
    
    let artistaId;

    if(item.type == 'artists'){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }
    
    this._router.navigate(['/artists',artistaId]);

  }
  


  ngOnInit(): void {
  }

}
