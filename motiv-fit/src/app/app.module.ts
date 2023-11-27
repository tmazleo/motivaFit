import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadComponent } from './components/cadastro/cad.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoComponent } from './components/logo/logo.component';
import { SalaComponent } from './pages/sala/sala.component';
import { ChatComponent } from './components/chat/chat.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';

@NgModule({
  declarations: [
    AppComponent,
    CadComponent,
    LoginComponent,
    HomeComponent,
    LogoComponent,
    SalaComponent,
    ChatComponent,
    AjudaComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
