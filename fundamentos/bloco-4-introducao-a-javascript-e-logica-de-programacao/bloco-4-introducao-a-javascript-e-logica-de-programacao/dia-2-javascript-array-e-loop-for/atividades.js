// atividades do bloco 4.2 - Arrays ####

/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); // retorna o tamanho desse array ~ lista

*/

/* 
//exemplo:
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0]; // premeiro elemento da lista
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1]; // ultimo elemento da lista
console.log(searchForLastTask);
// Brincar com o cachorro

*/

// adiciona um elemebnto no array
/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe a Doidado');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe a Doidado']

*/

/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]
*/

/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove a primeira tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]
*/

/*
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}
*/

// Agora a prática !! // 

/*

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const number of numbers) { // mostro todos elementos dentros de numbers array
    console.log(number)
}
*/
/*

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for (const number of numbers) {  // a soma de todos os elementos dentro de numbers array
    somaNumbers +=number
}       
console.log(somaNumbers);
*/

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for (const number of numbers) { // conta a quantidade de elementos dentro de numbers array
    somaNumbers +=1
}       
console.log(somaNumbers);

*/



/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
let qtdNumbers = 0;
for (const number of numbers) {  
    somaNumbers += number; // a soma de todos os elementos dentro de numbers array
    qtdNumbers += 1; // quantidade de elementos dentro do array numbers -> qtdNumbers = 0(qtdNumbers) +1
}       
const medFinal = somaNumbers / qtdNumbers;

if (medFinal > 20){
    console.log("Maior que 20")
} else {
    console.log("Menor que 20")
}
*/



/*

//Descobre o maior valor
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;


for (const number of numbers) {
    if (number > resultado){ // verifica se o o elemento é maior que resultado. 
        resultado = number; // se for, ganhar o seu valor, começa com 0, vai para 5, 9, 19. 70, 100.
        console.log(resultado);
    }
}
*/




// Insere os impares em um novo array
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];

for (const number of numbers) {
    if(number % 2 != 0){
        resultado.push(number)
    }
}
console.log(resultado);
*/


/*
//menor numero
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 999;

for (const number of numbers) {
    if(number < resultado){
        resultado = number;
    }
}
console.log(resultado);

*/

/*

let numbers = [1];
let resultado = 1;
let divisao
for (const number of numbers) {
    if(number < 25){
        resultado +=1;
        numbers.push(resultado);
    }
}
for (const number of numbers) {
    console.log(number / 2);
}


*/