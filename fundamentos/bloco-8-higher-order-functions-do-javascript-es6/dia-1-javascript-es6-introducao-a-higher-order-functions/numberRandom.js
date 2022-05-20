const checkNumber = (number, numberRandom) => {
  if (number === numberRandom) {
    return `${numberRandom}, Parabéns você ganhou`
  } else {
    return 'Tente novamente'
  }
}

const getRandom = (number, callback) => {
    const numberRandom = Math.floor((Math.random() * 5) + 1)
    return callback(number, numberRandom) 
}

console.log(getRandom(2, checkNumber))


// GABARITO //
// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));
