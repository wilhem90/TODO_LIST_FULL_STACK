const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('http://localhost:3333');
});
