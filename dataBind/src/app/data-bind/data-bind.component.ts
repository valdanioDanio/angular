import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  constructor() { }

  nome: string = "Valdanio Alberto";
  isMouseOver: boolean = false;
  nomes:any = "abd";
  valorInicial = 29;

  pessoa:any = {
    nome:'Valdanio',
    idade: 20
  }

  nomeCurso:string ="Curso de Angular";

  getValor() {
    return 23 + 10;
  }

  btnClick() {
    alert('btn clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento);
  }

  OnMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  OnMouseOverOut() {

  }

  ngOnInit() {
  }

}
