import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    getCursos() {
        return ['CC', 'PHP', 'HTML', 'Angular 4', 'Phonegap'];
    }

}