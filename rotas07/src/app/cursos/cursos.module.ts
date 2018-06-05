import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [CommonModule,RouterModule],
exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncotradoComponent],
    providers: [],
})

export class CursosModule {

}

