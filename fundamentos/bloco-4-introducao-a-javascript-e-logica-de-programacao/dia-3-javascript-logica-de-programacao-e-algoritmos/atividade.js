/*
let number = 10;
let fatorial = 1;
let resultado;

    for(let i = number; i > 1; i = i -1){
            fatorial = fatorial * i; // fatorial -> 1 * 10 = 10.. -> 10 * 9 = 90.. quando i for -> 2 vai ser a ultima multiplicação... 
    }

*/
/*
let word = "trybe";

for(let i = word.length; i >= 0; i--){
    console.log(word[i]);
}
*/
/*
let text = "O mundo é lindo";
let newText;

newText = text.split(" ");
console.log(newText);
*/
/*    
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  //reverseWord += word[word.length - 1 - index];
  reverseWord = reverseWord + word[word.length - 1 - index]
}   

console.log(reverseWord);
*/
/*
let word = ["Olá",  "Mundo"];
let word2 = "Mundo novo"
let newWord = "";
let newWord2 = "";

newWord = word.reverse();
console.log(newWord);

//newWord2 = word2.reverse(); -> não da certo
newWord2 = word.join();
console.log(newWord2)
*/

/*
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);
*/

/*
let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigArray = array[0];
let smallArray = array[0];

for (const element of array) { // para o maior elemento
    if(element.length > bigArray.length){
        bigArray = element;
    }
}

for (const element of array) {
    if(element.length <= smallArray.length){
        smallArray = element;
    }
}

console.log(bigArray)
console.log(smallArray)
*/

let numberPrime = 0;
let bigNumber = 0;
for (let i = 0; i <= 50; i++) {
    let isPrime = true; // enquanto i menor que 50 o loop continua
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isPrime = false; // se i divido por j for igual a -> 0 é falso 
        }
    }

    if(isPrime){ // entre todos os true
        bigNumber = i; // o mairo
    };
    
}
console.log(bigNumber);

