//tipos primitivos
var valor = 3000;
var nome = 'G';
var qualquer = '';
qualquer = 12;
//arrays
var lista = [];
lista.push(1);
lista.push(22);
//enum
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
var novaTransacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
