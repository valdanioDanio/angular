import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';

@NgModule({
    imports: [CommonModule,CursosRoutingModule],
exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncotradoComponent],
    providers: [CursosService],
})

export class CursosModule {

}

