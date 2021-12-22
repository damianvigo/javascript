'use strict';

const mysql = require('mysql'),
  conf = require('./db-conf.json'),
  dbOptions = {
    host: conf.mysql.host,
    port: conf.mysql.port,
    user: conf.mysql.user,
    password: conf.mysql.pass,
    database: conf.mysql.db,
  },
  myConn = mysql.createConnection(dbOptions);
// Modelo
myConn.connect((err) => {
  return err
    ? console.log(`Error al Conectarse a MySQL: ${err.stack}`)
    : console.log(`Conexion establecida con MySQL Numero: ${myConn.threadId}`);
});

console.log(conf.mysql);

module.exports = myConn;
