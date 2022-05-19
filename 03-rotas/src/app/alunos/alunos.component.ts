import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private alunosService: AlunosService) { }

  alunos: any[] = [];

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
