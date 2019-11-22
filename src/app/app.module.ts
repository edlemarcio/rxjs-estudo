import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MergeComponent } from './operadores/merge/merge.component';
import { ListaSimplesComponent } from './shared/lista-simples/lista-simples.component';
import { TesteComponent } from './shared/teste/teste.component';
import { TransformationComponent } from './operadores/transformation/transformation.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeComponent,
    ListaSimplesComponent,
    TesteComponent,
    TransformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
