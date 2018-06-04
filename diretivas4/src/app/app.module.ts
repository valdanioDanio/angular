import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { OperadorElvesComponent } from './operador-elves/operador-elves.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasNgifComponent,
    DiretivaNgStyleComponent,
    OperadorElvesComponent,
    ExemploNgContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
