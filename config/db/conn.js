require('dotenv').config();

const mongoose = require('mongoose');

async function connectDataBase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao banco de dados');

  } catch (error) {
    console.error('Erro ao conectar com banco de dados' , error.message);
    process.exit(1);
  }
}

module.exports = connectDataBase;