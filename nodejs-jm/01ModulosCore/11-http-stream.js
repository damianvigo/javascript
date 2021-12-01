'use strict';

const http = require('http').createServer(webServer),
  fs = require('fs'),
  index = fs.createReadStream('assets/index.html');

const hostname = '127.0.0.1';
const port = 3000;

function webServer(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  index.pipe(res);
}

http.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
