let saldo = 3000;

alert('teste 2022') 

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}