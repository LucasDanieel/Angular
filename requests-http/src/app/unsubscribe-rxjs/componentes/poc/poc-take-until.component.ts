import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { EnviarValorService } from '../../enviar-valor.service';

@Component({
  selector: 'app-poc-take-until',
  template: `<app-poc-base [nome]="nome" [valor]="valor" estilo="bg-primary"></app-poc-base>`,
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {

  constructor(private service: EnviarValorService) { }

  nome = 'Componente take until';
  valor!: string;

  unsub$ = new Subject();

  ngOnInit(): void {
    this.service.getValor()
      .pipe(
        tap(v => console.log(this.nome, v)),
        takeUntil(this.unsub$)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    this.unsub$.next('');
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido`);
    
  }

}
