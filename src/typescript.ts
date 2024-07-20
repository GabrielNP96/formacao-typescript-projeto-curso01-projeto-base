//tipos primitivos
let valor: number = 3000;
let nome: string = 'G';
let qualquer: any = '';
qualquer = 12;


//arrays
const lista: number[] = [];
lista.push(1);
lista.push(22);

//type alias
type Transacao = {
    tipoTransacao: tipoTransacao;
    data: Date;
    valor: number;

}

//enum
enum tipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}