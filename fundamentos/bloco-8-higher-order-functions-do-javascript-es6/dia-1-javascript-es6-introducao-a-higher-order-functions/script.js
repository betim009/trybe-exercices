// exemplo 1
// function sum (number1, number2) {
//     return number1 + number2;
//   }
  
//   const sumVariable = sum;
  
//   console.log(sumVariable);
//   //  [Function: sum]

// exemplo 2
//   const sum = (number1, number2) => {
//     return number1 + number2;
//   };

// exemplo 3
// const sayHello = () => {
//     return ('hello trybers');
//   }
  
//   const printGreeting = (callback) => {
//       console.log(callback());
//   }
  
//   printGreeting(sayHello);

// exemplo 4
// const sumFixAmount = (amount) => {
//     return amount2 => amount + amount2;
//   }
  
// const initialSum = sumFixAmount(15)
// console.log(initialSum(5));

// Estruturando uma HOF
// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
// repeat(5, console.log);

// testando se é para 'even'
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// par e impar
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven);
repeat(3, isOdd);

//Outro exemplo:
// const numberGenerator = () => {
//   return Math.random() * 100;
// }

// console.log(numberGenerator());