import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  url:string = "valdanio Alberto";
   getValor(){
     return 1+4;
   }

   imagem:string = "img/im1.jpg";

  constructor() { }

  ngOnInit() {
  }

}
