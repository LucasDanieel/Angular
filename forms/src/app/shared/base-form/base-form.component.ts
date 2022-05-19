import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  constructor() { }

  formulario!: FormGroup;

  ngOnInit(): void {
  }

  abstract submit() : any;

  onSubmit() {
    if(this.formulario.valid){
      this.submit();
    }else {
      Object.keys(this.formulario.controls).forEach((campo) => {
        const controle = this.formulario.get(campo);

        controle?.markAllAsTouched();
      });
    }
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: any) {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }

  verificaRequired(campo: string) {    
    return (
      this.formulario.get(campo)?.hasError('required') && this.formulario.get(campo)?.touched
    );
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaRequired(campo),
    };
  }
  
}
