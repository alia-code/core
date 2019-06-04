require('dotenv-extended').load(); // Expose environment variables on this document
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const People = require('./handlers/people');

app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  next();
});
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.get('/profile', People.profile);
app.get('/profile/social', People.social);

server.listen(process.env.PORT, process.env.HOST, () => {
  console.info(`🖥️ up at: ${process.env.HOST}:${process.env.PORT}`);
});
