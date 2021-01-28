const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

require('dotenv/config');
const app = express();

//ROUTES
const booksRoute = require('./routes/books');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/books', booksRoute);


//connecting with DB
mongoose.connect(process.env.DB_CONFIG, { useNewUrlParser: true },() => console.log('connected to DB'));
mongoose.set('useFindAndModify', false);

//listening to the server
app.listen(3000);