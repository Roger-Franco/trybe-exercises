// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu[4] = 'contatos';

// menu.push('contatos'); /* ele acrescenta ao ultimo */
// menu.unshift('casa'); /* ele acrescenta ao inicio */


// // console.log(menu.length); /* quantidade de elementos */
// // console.log(menu.sort()); /* ordem aufabetica */
// // console.log(menu[1]); 
// // console.log(menu[2]); 

// for (let index = 0; index < menu.length; index += 1) {
//   console.log(menu[index]);
// }

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 2];
// console.log(searchForLastTask);
// // Brincar com o cachorro

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
 // let menuServices = menu[1];
// menu.push('contatos');

// console.log(menu);

// let numero;

// console.log(numero * 1);
// console.log(numero * 2);
// console.log(numero * 3);
// console.log(numero * 4);
// console.log(numero * 5);
// console.log(numero * 6);
// console.log(numero * 7);
// console.log(numero * 8);
// console.log(numero * 9);
// console.log(numero * 10);

// var listaDeNomes = ["Joana", "Maria", "Lucas"];
// for(var indice = 0; indice < listaDeNomes.length; indice ++) {
//   var mensagem= "Boas vindas: " + listaDeNomes[indice] + "!";
//   console.log(mensagem)
// }

// let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
// for(i=0;i<groceryList.length;i++) {
//   mensagem="Ingrediente: " + groceryList[i];
//   console.log(mensagem);
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for(let i=0;i<numbers.length;i++) {
  
//   console.log(numbers[i]);
// }

// 2) Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

// let numbers = [5, 9, 13, 19, 70, 8, 100, 2, 35, 27];
// let somar = 0;

// for(let i=0;i<numbers.length;i++) {
//   somar += numbers[i];
// }

// console.log(somar);

// 3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 13, 19, 70, 8, 100, 2, 35, 27];
// let somar=0;
// let media=0;

// for(let i=0;i<numbers.length;i++) {
//   somar += numbers[i];
//   media = somar/numbers.length
// }

// console.log(media);

//  4) Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";


// let numbers = [5, 9, 13, 19, 70, 8, 100, 2, 35, 27];
// let somar=0;
// let media=0;

// for(let i=0;i<numbers.length;i++) {
//   somar += numbers[i];
//   media = somar/numbers.length
// }

// if (media > 20) {
//   console.log("valor maior que 20")
// } else {
//   console.log("valor menor ou igual a 20")
// }

// console.log(media);

//  5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 13, 19, 70, 8, 100, 2, 35, 27];

// let maior = Math.max(...numbers);

// console.log(maior);

// 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [4, 8, 12, 18, 70, 8, 100, 2, 34, 26];

// let impar = 0;



// for ( let i = 0; i < numbers.length; i++) {
//   total = numbers[i];
//   if (total % 2 !=0) {
//     impar++;
//   }
// }
// if (impar == 0){
//   console.log("nenhum valor ímpar encontrado");
// } else{
// console.log(impar);
// }


// 7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;



// let numbers = [5, 9, 13, 19, 70, 8, 100, 2, 35, 27];

// let menor = Math.min(...numbers);

// console.log(menor);

// let numbers = [5, 9, 13, 19, 70, 8, 100, 2, 35, 27];

// let menor = Math.min(...numbers);

// console.log(menor);


// 8) Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

// let contador = 1;
// for (contador=1; contador <= 25; contador++) {
//   console.log(contador)
// }

// 9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let contador = 1;
for (contador=1; contador <= 25; contador++) {
  console.log(contador/2)
}

// let megaSenaNumbers = [];

// let firstNumber;
// let secondNumber;
// let thirdNumber;
// let fourthNumber;
// let fifthNumber;
// let sixthNumber;

// console.log(math.random()*60)
// math.ceil()