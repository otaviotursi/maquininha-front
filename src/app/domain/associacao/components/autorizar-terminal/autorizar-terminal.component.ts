import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosPublicosFacadeService } from '../../abstraction/eventos-publicos-facade.service';
import { Transacoes } from '../../model/Transacoes';

@Component({
  selector: 'app-autorizar-terminal',
  templateUrl: './autorizar-terminal.component.html',
  styleUrls: ['./autorizar-terminal.component.scss']
})
export class AutorizarTerminalComponent implements OnInit {
  statusResponse = false;
  chaveAcesso = "1234567890";
  titulo = "Autorizar Terminal";
  pagamentoUrl = "/cadastrarterminal";
  form?: any;
  constructor(
    private location: Location, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private autorizaMaquina: EventosPublicosFacadeService
  ) { }

  ngOnInit(): void {
    this.RecebeStatusMaquina();
  }

  AutorizarTerminal(){
    this.router.navigateByUrl(this.pagamentoUrl,{state:{"status": this.statusResponse}});
  }

  VoltarPagina(): void {
    this.location.back();
  }
  // verificaStatusMaquina(){
  //   this.autorizaMaquina.buscarStatusDaMaquina();
  // }
  RecebeStatusMaquina(){
    this.autorizaMaquina.AutorizarTerminal(this.chaveAcesso).subscribe(res => {
      this.statusResponse = res
      console.log(res);
    });
  }
}
