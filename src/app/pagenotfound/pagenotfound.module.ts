import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from 'app/pagenotfound/pagenotfound-routing.module';
import { PageNotFoundComponent } from 'app/pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule, routing
  ],
  declarations: [ PageNotFoundComponent ],
  exports: [ PageNotFoundComponent ]
})
export class PageNotFoundModule { }
