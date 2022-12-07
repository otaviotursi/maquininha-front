export abstract class Cartao{
    numeroCartao?: string;
    valor?: number;
}
export class CartaoCredito extends Cartao{
    constructor(){super()};
	nomeCartao?: string;
	dataValidade?: Date;
	cVV?: number;
	numeroParcela?: number;
}
export class CartaoDebito extends Cartao{
    constructor(){super()};
	senha?: number;
}