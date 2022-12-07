import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosPublicosFacadeService } from '../../abstraction/eventos-publicos-facade.service';
import { Transacoes } from '../../model/Transacoes';
import { Recibo } from '../../model/Recibo';

@Component({
  selector: 'app-cancelar-transacao',
  templateUrl: './cancelar-transacao.component.html',
  styleUrls: ['./cancelar-transacao.component.scss'],
})
export class CancelarTransacaoComponent implements OnInit {
  titulo = 'Cancelar Transação';
  pagamentoUrl = '/comprovantetransacao';
  form?: any;
  recibo?: Recibo;
  constructor(
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder,
    private serviceMaquina: EventosPublicosFacadeService
  ) {}

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      idCentral: ['', Validators.required],
      idBacen: ['', Validators.required],
    });
  }
  SeguirOperacao() {
    let transacoes = new Transacoes();
    transacoes.idBacen = this.form.value.idBacen;
    transacoes.idCentral = this.form.value.idCentral;
    this.serviceMaquina.CancelarTransacao(transacoes).subscribe((res) => {
      this.recibo = new Recibo();
      this.recibo = res;
      this.recibo.transacoes = transacoes;
      this.recibo.statusTransacao = "Cancelamento de Compra";

      console.log(res);
    });
    this.router.navigateByUrl(this.pagamentoUrl, {state:{"recibo": this.recibo}});
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
