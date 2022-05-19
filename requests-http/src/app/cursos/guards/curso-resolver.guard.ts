import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../cursos-lista/curso';
import { CursosService } from '../cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(private service: CursosService){

  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {
    
    if(route.params && route.params['id']){
      return this.service.loadByID(route.params['id']);
    }

    return {
      id: 0,
      nome: ''
    };

  }
  
}
