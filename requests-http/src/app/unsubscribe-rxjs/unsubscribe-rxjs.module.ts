import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocComponent } from './componentes/poc/poc.component';
import { PocAsyncComponent } from './componentes/poc/poc-async.component ';
import { PocTakeUntilComponent } from './componentes/poc/poc-take-until.component';
import { PocTakeComponent } from './componentes/poc/poc-take.component';
import { PocUnsubComponent } from './componentes/poc/poc-unsub.component';


@NgModule({
  declarations: [
    UnsubscribePocComponent,
    PocBaseComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
  ],
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ]
})
export class UnsubscribeRxjsModule { }
