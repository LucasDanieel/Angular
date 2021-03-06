import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService) { }

  aluno: any = {};
  inscricao!: Subscription;
  private formMudou: boolean = false;

  onInput(){
    this.formMudou = true;
    console.log('mudou');
    
  }

  podeMudarRota(){
    if(this.formMudou){

      return confirm('Tem certeza que deseja sair dessa página?');
    }

    return false;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id);

      if(this.aluno === null){
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
