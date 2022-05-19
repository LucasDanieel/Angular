import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, switchMap, map, tap } from 'rxjs';
import { Cidade } from '../models/cidade';
import { EstadoBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadobr.json');
  }

  getCidadesBr(idEstado: any){
    return this.http.get<Cidade[]>('assets/dados/cidadebr.json')
      .pipe(map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }

  getCargo() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleni', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' },
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ];
  }
}
