import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaStartComponent } from './start/lista-start.component';
import { DadosStartComponent } from './start/dados-start.component';
import { NovoStartComponent } from './start/novo-start.component';
import { EditarStartComponent } from './start/editar-start.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaStartComponent,
    DadosStartComponent,
    NovoStartComponent,
    EditarStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
