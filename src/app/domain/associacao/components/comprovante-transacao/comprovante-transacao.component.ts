import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprovante-transacao',
  templateUrl: './comprovante-transacao.component.html',
  styleUrls: ['./comprovante-transacao.component.scss']
})
export class ComprovanteTransacaoComponent implements OnInit {
  tipoTransacao = "credito/debito";
  statusTransacao = "Confirmação/Cancelamento"
  dataTransacao = "datatransacao - 01/01/2022";

  valorTotal = 0;
  qntParcela = "";
  valorParcela = "";

  numeroCartao = "";

  idCentral = ""
  idBacen = ""

  titulo = "Comprovante";
  pagamentoUrl = "/";
  form?: any;
  recibo?: any;


  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder) {
    this.recibo = this.router.getCurrentNavigation()?.extras?.state?.['recibo'];
    console.log("comp-transacao: "+ this.recibo);
    if(this.recibo?.tipoTransacao == 1){
      this.tipoTransacao ="Credito";

    } else if(this.recibo?.tipoTransacao == 2){
      this.tipoTransacao ="Debito";
    }
    this.dataTransacao = this.recibo?.dataTransacao;
    this.idCentral = this.recibo?.transacoes.idCentral;
    this.idBacen = this.recibo?.transacoes.idBacen;
    this.statusTransacao = this.recibo?.statusTransacao;

    if(this.tipoTransacao == "Credito"){
      this.valorTotal = this.recibo?.cartaoCredito.numeroParcela * this.recibo?.valorTransacao;
      let nmCartao: string;
      nmCartao = this.recibo?.cartaoCredito.numeroCartao;
      this.numeroCartao = nmCartao.substring(12);
      this.qntParcela = this.recibo?.cartaoCredito.numeroParcela;
      this.valorParcela = this.recibo?.valorTransacao;
    }else if(this.tipoTransacao == "Debito"){
      this.valorTotal = this.recibo?.valorTransacao;

      let nmCartao: string;
      nmCartao = this.recibo?.cartaoDebito.numeroCartao;
      this.numeroCartao = nmCartao.substring(12);
    }
    console.log(this.recibo);
  }

  ngOnInit(): void {
  }

  SalvarComprovante(){
    this.router.navigateByUrl(this.pagamentoUrl);
  }

  VoltarPagina(): void {
    this.location.back();
  }

}
export const exportCSV = () => {
}