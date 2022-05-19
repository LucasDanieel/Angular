import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false;

  fazerLogin(usuario: Usuario){

    if(usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456'){

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
