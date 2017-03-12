import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'giphy-search-auto',
        loadChildren: 'app/giphy/giphy-search/giphy-search-auto/giphy-search-auto.module#GiphySearchAutoModule'
      },
      {
        path: 'giphy-search',
        loadChildren: 'app/giphy/giphy-search/giphy-search.module#GiphySearchModule'
      },
      {
          path: 'contato',
          loadChildren: 'app/contato/contato.module#ContatoModule'
      },
      {
          path: 'giphy',
          loadChildren: 'app/giphy/giphy.module#GiphyModule'
      },
      {
        path: 'diretiva-common-module',
        loadChildren: 'app/diretiva-common-module/diretiva-common-module.module#DiretivaCommonModuleModule'
      }

    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
