import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['../../template-form/template-form.component.css'],
})
export class CampoControlErroComponent implements OnInit {
  constructor() {}

  @Input() mostrarErro?: boolean;
  @Input() text: any;

  ngOnInit(): void {}
}
