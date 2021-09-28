const express = require('express');


app = express();

app.use(express.json());

const PORT = process.env.PORT || 3030;
const message = process.env.MESSAGE || 'Está vivo!!!';

app.get('/', (req,res) => {
  res.send(message)
})


app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`);
})