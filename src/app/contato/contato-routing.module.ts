import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ContatoComponent } from "app/contato/contato.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contato', component: ContatoComponent }
    ])
  ]
})
export class ContatoRoutingModule { }
