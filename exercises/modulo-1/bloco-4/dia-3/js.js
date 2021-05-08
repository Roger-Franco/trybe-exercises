



// 1) 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


// let n=4;
// let symbol = "*";
// let inputline="";
// let i;

// for (i=0;i<n;i++) {
//   inputline=inputline+symbol;
// }

// // console.log(inputline)


// for (i=0;i<n;i++) {
//   console.log(inputline)
// }


// 2) 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// let n=4;
// let symbol = "*";
// let inputline="";
// let i;

// for (i=0;i<n;i++) {
//   console.log(inputline)
//   inputline=inputline+symbol;
  
// }

// 3) 3- Agora inverta o lado do triângulo. Por exemplo:


// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };


// 4) Depois, faça uma pirâmide com n asteriscos de base:

// let n = 5;
// let lineIndex;
// let lineColumn;
// let lineInput = '';
// let symbol = '*';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight= midOfMatrix;

// for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
//     if (lineColumn > controlRight && lineColumn < controlLeft) {
//       lineInput = lineInput + symbol;
//     } else {
//       lineInput = lineInput + ' ';
//     }
//   }
//   console.log(lineInput);
//   lineInput = '';
//   controlRight -= 1;
//   controlLeft += 1;
// };


// 5) Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:



// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }


// 6) Faça um programa que diz se um número definido numa variável é primo ou não.

let divisors = 1;
let numberToCheck = 16;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');










