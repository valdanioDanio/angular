import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
// import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
// // import { CursoNaoEncotradoComponent } from './cursos/curso-nao-encotrado/curso-nao-encotrado.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CursosComponent,
    LoginComponent,
    // CursoDetalheComponent,
    // CursoNaoEncotradoComponent,
    // CursoNaoEncotradoComponent
  ],
  imports: [
  BrowserModule,
    // routing
    CursosModule,
    AppRoutingModule
  ],
 // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
