const mongoose = require('mongoose');

//Modelo de como sera armazenado o User no banco de dados
const UserSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model('User', UserSchema);