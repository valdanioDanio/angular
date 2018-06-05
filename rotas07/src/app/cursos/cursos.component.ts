import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryReadType } from '@angular/core/src/render3/interfaces/query';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosComponent: CursosService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.cursos = this.cursosComponent.getCursos();
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/cursos'],
      { queryParams: { 'pagina': ++this.pagina } }
    );
  }
  ultimaPagina() {
    if (this.pagina > 1) {
      this.pagina--;
    }
  }
}
