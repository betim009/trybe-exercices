//parte 1
//1
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const testingScope = (escopo) => {
//     if (escopo === true){
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizado no escopo.`;
//     console.log(ifScope);
//     } else {
//       const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
// }
// testingScope(true);

//2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.
// const retornaOddsAndEvens = () => {
//     // const oddsAndEvens = [13, 3, 4, 10, 7, 2];
//     oddsAndEvens[0] = 2;
//     oddsAndEvens[1] = 3;
//     oddsAndEvens[2] = 4;
//     oddsAndEvens[3] = 7;
//     oddsAndEvens[4] = 10;
//     oddsAndEvens[5] = 13;
//     return oddsAndEvens;

// }
// console.log(`Os números ${retornaOddsAndEvens()} se encontram ordenados de forma crescente!`);

//parte 2
//1
// const fatorial = numero => {
//     let resultado = 1;

//     for (index = 2; index <= numero; index +=1){
//         resultado = resultado * index
//     }
//     return resultado
// }

// console.log(fatorial(4))

//2
// const retornaMaiorPalavra = frase =>{
//     let palavraDaFrase = frase.split(' '); //dividi as palavras;
//     let tamanho = 0;
//     let resultado = '';

//     for (element of palavraDaFrase){
//         if(tamanho < element.length) {
//             tamanho = element.length;
//             resultado = element;
//         }
//     }
//     return resultado;

// }
// console.log(retornaMaiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3 🚀 Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// const botao = document.querySelector("#botao");
// const count = document.querySelector("#count");


// function clickCount() {
//     let ctdr = 0;
//     botao.addEventListener("click",  () => {
//     ctdr += 1; count.innerHTML = `${ctdr} tai`;
//   });
// }
// clickCount();

//4 🚀 Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
// Exemplo:
// "Tryber x aqui!
// Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...
// #goTrybe".

// const string = 'Tryber x aqui!';
// const skills = ['Empatia', 'JS', 'HTML', 'CSS']; //4
// let text = '';

// function strReplace() {
//     newstring = string.replace('x', 'bebeto');
//     return newstring;
// }

// function skillsArray(item, index){
//     let texto = `${index} ${item}`
//     console.log(texto)
// }
// // console.log(strReplace(string))
// console.log(strReplace(strReplace), skills.forEach(skillsArray));

const arr = ['html', 'css', 'js'];
function construindoFraseSkills (string) {
    
    const fun1 = frase => (
        `Tryber ${frase} Aqui`
    );
    let resultado = `-- ${fun1(string)}
    Minhas habilidades:`;
    arr.forEach((skill, index) =>
    resultado = `-- ${resultado}
    - ${skill}`);

    resultado = `${resultado}
    #goTrybe`
    return resultado;
}

console.log(construindoFraseSkills('bebeto'));

// function buildSkillsPhrase (paramOne) {
//     const fun1 = paramInner => (
//       `Tryber ${paramInner} aqui!

//       Tudo bem?`
//     );

//     const resultado = fun1(paramOne)
//     console.log(resultado)
// }
// // console.log(buildSkillsPhrase('beto'))