import { NgModule } from '@angular/core';
import { GiphySearchComponent } from './giphy-search.component';
import { CommonModule } from '@angular/common';
import { GiphySearchRoutingModule } from './giphy-search-routing.module';
import { GiphySearchListModule } from './giphy-search-list/giphy-search-list.module';
import { GiphySearchService } from './giphy-search.service';
import { SharedModule } from 'app/shared/shared.module';
import { GiphySearchListComponent } from 'app/giphy/giphy-search/giphy-search-list/giphy-search-list.component';

@NgModule({
  imports: [
    CommonModule, GiphySearchRoutingModule, GiphySearchListModule, SharedModule, GiphySearchListModule
  ],
  exports: [ ],
  declarations: [ GiphySearchComponent ],
  providers: [ GiphySearchService ],
})
export class GiphySearchModule {
}
