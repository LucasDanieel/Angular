import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  constructor(private cursosService: CursosService) {}

  cursos: string[] = [];

  onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
