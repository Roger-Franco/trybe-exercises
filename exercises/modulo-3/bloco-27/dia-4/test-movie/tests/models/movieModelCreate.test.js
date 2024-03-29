const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
// const MoviesModel = {
//   create: () => {}
// };

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
       /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
       let connectionMock; 

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

        /* Aqui atualizamos o código para usar o banco montado pela lib `mongo-memory-server` */
        before(async () => {
          const DBServer = new MongoMemoryServer();
          const URLMock = await DBServer.getUri();
    
          connectionMock = await MongoClient
            .connect(URLMock, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            })
            .then((conn) => conn.db('model_example'));
    
          
          sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
        });

      /* Restauraremos a função `getConnection` original após os testes. */
      after(() => {
        mongoConnection.getConnection.restore();
      });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });
  });
});