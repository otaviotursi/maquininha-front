import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-debito',
  templateUrl: './pagamento-debito.component.html',
  styleUrls: ['./pagamento-debito.component.scss']
})
export class PagamentoDebitoComponent implements OnInit {
  titulo = "Pagamento por debito";
  pagamentoUrl = "/comprovantetransacao";
  form?: any;
  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      numeroCartao: ["", Validators.required],
      senhaConta: ["", Validators.required],
    });
  }
  SeguirOperacao(){
    this.router.navigateByUrl(this.pagamentoUrl);
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
