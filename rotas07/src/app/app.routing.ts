import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'curso-not', component: CursoNaoEncotradoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 