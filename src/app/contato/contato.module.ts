import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared/shared.module";
import { ContatoComponent } from "app/contato/contato.component";
import { ContatoRoutingModule } from "app/contato/contato-routing.module";

@NgModule({
  imports: [SharedModule,ContatoRoutingModule],
  declarations: [ ContatoComponent ]
})
export class ContatoModule { }
