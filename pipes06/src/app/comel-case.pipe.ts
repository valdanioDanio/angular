import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'comelCase'
})
export class ComelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';   
    for(let v of values){
      result += this.captlize(v)+' ';
    }
    return result;
  }

  captlize(texto:string){
    return texto.substr(0,1).toUpperCase()+texto.substr(1).toLowerCase();
  }

}
