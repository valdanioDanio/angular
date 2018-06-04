import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    paginas: 250,
    autor: 'Packt publishing - ebooks account(January 30, 2016)',
    Language: 'English',
    titulo: 'mastering javaScript',
    dataLacamento: new Date(2018, 6, 6),
    preco: 100.25,
    url: 'http://a.co/9AMERfv',
    rating: 4.54321
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000)
  });

  constructor() {}

  ngOnInit() {
  }

}
