import { NgModule } from '@angular/core';
import { GiphyComponent } from "./giphy.component";
import { GiphyRoutingModule } from "app/giphy/giphy-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [SharedModule, GiphyRoutingModule],
    declarations: [GiphyComponent],
    exports: [GiphyComponent],
    providers: []
})
export class GiphyModule{

}