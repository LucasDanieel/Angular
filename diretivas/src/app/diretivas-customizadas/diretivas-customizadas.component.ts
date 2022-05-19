import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  constructor() { }

  mostrarCursos: boolean = false;
  
  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  ngOnInit(): void {
  }

}
