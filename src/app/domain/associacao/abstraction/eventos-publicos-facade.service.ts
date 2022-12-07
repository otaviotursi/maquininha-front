import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventosPublicosCoreService } from '../core/eventos-publicos-core.service';
import { CartaoCredito, CartaoDebito } from '../model/Cartao';
import { Recibo } from '../model/Recibo';
import { Transacoes } from '../model/Transacoes';

@Injectable({
  providedIn: 'root'
})
export class EventosPublicosFacadeService {

  constructor(
    private eventosPublicosService:EventosPublicosCoreService
  ) { }
  // burcaEventos(){
  //   return this.eventosPublicosService.getEvetos()
  // }
  // buscarStatusDaMaquina(){
  //   return this.eventosPublicosService.getEvetos()
  // }
  AutorizarTerminal(chaveMaquina: string):Observable<boolean>{
    return this.eventosPublicosService.postAutorizacaoTerminal(chaveMaquina);
  }
  PagarCartaoCredito(dadosCartaoCredito: CartaoCredito):Observable<Transacoes>{
    return this.eventosPublicosService.postPagarCredito(dadosCartaoCredito);
  }
  PagarCartaoDebito(dadosCartaoDebito: CartaoDebito):Observable<Transacoes>{
    return this.eventosPublicosService.postPagarDebito(dadosCartaoDebito);
  }
  CancelarTransacao(dadosTransacao: Transacoes):Observable<Recibo>{
    return this.eventosPublicosService.postCancelarTransacao(dadosTransacao);
  }
}
