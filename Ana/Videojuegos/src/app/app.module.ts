import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component'
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component'
import { ListadoComponent } from './listado/listado.component'
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SobreNosotrosComponent,
    ListadoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }