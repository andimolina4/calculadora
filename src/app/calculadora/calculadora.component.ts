import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  titulo = 'Calculadora';
  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;

  constructor() { }

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }

}
