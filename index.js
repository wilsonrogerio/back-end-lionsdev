require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes/router')

app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log('App rodando na porta : ' + port);
});