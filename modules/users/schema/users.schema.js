const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: {type : String, required:[true , 'Nome e Obrigratorio']},
  email: {type: String , required :[true, 'Email e Obrigratorio'], unique: true, lowercase: true},
  password: {type: String , required: [true, 'Senha e Obrigatoria']},
  role: {type: String, enum :['default', 'admin'], default : 'default'},
  isActive: {type: Boolean, default : true}
},
{timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);