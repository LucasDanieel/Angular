import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  cursos: any = [];
  pagina!: number;
  inscricao!: Subscription;

  proximaPagina(){
    //this.pagina++
    this.router.navigate(['/cursos'], {
      queryParams: {'pagina': ++this.pagina}
    });
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe((queryParams: any) =>{      
      this.pagina = queryParams['pagina']
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
