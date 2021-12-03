'use strict';

const http = require('http'),
  options = {
    host: 'nodejs.org',
    port: 80,
    path: '/',
  };
let htmlCode = '';

function httpClient(res) {
  console.log(
    `El sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}
`
  );
  res.on('data', function (data) {
    htmlCode += data;
    console.log(data, data.toString());
  });
}

function httpError(err) {
  console.log(
    `El sitio ${options.host} no respondio. Codigo de estado: ${err.code}. Error: ${err.message}`
  );
}

function webServer(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlCode);
}

//instancia cliente de HTTP
http.get(options, httpClient).on('error', httpError);
//instancia servidor de HTTP
http.createServer(webServer).listen(3000);

console.log('Server corriendo en http://localhost:3000/');
