import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  constructor() { }

  //@Input() mostrarErro?: boolean;
  //@Input() text!: string;

  @Input() control!: any;
  @Input() label!: string;

  ngOnInit(): void {
  }

  get errorMessage(){
    for(const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName])
      }
    }
    
    return null;
  }

}