const { ObjectId } = require('mongodb');

const connection = require('./connection');


// ...

const getAll = () => connection()
  .then((db) => db.collection('books').find({}).toArray());

// ...


const getByAuthorId = (authorId) => connection()
  .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());

const findById = async (id) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));

  if (!book) return null;

  return book;
}





const bookIsValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const bookCreate = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  bookIsValid,
  bookCreate,
};