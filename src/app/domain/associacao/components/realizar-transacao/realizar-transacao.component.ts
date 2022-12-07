import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizar-transacao',
  templateUrl: './realizar-transacao.component.html',
  styleUrls: ['./realizar-transacao.component.scss']
})
export class RealizarTransacaoComponent implements OnInit {
  titulo = "Realizar transação"
  form?: any;

  pagamentoUrl = "/realizartransacao";
  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      metodoPagamento: [0, Validators.required],
      valorTransacao: ["", Validators.required],
    });
  }
  SeguirOperacao(){
    let metodoPagamento = this.form.value.metodoPagamento;
    if(metodoPagamento == 2){
      this.pagamentoUrl = "/pagamentodebito";
    } else if(metodoPagamento == 1) {
      this.pagamentoUrl = "/pagamentocredito";
    }
    this.router.navigateByUrl(this.pagamentoUrl,{state:{"valor": this.form.value.valorTransacao}});
  }
  

  VoltarPagina(): void {
    this.location.back();
  }
}
