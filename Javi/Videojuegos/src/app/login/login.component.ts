import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  {

  ngOnInit(): void {
  }

  // creamos las varibles para recoger en name y el password del formulario
  name : string= ''
  password: string | number = ''

  // creamos login o nologin para usarlos en los *ngIf
  login = false
  noLogin = false

  // creamos los usuarios con nombre y contraseña
  usuarios = [
    { nombre: 'javier', contrasena: 'javier' },
    { nombre: 'ana', contrasena: 'ana' }
  ]

  /*
    metodo que comprueba que el usuario y la contraseña introducidos (en name y passsword) correspondan
    a el nombre y la contraseña de algun usuario.  Si coincide, pone login en true y nologin
    en false, sino pone los login al reves.
  */
  enviar() {
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
  
