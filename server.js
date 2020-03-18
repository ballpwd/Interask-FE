const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.get('/', function (req, res) {
    res.send('Hello World')
  });

app.listen(3000) ;