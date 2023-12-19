const express = require('express');

const app = express();

app.get('/', (req, res) => 
  res.status(200).send('Porque a thara esta tao agitada?'));

module.exports = app;