import { Component, OnInit } from '@angular/core';
import { GiphyService } from "app/giphy/giphy.service";
import { Response } from '@angular/http';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'giphy-component',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  gifs: any[] = [];  

  constructor(private giphyService: GiphyService, private title: Title){

  }

  ngOnInit(): void {
    this.title.setTitle('Giphy');
    this.giphyService.pequisarGiphy().subscribe((response : Response) => this.gifs = response.json().data );
  }
}
