import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelar-transacao',
  templateUrl: './cancelar-transacao.component.html',
  styleUrls: ['./cancelar-transacao.component.scss']
})
export class CancelarTransacaoComponent implements OnInit {
  titulo = "Cancelar Transação";
  pagamentoUrl = "/comprovantetransacao";
  form?: any;
  constructor(private location: Location, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      idCentral: ["", Validators.required],
      idBacen: ["", Validators.required],
    });
  }
  SeguirOperacao(){
    this.router.navigateByUrl(this.pagamentoUrl);
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
