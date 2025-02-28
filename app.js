alert('Olá jogador! Boas vindas ao jogo do número secreto.');
let numeroMaximo = 25;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// while é enquanto, condição para continuar executando o jogo, para gerar loop de repetição
// "!= é usado para "diferente"
//tem que colocar todo o restante dentro de while pois senão as demais condições não serão executadas até a pessoa acertar o numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto "==", retorne a mensagem de acerto 
    if(chute == numeroSecreto) {
        break;
        // 'else' é 'então/senão'
    } else {
        if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    //para atribuir tentativas, mais 1 usa o ++
    tentativas++;
    }
}

//esse let de mudar a ortografia é muito usado no mercado de trabalho
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

