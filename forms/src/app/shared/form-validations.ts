import { FormControl, FormGroup } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: any) => {
      // const values = formArray.controls;
      // let totalChecked = 0;
      // for(let i=0; i < values.length; i++){
      //   if(values[i].value){
      //     totalChecked += 1;
      //   }
      // }
      
      const totalChecked = formArray.controls
        .map((v: any) => v.value)
        .reduce((total: any, current: any) => (current ? total + current : total), 0);

      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }

  static cepValidator(control: FormControl){

    const cep = control.value.replace(/\D/g, '');
    if(cep && cep !== ''){
      var validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true }
    }

    return null;
  }
  
  static equalsTo(otherField: string){
    const validator = (formControl: FormControl) => {
      if(otherField == null){
        throw new Error('É necessário informar um campo.');
      }
      
      if(!formControl.root || !(<FormGroup>formControl.root).controls){
        return null;
      }
      
      const field = (<FormGroup>formControl.root).get(otherField);

      if(!field){
        throw new Error('É necessário informar um campo válido');
      }

      if(field.value !== formControl.value){
        return { equalsTo: otherField }
      }

      return null;
    }
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){
    const config: any = { 
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalid': 'CEP invalido.'
    };
    return config[validatorName];
  }

}
