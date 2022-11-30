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
  dataTransacao = "datatransacao - 01/01/2022";

  tipoPagamento = "debito/credito";
  valorTotal = "01";
  qntParcela = "01";
  valorParcela = "01";

  numeroCartao = "44445555666677778888";

  idCentral = "12345"
  idBacen = "67890"

  titulo = "Comprovante";
  pagamentoUrl = "/";
  form?: any;
  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  SalvarComprovante(){
    this.router.navigateByUrl(this.pagamentoUrl);
  }

  VoltarPagina(): void {
    this.location.back();
  }

}
