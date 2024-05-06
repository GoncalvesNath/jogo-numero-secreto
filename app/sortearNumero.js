const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random () * maiorValor + 1);
}

console.log('Número secreto:', numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor; // innerhtml é uado para alterar o texto de alguma parte do html, nesse caso no html o maio número era 100 e foi alterado para 1000