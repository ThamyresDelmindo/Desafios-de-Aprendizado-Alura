alert('Boas vindas ao nosso site!');

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

nome = prompt ('Digite seu nome');
idade = prompt ('Digite sua idade');

if (idade >= 18)  { 
        alert ('Pode tirar habilitação!');
} else {
    if (idade < 18)
    alert ('Você ainda é menor de idade');
}

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert (mensagemDeErro);
//VARIAVEIS: LET, IF, WHILE, 