import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  usuario: Usuario = new Usuario();

  FazerLogin(){
    this.authService.fazerLogin(this.usuario);
    
  }

  ngOnInit(): void {
  }

}
