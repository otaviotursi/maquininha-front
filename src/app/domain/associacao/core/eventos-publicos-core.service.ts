import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventoInterface } from '../model/interface/evento-interface';
import { Observable } from 'rxjs';
import { Transacoes } from '../model/Transacoes';
import { of } from 'rxjs';
import { CartaoCredito, CartaoDebito } from '../model/Cartao';
import { Recibo } from '../model/Recibo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})


export class EventosPublicosCoreService {
  
  url = "http://localhost:44315";

  constructor(
    private http : HttpClient
  ) { }
  // getTransacaoMaquina():Transacoes{
  //   //return this.http.get<Transacoes>(this.url+"/RecebeTransacaoMaquina")
  //   return STATUS_TERMINAL;
  // }
  postAutorizacaoTerminal(chave: string):Observable<boolean>{
    console.log("postAutorizacaoTerminal - chave: "+ chave)
    return this.http.post<boolean>(this.url+'/AutorizarTerminal', chave, httpOptions);
    // let teste = of(true);
    // return teste;
  }
  postPagarCredito(dadoCartaoCredito: CartaoCredito):Observable<Transacoes>{
    console.log("postPagarCredito - CartaoCredito: "+ dadoCartaoCredito)
    return this.http.post<Transacoes>(this.url+'/PagarCartaoCredito', dadoCartaoCredito, httpOptions);
    // let dadosTransacao = new Transacoes();
    // let teste = of(dadosTransacao);
    // return teste;
  }
  postPagarDebito(dadoCartaoDebito: CartaoDebito):Observable<Transacoes>{
    console.log("postPagarDebito - CartaoDebito: "+ dadoCartaoDebito)
    return this.http.post<Transacoes>(this.url+'/PagarCartaoDebito', dadoCartaoDebito, httpOptions);
    // let dadosTransacao = new Transacoes();
    // let teste = of(dadosTransacao);
    // return teste;
  }
  postCancelarTransacao(dadosTransacao: Transacoes): Observable<Recibo> {
    console.log("postCancelarTransacao - Cancelar Transacao: "+ dadosTransacao)
    return this.http.post<Recibo>(this.url+'/CancelarTransacao', dadosTransacao, httpOptions);
    // let recibo = new Recibo();
    // let teste = of(recibo);
    // return teste;
  }
}

export const STATUS_TERMINAL: Transacoes = {
  idBacen: 1111,
  idCentral: 2222,
  idTerminal: 3333
}
