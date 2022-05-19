import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  usuario: any = {
    name: null,
    email: null
  }

  verificaValidTouched(form: any){
    return !form.valid && form.touched;
  }

  aplicaCssErro(form: any){

    return{
      'is-invalid': this.verificaValidTouched(form)
    }
  }

  onSubmit(form: any){
    
    this.http.post('https://httpbin.org/post',JSON.stringify(form.value)).subscribe(dados => console.log(dados));

  }


  consultaCEP(cep: any, form: any){
    
    cep = cep.value.replace(/\D/g, '');
    
    if (cep != '') {
    
      this.cepService.consultaCEP(cep).subscribe(dados => this.popularDadosForm(dados, form));
    }
  }

  popularDadosForm(dados: any, formulario: any){
    //console.log(formulario);
    
    // formulario.setValue({
    //   name: formulario.value.name,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     number: '',
    //     complement: dados.complemento,
    //     street: dados.logradouro,
    //     neighborhood: dados.bairro,
    //     city: dados.localidade,
    //     state: dados.uf
    //   }
    // })

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complement: dados.complemento,
        street: dados.logradouro,
        neighborhood: dados.bairro,
        city: dados.localidade,
        state: dados.uf
      }
    })
  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        complement: '',
        street: '',
        neighborhood: '',
        city: '',
        state: ''
      }
    })
  }

  ngOnInit(): void {
  }

}
