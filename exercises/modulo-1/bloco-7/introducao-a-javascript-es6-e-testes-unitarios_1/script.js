// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

/* ----------------------- */

// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
//   // console.log(`${ifScope} o que estou fazendo aqui ? :O`);
//    // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// 2- 
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// // let crescente = oddsAndEvens.sort();
// let textCresc = `Os números ${oddsAndEvens.sort()} se encontram ordenados de forma crescente!`;
//       // Seu código aqui.

//       console.log(textCresc);

//       const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }

// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

/* ------------------PARTE II EXERCÍCIO 1  (FATORIAL) ------------------ */

// const factorial = number => {
//   let result = 1

//   for (let index = 2; index <= number; index += 1) {
//       result *= index
//   }

//   return result
// }

// console.log(factorial(6))

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1
// console.log(factorial(5))


/* ------------------PARTE II EXERCÍCIO 2 ------------------ */

// const longestWord = text => {
//   let wordArray = text.split(' ')
//   let maxLength = 0
//   let result = ''

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length
//           result = word
//       }
//   }

//   return result
// }

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))


// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

/* ------------------PARTE II EXERCÍCIO 4 ------------------ */


const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
{result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))