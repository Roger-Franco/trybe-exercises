// Exercício 15 : Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker." .

db.movies.update(
    { title: "Batman" },
    { $set: {
      description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
      }
    }
  );

  // Exercício 16 : Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity." .

  db.movies.update(
    { title: "Godzilla" },
    { $set: {
      description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
      }
    }
  );

  // Exercício 17 : Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation." .


  db.movies.update(
    { title: "Home Alone" },
    { $set: {
      description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
      }
    }
  );

  // Exercício 18 : Utilizando o operador $regex , retorne todos os filmes em que a descrição comece com a palavra "The" .

  db.movies.find({
    description: {$regex:/^The/i}
  }).pretty();

  // Exercício 19 : Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity." .

  db.movies.find({
    description: {$regex:/humanity.$/i}
  }).pretty();

  // Exercício 20 : Crie um índice do tipo text no campo description .


  db.movies.createIndex({
    description: "text"});

    // Exercício 21 : Utilizando o operador $text , busque por filmes que contenham o termo "vacation" .

    db.movies.find({
      $text: {$search: "vacation"}
    }).pretty();

    // Exercício 22 : Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" e "criminal" .

    db.movies.find({
      $text: {$search: "monstrous criminal"}
    }).pretty();

    // Exercício 23 : Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally" .

    db.movies.find({
      $text: {$search: "\"when he is accidentally\""}
    }).pretty();