'use strict';

const http = require('http').createServer(serverUpload),
  util = require('util'),
  formidable = require('formidable'),
  fse = require('fs-extra');

function serverUpload(req, res) {
  if (req.method == 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
      `
      <h3>Uploader nodejs</h3>
      <form action="/upload" enctype="multipart/form-data" method="post">
        <div><input type="file" name="upload" required /></div>
        <div><input type="submit" value="Subir Archivo"/></div>
      </form>
      `
    );
  }
}

http.listen(3000);

console.log('Servidor corriendo en http://localhost:3000/');
