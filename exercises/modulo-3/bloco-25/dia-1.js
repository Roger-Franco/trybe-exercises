// ******** Para Fixar

// 1- Selecione todas as transações feitas pelo cliente chamado "Dave America".

db.transactions.aggregate([{ $match: { from: "Dave America" } }]);
// 2- Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".

db.transactions.aggregate(
  [
    {
      $match: {
        $or: [
          { value: { $gte: 700, $lte: 6000 } },
          { to: "Lisa Simpson" }
        ]
      }
    }
  ]
);

// 3- Selecione três transações com o valor acima de 1000.

db.transactions.aggregate(
  [
    {
      $match: {
        value: { $gt: 1000 },
      },
    },
    { $limit: 3 },
  ]
);

/* =================================== */

// Para Fixar

// 1- Selecione todos os bancos, ou seja, valores do campo bank;

db.transactions.aggregate([
  {
    $group: {
      _id: '$bank',
      bank: { $sum: 1 }
    }
  }
]).pretty();
// 2- Selecione o valor total das transações em cada banco e quantas são;

db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalTransactions: { $sum: '$value' },
      transações: { $sum: 1 }
    }
  }
]).pretty();

// 3- Selecione o valor total de transações; (total de todas as transações ou de cada banco)

db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      totalTransactions: { $sum: '$value' },
    }
  }
]).pretty();

// 4- Selecione os bancos que têm o valor total de transações maior que 1000.

// db.transactions.aggregate([
//   {
//     $group : {
//       _id : "$bank",
//       totalTransactions: { $sum: '$value' },
//     }
//   },
//   {
//     $project ($match): {
//       totalTransactions: {$gt: 1000},
//     }
//   }
// ]).pretty();


db.transactions.aggregate([
  {
    $match: {
      value: { $gt: 1000 },
    },
  },
  {
    $group: {
      _id: '$bank',
      total: { $sum: '$value' },
    }
  }
]).pretty();

/* ====================== */
//  Para Fixar

// 1- Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_history"
    }
  }
]).pretty();
// 2- Selecione quatro clientes com as suas respectivas transações recebidas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
  {
    $limit: 4,
  },
]);

// 3- Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  {
    $match: { State: 'Florida' },
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_history"
    },
  },
]);

/* ============================ */
// Agora, a prática

// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .

db.clientes.aggregate(
  [{ $match: { sexo: "MASCULINO" } }]
);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .

db.clientes.aggregate(
  [{
    $match: {
      $and: [
        { sexo: "FEMININO" },
        { dataNascimento: { $gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31') } },
      ]
    }
  }]
);

db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31')
      }
    }
  }
]);

// Exercício 3: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005, limitando a quantidade de documentos retornados em 5.

db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate('1995-01-01'),
        $lte: ISODate('2005-12-31')
      }
    }
  },
  { $limit: 5 }
]);

// Exercício 4: Conte quantos clientes do estado SC existem na coleção.Retorne um documento em que o campo _id contenha a UF e outro campo com o total.

db.clientes.aggregate([
  { $match: { "endereco.uf": "SC" } },
  {
    $group: {
      _id: "$endereco.uf",
      count: { $sum: 1 }
    }
  }
]);

// Exercício 5: Agrupe os clientes por sexo.Retorne o total de clientes de cada sexo no campo total.

db.clientes.aggregate([
  {
    $group: {
      _id: "$sexo",
      total: {
        $sum: 1
      }
    }
  }
]);

//  Exercício 6: Agrupe os clientes por sexo e uf.Retorne o total de clientes de cada sexo no campo total.

db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: {
        $sum: 1
      }
    }
  }
]);

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir(não se importe com a ordem dos campos):


// {
//   "estado": "SP",
//   "sexo": "MASCULINO",
//   "total": 100
// }


db.clientes.aggregate([
  {
    $group: {
      _id: {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      total: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      _id: 0,
      estado: "$_id.uf",
      sexo: "$_id.sexo",
      "total": 1
    }
  }
]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      valorTotal: {
        $sum: "$valorTotal"
      }
    }
  },
  {
    $sort: {
      valorTotal: -1
    }
  },
  {
    $limit: 5
  }
]);

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      valorTotal: {
        $sum: "$valorTotal"
      }
    }
  },
  {
    $sort: {
      valotTotal: -1
    }
  },
  {
    $limit: 10
  }
]);

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
// Dica: O operador $count pode simplificar sua query .

db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
    $count: 'clientes'
  },
]);

// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalCompras: { $lt: 3 }
    }
  },
  {
    $count: 'clientes'
  }
]);

// Exercício 12 : Descubra quais as três ufs que mais compraram no ano de 2020.Retorne os documentos no seguinte formato:

// {
//   "_id": "MG",
//   "mediaVendas": 9407.129225352113,
//   "totalVendas": 142
// }

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-12-31')
      },
    },
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
    $unwind: "$dadosCliente"
  },
  {
    $group: {
      _id: "$dadosCliente.endereco.uf",
      totalVendas: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalVendas: -1
    }
  },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]);