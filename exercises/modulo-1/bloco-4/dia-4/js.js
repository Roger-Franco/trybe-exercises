// let estudante = {
//   nome: 'Joana',
//   idade: 43,
//   hardSkills: 3,
//   softSkills: 6,
//   carreiraSkills: 5
// };

// estudante.cidade = 'Sao Paulo';
// estudante[ 'comidaFavorita'] = 'doritos';
// estudante['nome'] = 'Joao';
// estudante.apelidos = [ 'Apelido1', 'Apelido2', 'Apelido3'];
// estudante.endereco = {
//   logadrouro:'Rua Dalvo Trombeta',
//   numero: 357
// }

// for (let key in estudante) {
//   // console.log(key, estudante[key]);
// }

// function trybe (estudante) {
//   let pessoaDesenvolvedora = estudante;

//   pessoaDesenvolvedora.hardSkills = 10;
//   pessoaDesenvolvedora.softSkills = 10;
//   pessoaDesenvolvedora.carreiraSkills =10;
//   pessoaDesenvolvedora.tryber = true;

//   return pessoaDesenvolvedora;
// }

// console.log(trybe(estudante));


// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };
//   info.recorrente= "Sim";

// // console.log("Bem vinda, " ,info.personagem)
// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim"
// };



// for (let xablau in info) {
//   console.log(xablau);
//   if (
//     info[xablau] === info.recorrente &&
//     info[xablau] === "Sim" &&
//     info2[xablau] === "Sim"
//   ) {
//     console.log("Ambos recorrentes");
//   } else {
//     console.log(info[xablau] + " e " + info2[xablau]);
//   }
// }


// for(let key in info){
//   for(let key in info2){
//   console.log(info[key], "e", info2[key])
//   }
  
// }  //faltou terminar Ämbos recorrentes

// function verificaPalindrome(palavra) {
//   let arrayLetras = palavra.split("");
//   let isPalindrome = true;
//   for (let index in arrayLetras) {
//     if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
//       isPalindrome = false;
//     }
//   }
//   return isPalindrome;
// }


// console.log(verificaPalindrome('ana')); //true
// console.log(verificaPalindrome('desenvolvimento')); //false

// let numeros = [2, 3, 6, 7, 10, 1];

// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = indice;
//     }
//   }
//   return indiceMaior;
// }

// console.log(indiceDoMaior(numeros)); 

// // --------------------

// function maiorIndice(array) {
//   let resultado;
//   for (let index = 0; index <= array.length; index++){
//       if (array[index+1] > array[index]) {
//           resultado = index+1;
//       }
//   }
// return resultado
// }
// console.log(maiorIndice([2, 3, 6, 7, 10, 1000, 100, 10]));




// let numeros = [2, 4, 6, 7, 10, 0, -3];

// function indiceDoMenor(numeros) {
//   let indiceMenor = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMenor] > numeros[indice]) {
//       indiceMenor = indice;
//     }
//   }
//   return indiceMenor;
// }

// console.log(indiceDoMenor(numeros)); 


// 4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorNome(nomes) {
//   let maiorNome = nomes[0];
//   for (let indice in nomes) {
//     if (maiorNome.length < nomes[indice].length) {
//       maiorNome = nomes[indice];
//     }
//   }
//   return maiorNome;
// }
// console.log(maiorNome(nomes));

// 5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//Duas formas de resolver o exercício
// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero++;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }

// function maisRepetido(numeros) {
//   let num = {};

//   for (let i = 0; i < numeros.length; i += 1) {
//     let valor = numeros[i];
//     if (num[valor] === undefined) {
//       num[valor] = 1;
//     } else {
//       num[valor] = num[valor] + 1;
//     }
//   }

//   let contRepetido = 0;
//   let contNumero = 0;

//   for (let prop in num) {
//     if (contRepetido < num[prop]) {
//       contRepetido = num[prop];
//       contNumero = prop;
//     }
//   }

//   return contNumero;
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

// 6- Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

// let numeros = 5;

// function somaTodosNumeros(numeros) {
//   let total = 0;
//   for (let index = 1; index <= numeros; index++) {
//     total = total + index;
//   }
//   return total;
// }
// console.log(somaTodosNumeros(numeros)); //15

// 7- Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . 

// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be") ;
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan") ;
// Retorno esperado: false

//Duas formas de resolver o exercício
// function verificaFimPalavra(palavra, fimPalavra) {
//   palavra = palavra.split("");
//   fimPalavra = fimPalavra.split("");
//   controle = true;
//   for (let i = 0; i < fimPalavra.length; i++) {
//     if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
//       controle = false;
//     }
//   }
//   return controle;
// // }

// function verificaFimPalavra(palavra, fimPalavra) {
//   let inversoPalavra = palavra.split("").reverse().join("");
//   let inversoFimPalavra = fimPalavra.split("").reverse().join("");

//   for (let i = 0; i < inversoFimPalavra.length; i += 1) {
//     if (inversoPalavra[i] != inversoFimPalavra[i]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(verificaFimPalavra("trybe", "be")); //true
// console.log(verificaFimPalavra("joaofernando", "nando")); //false


// Bônus
// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.



function Romanos(roma) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arrayNumbers = [];
  let result = 0;

  for (let indice in roma) {
    arrayNumbers[indice] = romanos[roma[indice]];
  }

  for (let indice in arrayNumbers) {
    if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
      arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
    } else {
      result += arrayNumbers[indice];
    }
  }

  return result;
}

console.log(Romanos(MMXVIII));

