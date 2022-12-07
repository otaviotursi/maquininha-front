import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosPublicosFacadeService } from '../../abstraction/eventos-publicos-facade.service';
import { CartaoDebito } from '../../model/Cartao';
import { Recibo } from '../../model/Recibo';
import { Transacoes } from '../../model/Transacoes';

@Component({
  selector: 'app-pagamento-debito',
  templateUrl: './pagamento-debito.component.html',
  styleUrls: ['./pagamento-debito.component.scss']
})
export class PagamentoDebitoComponent implements OnInit {
  titulo = "Pagamento por debito";
  pagamentoUrl = "/comprovantetransacao";
  valorTransacao:number =0;
  tipoTransacao:number =2;
  form?: any;
  transacao:Transacoes | undefined;

  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder, private serviceMaquina: EventosPublicosFacadeService) {
    this.valorTransacao = this.router.getCurrentNavigation()?.extras?.state?.['valor'];
   }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      numeroCartao: ["", [Validators.required, Validators.maxLength(16), Validators.maxLength(16) ]],
      senhaConta: ["", [Validators.required, Validators.maxLength(4), Validators.maxLength(4)]],
    });
  }
  SeguirOperacao(){
    let cartao = new CartaoDebito();
    cartao.senha = this.form.value.senhaConta;
    cartao.numeroCartao = this.form.value.numeroCartao;
    cartao.valor = this.valorTransacao;
    this.serviceMaquina.PagarCartaoDebito(cartao).subscribe(res => {
      console.log(res);
      this.transacao = new Transacoes();
      this.transacao.idCentral = res.idCentral;
      this.transacao.idBacen = res.idBacen;
      this.transacao.idTerminal = res.idTerminal;
    });

    let recibo = new Recibo();
    recibo.cartaoDebito = cartao;
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
