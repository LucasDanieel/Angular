import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  constructor() { }

  livro: any = {
    title: 'Learning JavaScript Data Structures and Algorithms (English Edition) eBook Kindle',
    rating: 4.34321,
    numberPags: 218,
    price: 112.99,
    releaseDate: new Date(2014, 9, 27),
    url: 'https://ler.amazon.com.br/kp/embed?asin=B00OYTCT02&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_PKPH79P3DCKGYH5545EH'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: any;

  addCurso(valor: any){
    this.livros.push(valor);
    console.log(this.livros);
    
  }

  obterCursos(){

    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) =>{
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) =>{

    setTimeout(() => resolve('Valor assíncrono'), 2000);

  });

  valorAsync2 = interval(2000).pipe(map(value => 'Valor assíncrono 2'));

  ngOnInit(): void {
  }

}
