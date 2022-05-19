import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { EnviarValorService } from '../../enviar-valor.service';

@Component({
  selector: 'app-poc-unsub',
  template: `<app-poc-base [nome]="nome" [valor]="valor" estilo="bg-secondary"></app-poc-base>`,
})
export class PocUnsubComponent implements OnInit, OnDestroy {

  constructor(private service: EnviarValorService) { }

  nome = 'Componente com unsubscribe';
  valor!: string;

  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log(`${this.nome} foi destruido`);
    
  }

}
