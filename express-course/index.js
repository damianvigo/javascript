/* const http = require('http');

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Serve on port 3000');
}); */

const express = require('express');
const morgan = require('morgan');
const app = express(); // al ejecutarlo devuelve un objeto

// Settings
app.set('appName', 'dvdev express'); // nombre de variable - valor de la variable
app.set('port', 3000);
app.set('view engine', 'ejs');

function logger(req, res, next) {
  console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}
// Middlewares procesan datos antes de que lleguen a las rutas.
// Antes de que llegue a las rutas pasan por los middlewares.
app.use(express.json()); // Middleware
// app.use(logger); // Middleware
app.use(morgan('dev')); //Middleware

/* app.all('/user', (req, res, next) => {
  console.log('Por aqui paso');
  next();
}); */

app.get('/', (req, res) => {
  const data = [{name: 'john'}, {name: 'joe'}, {name: 'cameron'}, {name: 'ryan'}];
  res.render('index.ejs', {people: data});
})

app.get('/user', (req, res) => {
  res.json({
    username: 'Cameron',
    lastname: 'Howe',
  });
});

app.post('/user/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send('POST request received');
});

app.put('/user/:id', (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId', (req, res) => {
  res.send(`User ${req.params.userId} deleted`);
  res.send('<h1>Delete request received</h1>');
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Server on port', app.get('port'));
});
