'use strict';

const http = require('http').createServer();

const hostname = '127.0.0.1';
const port = 3000;

function webServer(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hey there!</h1>');
}

http.on('request', webServer).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
