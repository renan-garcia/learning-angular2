import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  listaDeGifsInterna: any[] = [];

  @Input()
  palavra: string;

  constructor() {
  }

  ngOnInit() {
  }

}
