import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elves',
  templateUrl: './operador-elves.component.html',
  styleUrls: ['./operador-elves.component.css']
})
export class OperadorElvesComponent implements OnInit {

  tarefa: any = {
    desc: ' Descricao tarefa',
    responsavel: {
      usuario: null
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
