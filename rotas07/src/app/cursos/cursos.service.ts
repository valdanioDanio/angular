import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'PHP' },
      { id: 2, nome: 'PHP OO' },
      { id: 3, nome: 'Joomla' },
      { id: 4, nome: 'AJAX' }
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].id == id) {
        return cursos[i];
      }
    }
    return null;
  }

  constructor() { }

}
