import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontrdaComponent } from './pagina-nao-encontrda/pagina-nao-encontrda.component';

const routes: Routes = [
  { path: 'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [ AuthGuard ]  
},
  { path: 'alunos', 
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule), 
    canActivate: [AuthGuard], canLoad: [ AuthGuard ]
},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontrdaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
