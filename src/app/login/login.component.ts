import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login-create',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   login: Login = {
    usuario: '',
    senha: ''
  }
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
   
  }

  createLogin(): void {
    this.loginService.create(this.login).subscribe(() => {
    this.loginService.showMessage('Usuário Cadastrado!')
   
    
})
}
entrarLogin():void {
  this.router.navigate([''])
  this.loginService.showMessage('Usuário Logado!')
}
resetLogin():void {
  this.router.navigate([''])
  this.loginService.showMessage('Deseja resetar o seu login?')
}
 

}

