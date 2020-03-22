const User = require('../models/User');

// METODOS: index, show, store, update, destroy

//Criando user no banco de dados
module.exports = {
  async store(req, res) {
    const { email } = req.body;

    // verificar se tem user ja cadastrado
    let user = await User.findOne({ email });
    // criando usuario caso NAO encontre o user no banco de dados
    if (!user) {
       user = await User.create({ email });
    }

    return res.json(user);
  }
};