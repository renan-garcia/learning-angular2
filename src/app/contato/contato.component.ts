import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { ContatoComponentService } from 'app/contato/contato.component.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoComponentService: ContatoComponentService) { }

  ngOnInit() {
  }

  enviarContato(contatoForm: NgForm) {
    console.log('contatoForm:', contatoForm.value);
    this.contatoComponentService.enviarContato(contatoForm.value).subscribe((response: Response) => {
      console.log('Response', response);
      console.log('Fim');
    });
  }

}
