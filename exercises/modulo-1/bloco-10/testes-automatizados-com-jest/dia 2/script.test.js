// 1- Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// const uppercase = (str, callback) => {
//   callback(str.toUpperCase());
// };

/* ========== Solução: =================== */

// const uppercase = (str, callback) => {
//   callback(str.toUpperCase());
// }

// it(`uppercase 'test' to equal 'TEST'`, (done) => {
//   uppercase('test', (str) => {
//     expect(str).toBe('TEST');
//     done();
//   });
// });

/* ========================================== */

// Código-base para os exercícios 2 e 3:
// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName .

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};
/* ======================================= */
// 2- Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

// describe('O id de usuário é válido.', () => {
//   test('Retorne o usuário encontrado', () => {
//     getUserName(id) 
//     getUserName(id).catch(error =>
//       expect(error).toEqual({}) 
//       ) 
//   })
// })

describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});
/* ========== Solução: =================== */
// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

// describe('getUserName - async/await', () => {
//   describe('when the user id exists', () => {
//     it('returns the user name', async () => {
//       expect.assertions(1);
//       const data = await getUserName(3);
//       expect(data).toEqual('Mark');
//     });
//   });

//   describe('when the user id does not exists', () => {
//     it('returns an error', async () => {
//       expect.assertions(1);
//       try {
//         await getUserName(1);
//       } catch (error) {
//         expect(error).toEqual({ error: 'User with 1 not found.' });
//       }
//     });
//   });
// });


/* ========== Solução: =================== */
// 5- O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

// const fetch = require('node-fetch');

// const getRepos = (url) => {
//   return fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       return data.map((repo) => repo.name);
//     });
// };

//   it('gets a list of repositories names', () => {
//     const url = 'https://api.github.com/orgs/tryber/repos';
  
//     return getRepos(url).then(result => {
//       expect(result).toContain('sd-01-week4-5-project-todo-list');
//       expect(result).toContain('sd-01-week4-5-project-meme-generator');
//     });
//   });


/* ========== Solução: =================== */
// 5- Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });
/* ========== Solução: =================== */
// 6- Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       };

//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );


/* ========== Solução: =================== */
// 6.1 - 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];

// const findAnimalByName = (name) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const animal = Animals.find((animal) => animal.name === name);
//       if (animal) {
//         return resolve(animal);
//       };
//       const messageError = 'Nenhum animal com esse nome!';
//       return reject(messageError);
//     }, 100);
//   })
// );

// const getAnimal = (name) => {
//   return findAnimalByName(name)
//     .then(animal => animal);
// };

// describe('Testando promise - findAnimalByName', () => {
//   describe('Quando existe o animal com o nome procurado', () => {
//     test('Retorne o objeto do animal', () => {
//       expect.assertions(1);
//       return getAnimal('Dorminhoco').then(animal => {
//         expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
//       });
//     });
//   });

//   describe('Quando não existe o animal com o nome procurado', () => {
//     test('Retorna um erro', () => {
//       expect.assertions(1);
//       return getAnimal('Bob').catch(error =>
//         expect(error).toEqual('Nenhum animal com esse nome!')
//       );
//     });
//   });
// });
/* ========== Solução: =================== */
// 6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

// Solução
// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Cat' },
// ];


// const findAnimalByAge = (age) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const listAnimals = Animals.filter((animal) => animal.age === age);
//       if (listAnimals.length !== 0) {
//         return resolve(listAnimals);
//       };
//       const messageError = 'Nenhum animal encontrado!';
//       return reject(messageError);
//     }, 100);
//   })
// );


// const getAnimalByAge = (age) => {
//   return findAnimalByAge(age)
//     .then(animal => animal);
// };
// // Testes
// describe('Testando promise - findAnimalByAge', () => {
//   describe('Quando existe o animal com o a idade', () => {
//     test('Verifique o primeiro nome do animal no array retornado', () => {
//       expect.assertions(1);
//       const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
//       return expect(getAnimalByAge(5)).resolves.toEqual(animals);
//     });
//   });

//   describe('Quando não existe o animal com o nome procurado', () => {
//     test('Retorna um erro', () => {
//       expect.assertions(1);
//       return expect(getAnimalByAge(3)).rejects.toBe('Nenhum animal encontrado!');
//     });
//   });
// });