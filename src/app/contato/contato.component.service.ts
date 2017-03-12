import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const host = 'http://dbapi.io/db/coll';

@Injectable()
export class ContatoComponentService {

    constructor(private http: Http) {
    }

    enviarContato(contatoForm: any): Observable<Response> {
        let nomeCompleto = contatoForm.nomeCompleto;
        let email = contatoForm.contato.email;
        let mensagem = contatoForm.contato.mensagem;

        return this.http.post(host, { email: email, from: nomeCompleto, message: mensagem });
    }
    // http://restheart.org/try.html
    // Checar resultados dos posts http://dbapi.io/browser/#/db/coll
}