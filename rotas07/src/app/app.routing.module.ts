import { NgModule } from "@angular/core";

import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { CursoNaoEncotradoComponent } from './cursos/curso-nao-encotrado/curso-nao-encotrado.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'curso-not', component: CursoNaoEncotradoComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})

export class AppRoutingModule{

}