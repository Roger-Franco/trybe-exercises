// let notaCandidato = 50;

// if (notaCandidato >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!")
// } else if (notaCandidato >= 60 && notaCandidato < 80) {
//   console.log("Você está na nossa lista de espera")
// } else {
//   console.log("Você foi reprovada(o)")
// }


// let notaCandidato = "valor qualquer";

// switch (notaCandidato) {
//   case "aprovado":
//     console.log("Parabéns, você foi aprovada(o)!");
//     break;
//   case "lista":
//     console.log("Você está na nossa lista de espera");
//     break;
//   case "reprovado":
//     console.log("Você foi reprovada(o)");
//     break;
//   default:
//     console.log("Não se aplica");
//     break;
// }

//  let a = 10;
//  let b = 8;

//  console.log(a+b); 
//  console.log(a-b); 
//  console.log(a*b); 
//  console.log(a/b); 
//  console.log(a%b); 

// segundo exercicio:

// if (a>b){
//   console.log(a);
// } else {
//   console.log(b);
// };

// function maior(a, b) {
//   if (a>b) 
//     return a
//   else
//     return b  
// }

// console.log(maior);

// if (a>b){
//     maior = a;
//   } else {
//     maior = b;
//   };

//   console.log(maior);

// terceiro exercicio:

// let x = 18;
// let y = 15;
// let z = 10;

// if (x > y && x > z){
//   console.log("x");
// } else if (y > x && y > z) {
//   console.log("y");
// } else {
//   console.log("z");
// }

//  Quarto exercício:

// let x = 973;

// if (x % 2 == 0) {
//   console.log("positive");
// } else if (x % 2 == 1) {
//   console.log("negative");
// } else {
//   console.log(zero);
// }

//  Quinto exercício:

// let anguloX = 45;
// let anguloY = 45;
// let anguloZ = 90;

// if ((anguloX+anguloY+anguloZ) == 180) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//  Sexto exercício:
 
// let nameOfThePiece = "Rei";

// switch (nameOfThePiece.toLowerCase()) {
//   case "peão":
//     console.log("O peão movimenta-se apenas para frente e somente captura outras peças na diagonal.");
//     break;
//   case "bispo":
//     console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
//     break;
//   case "cavalo":
//     console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
//     break;
//   case "torre":
//     console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
//     break;
//   case "rainha":
//     console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
//     break;
//   case "rei":
//     console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
//     break;
//   default:
//     console.log("Erro.");
//     break; 
// }

// setimo exercicio:

// let nota = 100;

// if (nota>=90 && nota<=100) {
//   console.log("A");
// } else if (nota>=80 && nota<=100) {
//   console.log("B");
// } else if (nota>=70 && nota<=100) {
//   console.log("C");
// } else if (nota>=60 && nota<=100) {
//   console.log("D");
// } else if (nota>=50 && nota<=100) {
//   console.log("E");
// } else if (nota<50 && nota>=0) {
//   console.log("F");
// } else {
//   console.log("Erro");
// }

// oitavo exercicio:

// let x = 3;
// let y = 6;
// let z = 7;

// if ((x%2==0)||(y%2==0)||(z%2==0)){
//   console.log("true");
// } else {
//   console.log("false");
// }

// nono exercicio: Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// let x = 4;
// let y = 6;
// let z = 8;

// if ((x%2==1)||(y%2==1)||(z%2==1)){
//   console.log("true");
// } else {
//   console.log("false");
// }

// decimo exercicio: Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.


// let valorVenda= 50;
// let valorCusto= 20;
// let impostoSobreOCusto= 0.2*valorCusto;
// let valorCustoTotal=valorCusto+impostoSobreOCusto;
// let lucro=valorVenda-valorCustoTotal;

// lucro = valorVenda - valorCustoTotal;
// valorCustoTotal = valorCusto + impostoSobreOCusto;

// console.log(lucro*1000);

// decimo primeiro: Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto=1000;
let salarioMenosInss;
let salarioMenosIr;
// let INSS8= salarioBruto-(salarioBruto*0.08);
// let INSS9= salarioBruto-(salarioBruto*0.09);
// let INSS11= salarioBruto-(salarioBruto*0.11);
// let INSSmax= salarioBruto-570.88;

if (salarioBruto <= 1556.94) {
  salarioMenosInss = salarioBruto-(salarioBruto*0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioMenosInss = salarioBruto-(salarioBruto*0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
  salarioMenosInss = salarioBruto-(salarioBruto*0.11);
} else if (salarioBruto >= 5189.82) {
  salarioMenosInss = salarioBruto-570.88;
}

if (salarioMenosInss <= 1903.98) {
  salarioMenosIr = salarioMenosInss;
} else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65) {
  salarioMenosIr = salarioMenosInss - ((salarioMenosInss*0.075)-142.80);
} else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05) {
  salarioMenosIr = salarioMenosInss - ((salarioMenosInss*0.15)-354.80);
} else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68) {
  salarioMenosIr = salarioMenosInss - ((salarioMenosInss*0.225)-636.13);
} else if (salarioMenosInss > 4664.68) {
  salarioMenosIr = salarioMenosInss - ((salarioMenosInss*0.275)-869.36);
}




console.log(salarioMenosIr)