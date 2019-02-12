require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is running on ${PORT}`));