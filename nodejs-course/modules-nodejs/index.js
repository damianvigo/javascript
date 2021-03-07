// const os = require('os');

// console.log(os.platform());
// console.log(os.release());
// console.log('free mem: ', os.freemem(), 'bytes');
// console.log('total mem: ', os.totalmem(), 'bytes');

const colors = require('colors');
// const fs = require('fs');
// const http = require('http');

// Codigo Asincrono
// fs.writeFile('./texto.txt', 'linea uno', function (err) {
//   if (err) {
//     console.log(err);
//   }

//   console.log('Archivo creado');
// });

// console.log('ultima linea de codigo');

// fs.readFile('./texto.txt', function (err, data) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

/* const handleServer = function (request, response) {
  response.writeHead(200, { 'Content-type': 'text/html' })
  response.write('<h1>Hey there!</h1>');
  response.end();
}

const server = http.createServer(handleServer)

server.listen(3000, function () {
  console.log('Server on port 3000'.cyan);
}); */

const express = require('express');

const server = express();

server.get('/', function (req, res) {
  res.send('<h1>Hey there with express y node</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server on port 3000'.red);
});
