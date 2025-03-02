nome = prompt('Qual o seu nome?');
alert(`Boas vindas, ${nome}!`);

diaDaSemana = prompt('Que dia da semana é hoje?');
if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana');
}else {
    alert ('Boa semana!');
        }

numeroPositivoNegativo = prompt('Digite qualquer número, pense muito alto... ou bem baixo...');
if (numeroPositivoNegativo > 0) {
    alert('Esse é um número positivo!');
} else {
    alert('Esse é um número negativo!');
}

alert(`${nome}, agora vamos jogar um jogo. Boa sorte!`);

numeroPonto = prompt('Digite qualquer número');
if (numeroPonto >= 100) {
    alert('Parabéns! Você venceu!'); 
}else {
    alert('Que pena, você perdeu! :( Mais sorte na próxima vez!');
}

let saldo = 500;
alert(` ${nome}, o saldo da sua conta é ${saldo}.`);

