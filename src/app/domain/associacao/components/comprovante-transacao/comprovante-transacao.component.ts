import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExportToCsv } from 'export-to-csv';

const optionsCSV = { 
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true, 
  showTitle: false,
  title: '',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};


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

  SalvarComprovante(): void{
  

    var data = [
      {
        StatusTransacao: this.statusTransacao,
        TipoTransacao: this.tipoTransacao,
        DataTransacao: this.dataTransacao,
        ValorTotal: "R$: "+this.valorTotal,
        QntParcels: this.qntParcela,
        ValorParcela: "R$: "+this.valorParcela,
        NumeroFimCartao: "**** "+this.numeroCartao,
        idBacen: this.idBacen,
        idCentral: this.idCentral,
      }
    ];
    console.log('SalvarComprovante'+data[0].StatusTransacao);
    console.log('SalvarComprovante'+data[0].TipoTransacao);
    console.log('SalvarComprovante'+data[0].DataTransacao);
    console.log('SalvarComprovante'+data[0].ValorTotal);
    console.log('SalvarComprovante'+data[0].QntParcels);
    console.log('SalvarComprovante'+data[0].ValorParcela);
    console.log('SalvarComprovante'+data[0].NumeroFimCartao);
    console.log('SalvarComprovante'+data[0].idBacen);
    console.log('SalvarComprovante'+data[0].idCentral);
    const csvExporter = new ExportToCsv(optionsCSV);
 
    csvExporter.generateCsv(data);

    

    this.router.navigateByUrl(this.pagamentoUrl);
  }

  ConvertToCSV(objArray: any): string {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
      var str = '';
      var row = "";
  
      for (var index in objArray[0]) {
          //Now convert each value to string and comma-separated
          row += index + ',';
      }
      row = row.slice(0, -1);
      //append Label row with line break
      str += row + '\r\n';
  
      for (var i = 0; i < array.length; i++) {
          var line = '';
          for (var index in array[i]) {
              if (line != '') line += ','
  
              line += array[i][index];
          }
          str += line + '\r\n';
      }
      return str;
  }

  VoltarPagina(): void {
    this.location.back();
  }

}
export const exportCSV = () => {
}