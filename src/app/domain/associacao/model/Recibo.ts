import { CartaoCredito, CartaoDebito } from "./Cartao";
import { Transacoes } from "./Transacoes";

export class Recibo{
    cartaoCredito?: CartaoCredito;
    cartaoDebito?: CartaoDebito;
    transacoes?: Transacoes;
    valorTransacao?: number;
    tipoTransacao?: number;
    dataTransacao?: Date;
    statusTransacao?: string;
}