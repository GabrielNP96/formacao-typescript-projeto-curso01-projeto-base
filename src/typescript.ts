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
    tipoTransacao: string,
    data: Date,
    valor: number

}

const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}