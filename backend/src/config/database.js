const mongoose = require('mongoose')
mongoose.Promise =  global.Promise //para tirar mensagem de advertencia

module.exports = mongoose.connect('mongodb://localhost/todo')

