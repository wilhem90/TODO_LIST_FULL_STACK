const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Meu servidor esta funcionando bem certinho!');
});
app.listen('3000', () => {
  console.log('Meu servidor esta rodando na porta 3000!');
});