/* 
bloco 4.1 TRYBE - JS INTRODUÇÃO!

const myName = 'Alberto';
const birthCity = 'Alegre';
let birthYear = 1995;

//birthCity = 'Guaçui';
birthYear = 2030;

//console.log("Meu nome: " + myName + " Minha cidade: " + birthCity + " Ano de nascimento: " + birthYear);

*/

/*


const base = 5 ;
let heigth = 8;

let area = base * heigth;
const perimeter = (base + heigth) * 2;

console.log("Area: " + area + " Perimetro: " + perimeter)
*/

/*

SE e SE
const notaDesafio = 70;
if (notaDesafio >= 80){
    console.log("Parabéns! Aprovado!");
} else if(notaDesafio < 80 && notaDesafio >= 60){
    console.log("Lista de espera")
} else{
    console.log("Reprovado");
}
*/

/*
const currentHour = 10; //entre 4 e 24

let message = "";

SE, e SENAO SE e && 
SE e E

if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
    console.log(message);
} else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
    console.log(message);
} else if(currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
} else if (currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!!!";
    console.log(message);
} else if(currentHour >= 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado";
    console.log(message);  
} else{
    message = "Vai dormir";
    console.log(message);    
}
*/

/*
let weekDay = "segunda-feira";

//Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
//Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".


if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" ||
                weekDay === "quinta-feira" || weekDay === "sexta-feira"){
                    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
                }
                else{
                    console.log("Amém FIM DE SEMANA");
                };

*/

/*
let situacao = 4;

switch (situacao) {
  case 0:
    texto = "aprovada";
    break;
  case 1:
    texto = "lista";
    break;
  case 2:
    texto = "reprovada";
    break;
  default:
    texto = "não se aplica";
}
console.log(texto);
*/

/*

Exercicios: Agora a prática

const a = 10;
const b = 5;

let adicao, subtracao, multiplicacao, divisao, modulo;

adicao = a + b;
subtracao = a - b;
multiplicacao = a * b;
divisao = a / b;
modulo = a % b;

console.log("Resultado: " + adicao);
console.log("Resultado: " + subtracao);
console.log("Resultado: " + multiplicacao);
console.log("Resultado: " + divisao);
console.log("Resultado: " + modulo);
*/

/*
const primeiroNumero = 4;
const segundoNumero = 4;

if(primeiroNumero > segundoNumero){
    console.log("Primeiro Numero é o maior");
} else if(segundoNumero > primeiroNumero){
    console.log("Segundo Número é o maior")
} else{
    console.log("Mesmo tamanho")
}

*/

/*
const primeiroNumero = 8;
const segundoNumero = 40;
const terceiroNumero = 4

if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){
    console.log("Primeiro Número é o maior");
} else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
    console.log("Segundo Número é o maior")
} else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero){
    console.log("Terceiro Número é o maior");
} 
else{
    console.log("Mesmo tamanho")
}
*/

/*
const valor = 0;

if (valor > 0) {
    console.log("positive");
} else if (valor < 0){
    console.log("negative");
} 
else {
    console.log("zero");
}
*/

/*
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
const primeiroAngulo = 30;
const segundoAngulo = 30;
const terceiroAngulo = 120;
let resultado = primeiroAngulo + segundoAngulo + terceiroAngulo;
//Um ângulo será considerado inválido se não tiver um valor positivo.

let resultado_positivo = primeiroAngulo > 0 && segundoAngulo > 0 && terceiroAngulo > 0; // retorna true ou false
//console.log(resultado_positivo);
if (resultado_positivo){ //resultado_positivo -> true
    if(resultado === 180){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
else{
    console.log("Angulo invalido");
};
*/




/*
const peca = "REiS";

switch (
  peca.toLowerCase() // funcao transforma todos os valores da string para minusculas
) {
  case "peão":
    texto =
      "De maneira geral, os peões se movem somente para frente, uma casa por vez.";
    break;
  case "bispo":
    texto =
      "Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça. O bispo não pode pular outras peças.";
    break;
  case "torre":
    texto =
      "A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças.";
    break;
  case "cavalo":
    texto =
      "O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.";
    break;
  case "rainha":
    texto =
      "Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.";
    break;
  case "rei":
    texto =
      "O rei é a peça mais importante do xadrez. Se o rei for encurralado de modo que sua captura seja inevitável, o jogo termina e o este jogador perde. ";
    break;

  default:
      texto = "Peça inválida";
    break;
}

console.log(texto);
*/

// fiz do nada isso aqui -xD- 
/*
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
for (let x in cars) {
  text += cars[1] + " ";
  console.log(text);
  break
}
*/


/*

Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:




Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

*/


/* 
const valor = 300;
if (valor >= 90 && valor <= 100){
  console.log("A");
} else if (valor >= 80 && valor <= 90) {
  console.log("B");
} else if (valor >= 70 && valor <= 80) {
  console.log("C");
} else if (valor >= 60 && valor <= 70) {
  console.log("D");
} else if (valor >= 50 && valor <= 60) {
  console.log("E");
} else if (valor >= 00 && valor < 50) {
  console.log("F");
} else{
  console.log("XD ERRO XD");
}

*/

/*
const numero1 = 2;
const numero2 = 43;
const numero3 = 6;
let resultado;
if (numero1 % 2 === 0 && numero2 % 2 === 0 && numero3 % 2 === 0){
  resultado = true;
  console.log(resultado + " é par")
}
*/

/*
const numero1 = 2;
const numero2 = 2;
const numero3 = 0;
let resultado;
if (numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0){
  resultado = true;
  console.log(resultado + " é impar")
} 
*/

/*
const custoProduto = 100;
const valorVenda = 200;
const imposto = (0.2 * custoProduto);

let valorEntrada = 0;
let lucro;

if(valorEntrada > 0){
  lucro = (valorVenda - imposto - custoProduto) * valorEntrada;
  console.log(lucro)
} else {
  console.log("valor invalido");
}

*/

/*
const salarioBruto = 5000.00;
let inss;
let ir;

//INSS
if(salarioBruto > 0 && salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08;
  salarioInss = salarioBruto - inss;
} else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92){
  inss = salarioBruto * 0.09;
  salarioInss = salarioBruto - inss;
} else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
  salarioInss = salarioBruto - inss;
} else {
  salarioInss = salarioBruto - 570.88;
}
console.log("Salario Base: " + salarioInss)

//IR 
if(salarioInss > 1903.99 && salarioInss <= 2826.65){

  ir = (salarioInss * 0.075) - 142.80
  salarioIr = salarioInss - ir; 

} else if(salarioInss > 2826.65 && salarioInss <= 3751.05){

  ir = (salarioInss * 0.15) - 354.80
  salarioIr = salarioInss - ir 

} else if(salarioInss > 3751.05 && salarioInss <= 4664.68){

  ir = (salarioInss * 0.225) - 636.13
  salarioIr = salarioInss - ir 

} else if(salarioInss > 4664.68){

  ir = (salarioInss * 0.275) - 869.36
  salarioIr = salarioInss - ir; 
}
// salario final

console.log(salarioIr);

*/

