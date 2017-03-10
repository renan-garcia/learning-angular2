import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GiphyService } from "app/giphy/giphy.service";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { GiphyModule } from "app/giphy/giphy.modules";
import { GiphySearchModule } from "app/giphy/giphy-search/giphy-search.module";
import { ContatoComponent } from './contato/contato.component';
import { ContatoModule } from "app/contato/contato.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    GiphyModule,
    GiphySearchModule,
    ContatoModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
