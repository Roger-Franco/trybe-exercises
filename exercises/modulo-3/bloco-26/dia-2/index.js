// function doMath(a, b, c) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
//       reject('Informe apenas números');

//     const result = (a + b) * c;

//     if (result < 50) {
//       return reject('Valor muito baixo')
//     }
//     resolve(result);
//   });
// }

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100 + 1);
// }

// function callDoMath() {
//   /* Criamos um novo array de 3 posições
//    * e utilizamos o `map` para gerar um número aleatório
//    * para cada posição do Array
//   */

  
//     doMath(...randomNumbers)
//       .then(result => console.log(result))
//       .catch(err => console.error(err.message))
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
// }

/* ======== async await ====== */
// async function callDoMath() {
//   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

// try {
//       const result = await doMath(...randomNumbers);
//       console.log(result);
//        } catch (err) {
//          console.error(err);
//        }
//   }
  /* ======== async await ====== */


// doMath(10, 10, 10)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// doMath(1, 1, 'a')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// doMath(1, 1, 1)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))


const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });