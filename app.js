const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = 3000;

// routers
const { searchRouter } = require('./routers/searchRouter');

// middle-ware
app.use(cors());

// check app
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// searchRouter
app.use('/', searchRouter);

// start the server
app.listen(process.env.PORT || port, () => console.log('Server is running...'));
