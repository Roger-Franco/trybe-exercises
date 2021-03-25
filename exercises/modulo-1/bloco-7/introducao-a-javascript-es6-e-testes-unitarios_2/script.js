const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`

}

// order.name = 'luiz Silva';
// order.order.pizza[0] = "muzzarella";
// order.order.pizza[1] = "calabresa";
// order.payment.total = 50.00;

// // console.log(customerInfo(order));



// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.


//   return `Olá ${order.name}, o total do seu pedido de ${order.order.pizza[0]}, ${order.order.pizza[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`

//   // Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00.

// }

// console.log(orderModifier(order));

/* ------ Outra forma de resolver o exercício 2 -------- */

const orderModifier = (order) => {
  const newBuyer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  // console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);

/* --------- Parte II ----------- */
/* --------- Exercício 1 ----------- */

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1- 
lesson2.turno = 'manhã'
// console.log(lesson2);
/* outra forma: */
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

// 2-
// const listKeys = (obj) =>  Object.keys(obj);
// console.log(listKeys(lesson2));

// 3- 
// const sizeObj = (obj) =>  Object.keys(obj).length;
// console.log(sizeObj(lesson1));

//  4- 
// const listValues = (obj) =>  Object.values(obj);
// console.log(listValues(lesson2));

//  5-

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

//  6- 
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
// console.log(getNumberOfStudents(allLessons));

//  7-
const getValueByNumber = (obj,number) => Object.values(obj)[number];
// console.log(getValueByNumber);

// 8-
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson3,'professor','Maria Clara'));