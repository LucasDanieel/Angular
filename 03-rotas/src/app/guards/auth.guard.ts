import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) { 
  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):  Observable<boolean> | boolean {
      
      console.log('AuthGuard');

      return this.verificarAcesso();
  }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){

      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    console.log('canLoad: verificano se usuário pode carregar o codigo do modulo');

    return this.verificarAcesso();
  }

}
