import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ContatoComponent } from 'app/contato/contato.component';
import { ContatoRoutingModule } from 'app/contato/contato-routing.module';
import { ContatoComponentService } from 'app/contato/contato.component.service';

@NgModule({
  imports: [SharedModule, ContatoRoutingModule],
  declarations: [ ContatoComponent ],
  exports: [ ContatoComponent ],
  providers: [ ContatoComponentService ]
})
export class ContatoModule { }