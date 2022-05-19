import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { EnviarValorService } from '../../enviar-valor.service';

@Component({
  selector: 'app-poc-async',
  template: `<app-poc-base [nome]="nome" [valor]="valor$ | async" estilo="bg-success"></app-poc-base>`,
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  constructor(private service: EnviarValorService) { }

  nome = 'Componente com async';
  valor$!: Observable<string>;

  ngOnInit(): void {
    this.valor$ = this.service.getValor().pipe(tap(v => console.log(this.nome, v)));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
    
  }

}
