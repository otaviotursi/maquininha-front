import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosPublicosFacadeService } from '../../abstraction/eventos-publicos-facade.service';
import { CartaoCredito } from '../../model/Cartao';
import { Transacoes } from '../../model/Transacoes';
import { Recibo } from '../../model/Recibo';

@Component({
  selector: 'app-pagamento-credito',
  templateUrl: './pagamento-credito.component.html',
  styleUrls: ['./pagamento-credito.component.scss']
})
export class PagamentoCreditoComponent implements OnInit {
  titulo = "Pagamento por Credito";
  pagamentoUrl = "/comprovantetransacao";
  tipoTransacao:number =1;
  valorTransacao:number =0;
  transacao:Transacoes | undefined;

  form?: any;
  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder, private serviceMaquina: EventosPublicosFacadeService) {
    this.valorTransacao = this.router.getCurrentNavigation()?.extras?.state?.['valor'];
   }
  
  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      nomeCartao: ["", Validators.required],
      numeroCartao: ["", [Validators.required, Validators.maxLength(16), Validators.maxLength(16) ]],

      dataValidadeCartao: ["", [Validators.required, Validators.maxLength(4), Validators.maxLength(4) ]],
      cvvCartao: ["", [Validators.required, Validators.maxLength(3), Validators.maxLength(3) ]],
      numeroParcelas: ["", Validators.required],
    });
  }
  SeguirOperacao(){
    let cartao = new CartaoCredito();
    cartao.cVV = this.form.value.cvvCartao;
    cartao.nomeCartao = this.form.value.nomeCartao;
    cartao.numeroCartao = this.form.value.numeroCartao;
    cartao.numeroParcela = this.form.value.numeroParcelas;
    cartao.dataValidade = this.form.value.dataValidadeCartao;
    cartao.valor = this.valorTransacao;
    this.serviceMaquina.PagarCartaoCredito(cartao).subscribe(res => {
      console.log(res);
      this.transacao = new Transacoes();
      this.transacao.idCentral = res.idCentral;
      this.transacao.idBacen = res.idBacen;
      this.transacao.idTerminal = res.idTerminal;

    });
    let recibo = new Recibo();
    recibo.cartaoCredito = cartao;
    recibo.transacoes = this.transacao;
    recibo.valorTransacao = this.valorTransacao;
    recibo.tipoTransacao = this.tipoTransacao;
    recibo.dataTransacao = new Date();
    recibo.statusTransacao = "Confirmação de Compra";

    this.router.navigateByUrl(this.pagamentoUrl, {state:{"recibo": recibo}});
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
