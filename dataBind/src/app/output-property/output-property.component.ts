import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 18;
  @Output() mudouValor = new EventEmitter();

 @ViewChild('campoInput') campoValorInupt:HTMLElement;

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor:this.valor});
  }

  onMudouValor(evento){
    console.log(evento);
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor:this.valor});   
  }
  constructor() {}

  ngOnInit() {
  }

}
