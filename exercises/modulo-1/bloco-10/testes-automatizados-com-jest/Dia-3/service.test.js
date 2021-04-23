// const service = require('./service');

// test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
//   service.randomNumber = jest.fn().mockReturnValue(10);

//   expect(service.randomNumber()).toBe(10);
//   expect(service.randomNumber).toHaveBeenCalled();
//   expect(service.randomNumber).toHaveBeenCalledTimes(1);
// });

/* ============================== 2 =========================== */
// test("deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.", () => {
//   service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

//   expect(service.randomNumber(10, 2)).toBe(5);
//   expect(service.randomNumber).toHaveBeenCalled();
//   expect(service.randomNumber).toHaveBeenCalledTimes(1);
//   expect(service.randomNumber).toHaveBeenCalledWith(10, 2);

// })

/* ============================== 3 =========================== */
// const service = require('./service');

// describe("testando implementações", () => {
//   test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
//     service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

//     expect(service.randomNumber(2, 3, 4)).toBe(24);
//     expect(service.randomNumber).toHaveBeenCalled();
//     expect(service.randomNumber).toHaveBeenCalledTimes(1);
//     expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
//   });

//   test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
//     service.randomNumber.mockReset();
//     expect(service.randomNumber).toHaveBeenCalledTimes(0);

//     service.randomNumber.mockImplementation(a => a * 2);

//     expect(service.randomNumber(5)).toBe(10);
//     expect(service.randomNumber).toHaveBeenCalled();
//     expect(service.randomNumber).toHaveBeenCalledTimes(1);
//     expect(service.randomNumber).toHaveBeenCalledWith(5);
//   });
// });
/* ============================== 4 =========================== */
// 4- Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
// const service = require("./service");
// jest.mock("./service");

// describe("testando implementações", () => {
//   test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
//     service.firstFunction.mockImplementation(a => a.toLowerCase());

//     expect(service.firstFunction("UPPERCASE")).toBe("uppercase");
//     expect(service.firstFunction).toHaveBeenCalled();
//     expect(service.firstFunction).toHaveBeenCalledTimes(1);
//     expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
//   });

//   test("mockando função que recebe um parâmetro e retorna a última letra", () => {
//     service.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

//     expect(service.secondFunction("letter")).toBe("r");
//     expect(service.secondFunction).toHaveBeenCalled();
//     expect(service.secondFunction).toHaveBeenCalledTimes(1);
//     expect(service.secondFunction).toHaveBeenCalledWith("letter");
//   });

//   test("mockando função que recebe 3 parâmetros e os concatena", () => {
//     service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

//     expect(service.thirdFunction("tr", "y", "be")).toBe("trybe");
//     expect(service.thirdFunction).toHaveBeenCalled();
//     expect(service.thirdFunction).toHaveBeenCalledTimes(1);
//     expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
//   });
// });
/* ============================== 5 =========================== */
// const service = require("./service");
// // jest.mock("./service");

// describe("testando implementações", () => {
//   test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
//     const first = jest
//     .spyOn(service, 'firstFunction')
//     .mockImplementation(a => a.toLowerCase());

//     expect(first("UPPERCASE")).toBe("uppercase");
//     expect(first).toHaveBeenCalled();
//     expect(first).toHaveBeenCalledTimes(1);
//     expect(first).toHaveBeenCalledWith("UPPERCASE");

//     service.firstFunction.mockRestore();
//     expect(service.firstFunction("uppercase")).toBe("UPPERCASE");
//   });
// });
/* ========================================================= */
// const service = require("./service");

// describe("testando implementações", () => {
//   test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
//     const first = jest
//       .spyOn(service, "firstFunction")
//       .mockImplementation(a => a.toLowerCase());

//     expect(first("UPPERCASE")).toBe("uppercase");
//     expect(first).toHaveBeenCalled();
//     expect(first).toHaveBeenCalledTimes(1);
//     expect(first).toHaveBeenCalledWith("UPPERCASE");

//     service.firstFunction.mockRestore();

//     expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
//   });
// });

/* ============================== 6 =========================== */
// const service = require("./service");
// describe("testando a requisição", () => {
//   service.fetchDog = jest.fn();
//   afterEach(service.fetchDog.mockReset);

//   test("testando requisição caso a promisse resolva", async () => {
//     service.fetchDog.mockResolvedValue("request sucess");

//     service.fetchDog();
//     expect(service.fetchDog).toHaveBeenCalled();
//     expect(service.fetchDog).toHaveBeenCalledTimes(1);
//     expect(service.fetchDog()).resolves.toBe("request sucess");
//     expect(service.fetchDog).toHaveBeenCalledTimes(2);
//   });

//   test("testando requisição caso a promisse seja rejeitada", async () => {
//     service.fetchDog.mockRejectedValue("request failed");

//     expect(service.fetchDog).toHaveBeenCalledTimes(0);
//     expect(service.fetchDog()).rejects.toMatch("request failed");
//     expect(service.fetchDog).toHaveBeenCalledTimes(1);
//   });
// });
/* ============================== BONUS =========================== */
// O código abaixo utiliza uma API de piadas e implementa o fetchJoke , que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL . Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch , que faz a chamada à API , utilizando os seguintes dados:
// {
//   'id': '7h3oGtrOfxc',
//   'joke': 'Whiteboards ... are remarkable.',
//   'status': 200
// }

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   return fetch(API_URL, { headers: { Accept: 'application/json' }})
//     .then(response => response.json())
//     .then(data => data.joke);
// };
/* --------------- */
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable.",
        status: 200
      })
  })
);

test("espera-se que o fetch retorne uma piada", () => {
  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});
