const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/aircnc', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// req.query = acessar query params (para filtros)
// req.params = acessar req route params (para edição e delete)
// req.body = acessar corpo da requisição (para criação, edição de registros)

app.use(express.json());
app.use(routes);

app.listen(3333);
