import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  {

  ngOnInit(): void {
  }
  name = ''
  password = ''
  login = false
  noLogin = false

  usuarios = [
    { nombre: 'javier', contrasena: 'javier' },
    { nombre: 'ana', contrasena: 'ana' }
    
  ]

  submitForm() {
    const usuarioValido = this.usuarios.find(usuario => usuario.nombre === this.name && usuario.contrasena === this.password)

    if (usuarioValido) {
      this.login = true
      this.noLogin = false
    } else {
      this.login = false
      this.noLogin = true
    }
  }
  
  }
  
