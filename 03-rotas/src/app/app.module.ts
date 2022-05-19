import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
//import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontrdaComponent } from './pagina-nao-encontrda/pagina-nao-encontrda.component';
//import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontrdaComponent,
  ],
  imports: [
    BrowserModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
