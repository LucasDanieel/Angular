import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  private alunos: Aluno[] = [
    { id: 1, name: 'Aluno 01', email: 'aluno01@gmail.com' },
    { id: 2, name: 'Aluno 02', email: 'aluno02@gmail.com' },
    { id: 3, name: 'Aluno 03', email: 'aluno03@gmail.com' }
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i < this.alunos.length ; i++){
      let aluno = this.alunos[i];

      if(id == aluno.id){
        return aluno;
      }
    }
    return null;
  }

}
