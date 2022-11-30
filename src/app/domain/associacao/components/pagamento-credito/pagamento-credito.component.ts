import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-credito',
  templateUrl: './pagamento-credito.component.html',
  styleUrls: ['./pagamento-credito.component.scss']
})
export class PagamentoCreditoComponent implements OnInit {
  titulo = "Pagamento por Credito";
  pagamentoUrl = "/comprovantetransacao";
  form?: any;
  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      nomeCartao: ["", Validators.required],
      numeroCartao: ["", Validators.required],
      dataValidadeCartao: ["", Validators.required],
      cvvCartao: ["", Validators.required],
      numeroParcelas: ["", Validators.required],
    });
  }
  SeguirOperacao(){
    this.router.navigateByUrl(this.pagamentoUrl);
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
