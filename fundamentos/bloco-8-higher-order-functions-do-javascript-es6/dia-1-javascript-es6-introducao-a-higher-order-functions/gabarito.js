// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['C', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

// const checkAnswers = (rigth, student) => {
//     let gabarito = 0;
//     for (let answer = 0; answer < rigth.length; answer += 1) {
//         if (rigth[answer] === student[answer]){
//             gabarito += 1;
//         } else if (student[answer] === 'N.A') {
//             gabarito += 0;     
//         } else {
//             gabarito -= 0.5
//         }
//     }
//     return gabarito
// }

// const resultAnswers = (rigth, student, action) => {
//     const result =  action(rigth, student, action)
//     return `A nota final do aluo é: ${result}`
// }
// console.log(resultAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers))

// solução gabarito
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));