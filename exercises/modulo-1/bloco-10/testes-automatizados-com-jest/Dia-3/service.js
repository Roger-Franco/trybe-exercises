// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

// const randomNumber = () => {
//   Math.floor(Math.random() * 101);
// }
// module.exports = { randomNumber };

// const randomNumber = () => Math.floor(Math.random() * 101);
// module.exports = { randomNumber };



/* ================================================= */
// 2-Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.



/* ================================================= */
// 3- Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

/* ================================================= */
// 4- Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

// const upper = (str) => {
//   return str.toUpperCase();
// }
//  const firstLetter = (str) => {
//    return str.substr(0, 1)
//  }

//  const concat = (str1, str2) => {
//    return str1.concat(str2);
//  }
//  console.log(concat('Roger Franco', ' Correia'));


//  const str = 'Mozilla';
// console.log(str.substr(0, str.length));

// const firstFunction = (str) => str.toUpperCase();
// const secondFunction = (str) =>  str.charAt(0);
// const thirdFunction = (str1, str2) => str1.concat(str2);



// const thirdFunction = (str1, str2, str3) => str1.concat(str2,str3);
// console.log(thirdFunction('Roger ', 'Franco ', 'Correia'))

// module.exports = {
//   firstFunction,
//   secondFunction,
//   thirdFunction,
// };
/* ================================================= */
// 5-Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

/* ================================================= */
// 6- Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.
function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
module.exports = { fetchDog };
/* ================================================= */
/* ================================================= */
/* ================================================= */