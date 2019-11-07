const express = require('express');
const path = require('path')
const cors = require('cors')

const app = express();
const routes = require('./routes')
const bodyParser = require('body-parser')
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'images', 'resized')));
app.use(bodyParser.json());

app.use(routes);

app.listen(3333)
