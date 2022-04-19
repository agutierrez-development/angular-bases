import { Component } from '@angular/core';

@Component({
    selector   : 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es de: <strong>{{base}}</strong></h3>

        <button (click)="acumular( base )" > + {{base}} </button>

        <span>{{ contador }}</span>

        <button (click)="acumular( -base )" > - {{base}} </button><br/>
    `
})
export class ContadorComponent {

    titulo  :string = 'Contador App';
    contador:number = 0;
    base    : number = 15;
  
    acumular( valor:number ) {
      this.contador += valor; 
    }

}