require('dotenv-extended').load(); // Expose environment variables on this document
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const server = http.createServer(app);
const mongoParams = { useNewUrlParser: true, useCreateIndex: true };


app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  next();
});
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
passport.use(passportService.jwtLogin);
passport.use(passportService.localLogin);

mongoose.connect(process.env.DB_URL, mongoParams);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));


server.listen(process.env.PORT, process.env.HOST, () => {
  console.info(`🖥️ up at: ${process.env.HOST}:${process.env.PORT}`);
});
