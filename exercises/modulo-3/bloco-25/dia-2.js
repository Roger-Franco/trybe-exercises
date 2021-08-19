// Para Fixar
// Utilizando o banco de dados agg_example , adicione a seguinte collection e faça os exercícios:

// 1- Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions"
    }
  }
]);
/* ***************** */

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$from", "$$user_name"],
            }
          }
        }
      ],
      as: "transactions"
    }
  }
]);

// 2- Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received-transactions"
    }
  },
  {
    $sort: { State: 1 }
  },
  {
    $limit: 4
  }
]);

// 3- Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.


db.clients.aggregate([
  {
    $match: { State: "Florida" }
  },
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received-transactions"
    }
  },
]);


// Para Fixar

// 1-Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.

db.products.aggregate([
  { $project: { _id: 0, name: 1, "product_cost": { $add: ["$purchase_price", "$taxes"] } } }
]);

// Para Fixar
// Utilizando o banco de dados storage , faça o seguinte exercício:
// 1- Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.

db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1,
      "total_profit": {
        $subtract: [
          "$sale_price",
          { $add: ["$purchase_price", "$taxes"] },
        ]
      }
    }
  }
]);

// Para Fixar
// Utilizando o banco de dados storage , faça os seguintes exercícios:
//  1- Retorne o menor número inteiro relativo ao preço de venda de cada produto;

db.products.aggregate([
  { $project: { _id: 0, name: 1, sale_price: 1, floored_price: { $floor: "$sale_price" } } }
]);

// 2- Retorne o maior número inteiro relativo ao lucro total sobre cada produto.

db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1,
    },
    floored_price: {
      $ceil: {
        "total_profit": {
          $subtract: [
            "$sale_price",
            { $add: ["$purchase_price", "$taxes"] },
          ]
        }
      }
    },
  }
]);

/* ======= a resposta de cima esta errada, ainda preciso encontrar a solução */

use('storage');
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      ceiling_price: { $ceil: "$sale_price" }
    }
  }
]);

// Para Fixar
// Utilizando o banco de dados storage , faça o seguinte exercício:
//  1- Calcule o valor absoluto do lucro total de cada produto.

db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1,
      delta: {
        $abs: {
          $subtract: [
            "$sale_price",
            { $add: ["$taxes", "$purchase_price"] },
          ]
        }
      }
    }
  }
]);

// Para Fixar
// Utilizando o banco de dados storage , faça os seguintes exercícios:
// 1- Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;

db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1,
      total: {
        $multiply: ["$sale_price", "$quantity"]
      }
    }
  }
]);

// 2- alcule qual será o lucro total de cada produto caso todo o estoque seja vendido.


db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1,
      total: {
        $multiply: [{
          $subtract: [
            "$sale_price",
            { $add: ["$taxes", "$purchase_price"] },
          ]
        }, "$quantity"]
      }
    }
  }
]);

// Para Fixar
// Utilizando o banco de dados storage , faça o seguinte exercício:
// 1- Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.

db.products.aggregate([
  {
    $project: {
      _id: 0, name: 1,
      discount: {
        $divide: ["$sale_price", 2]
      }
    }
  }
]);

// Para Fixar
// Utilizando o banco de dados storage , faça o seguinte exercício:
// 1- Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.

db.products.aggregate([
  {
    $addFields: {
      totalStockValue: {
        $multiply: ["$sale_price", "$quantity"]
      }
    }
  },
]);

/* *********************** */

// Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
// arredonde para baixo o valor da idade;
// calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// 1 dia é igual a 86400000 milissegundos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  }
]);


// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $match: {
      idade: {
        $gte: 18, $lte: 25
      }
    }
  },
  {
    $count: 'totalClientes'
  }
]);

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: "clienteId",
      foreignField: "clienteId",
      as: 'compras'
    }
  }
]);

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: "clienteId",
      foreignField: "clienteId",
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  }
]);

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount().Até aqui, você deve ter 486 documentos sendo retornados.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  }
]).itcount();

// Exercício 6 : Ainda nesse pipeline, descubra os 5 estados com mais compras.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $addFields: {
      totalCompras: {
        $size: "$compras"
      }
    }
  },
  {
    $sort: {
      totalCompras: -1
    }
  },
  { $limit: 10 },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalCompras: -1
    }
  },
  { $limit: 5 }
]);

// Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO.Retorne um documento com a seguinte estrutura:

// {
//   "nomeCliente": "NOME",
//     "uf": "UF DO CLIENTE",
//       "totalConsumido": 100
// }

db.vendas.aggregate([
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  { $unwind: "$itens" },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalConsumido: {
        $sum: "$itens.quantidade"
      }
    }
  },
  {
    $sort: { totalConsumido: -1 }
  },
  { $limit: 1 },
  {
$lookup: { // Seleciona todos os clientes com as suas respectivas transações feitas;
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  { $unwind: "$cliente" },
  {
    $project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0
    }
  }
]);



// Exercício 8 : Selecione todas as vendas do mês de Março de 2020, com status EM SEPARACAO.Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda.Retorne apenas os campos clienteId, dataVenda e dataEntregaPrevista.

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO"
    }
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60000]
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
]);