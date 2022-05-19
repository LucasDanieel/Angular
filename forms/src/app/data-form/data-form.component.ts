import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, empty, map, Observable, retry, switchMap, tap } from 'rxjs';
import { BaseFormComponent } from '../shared/base-form/base-form.component';

import { FormValidations } from '../shared/form-validations';
import { Cidade } from '../shared/models/cidade';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
 
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmialsService: VerificaEmailService
  ) {
    super();
  }

  //formulario!: FormGroup;
  estados!: EstadoBr[];
  cidades!: Cidade[];
  //estados!: Observable<any>;
  cargos!: any[];
  tecnologias!: any[];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  override ngOnInit(): void {

    //this.verificaEmialsService.verificaEmail('email@gmail.com').subscribe();

    //this.estados = this.dropdownService.getEstadosBr().subscribe();

    this.dropdownService.getEstadosBr().subscribe(dados => this.estados = dados);

    this.cargos = this.dropdownService.getCargo();

    this.tecnologias = this.dropdownService.getTecnologias();

    // this.dropdownService.getEstadosBr().subscribe((dados: any) => {
    //   (this.estados = dados), console.log(dados);
    // });

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: ['', [FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, FormValidations.cepValidator]],
        number: ['', Validators.required],
        complement: [''],
        street: ['', Validators.required],
        neighborhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),

      cargo: [''],
      tecnologia: [''],
      newsletter: [true],
      termos: [false, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });

    this.formulario.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('Valor do CEP: ' + value)),
        switchMap(status => status === 'VALID' ? 
          this.cepService.consultaCEP(this.formulario.get('endereco.cep')?.value)
          : empty())
      )
      .subscribe(dados => dados ? this.populaForm(dados) : {});

      this.formulario.get('endereco.state')?.valueChanges
        .pipe(
          tap(estado => console.log('Novo estado', estado)),
          map(estado => this.estados.filter(e => e.sigla == estado)),
          tap(console.log),
          map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
          switchMap(estadoId => this.dropdownService.getCidadesBr(estadoId)),
          //tap(console.log)
        )
        .subscribe(cidades => this.cidades = cidades);

      //this.dropdownService.getCidadesBr(8).subscribe(console.log);
  }

  buildFrameworks() {
    const values = this.frameworks.map((v) => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  submit() {
    //console.log(this.formulario.controls);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: any) => (v ? this.frameworks[i] : null))
        .filter((v: any) => v != null),
    });
    console.log(valueSubmit);

    this.http.post('https://httpbin.org/post', valueSubmit).subscribe(
        (data) => {
          console.log(data);
          //this.resetar();
        },
        (error: any) => alert('Erro')
      );

  }

  cepCompl() {
    //console.log(this.formulario.value.cep);
    var cep = this.formulario.value.endereco.cep.replace(/\D/g, '');

    if (cep != '') {
      this.cepService
        .consultaCEP(cep)
        .subscribe((dados) => this.populaForm(dados));
    }
  }

  populaForm(data: any) {
    //console.log(data);

    this.formulario.patchValue({
      endereco: {
        complement: data.complemento,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      },
    });
  }

  resetForm() {
    this.formulario.patchValue({
      endereco: {
        cep: '',
        street: '',
        neighborhood: '',
        city: '',
        state: '',
      },
    });
  }

  setCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleni', desc: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  comparaCargos(obj1: any, obj2: any) {
    return obj1 && obj2
      ? obj1.nivel === obj2.nivel && obj1.desc === obj2.desc
      : obj1 === obj2;
  }

  setTecnologias() {
    this.formulario.get('tecnologia')?.setValue(['java', 'javascript', 'php']);
    console.log(this.formulario.value.frameworks);
  }

  validarEmail(formControl: FormControl){
    return this.verificaEmialsService.verificaEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true} : null));
  }
}
