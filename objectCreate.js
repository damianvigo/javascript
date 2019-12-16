// function Punto(x, y) {
//   this.x = x; // objeto. // Bloque de codigo. Constructor //
//   this.y = y;
//   // no hace falta return, ya que js lo hace.
// }

const Punto = { 
  init: function init (x, y) {
    this.x = x,
    this.y = y
  },
  moverEnX: function moverEnX(x) {
    this.x += x;
  },
  moverEnY: function moverEnY(y) {
    this.y += y;
  },
  distancia: function distancia(p) {
    const x = this.x -p.x;
    const y = this.y - p.y;

    return Math.sqrt(x * x + y * y);
  }
}

const p1 = Object.create(Punto); // Crea un nuevo objeto y va a asignarle a ese objeto como prototipo "Punto" la funcion de arriba.
const p2 = Object.create(Punto)
p1.init(0, 4)
p2.init(3, 0);

// // agregando los metodos de moverx y movery al prototipo Punto
// Punto.prototype.moverEnX = function moverEnX(x) {
//   this.x = this.x + x;
// }

// Punto.prototype.moverEnY = function moverEnY(y) {
//   this.y += y;
// }

// Punto.prototype.distancia = function distancia(p) {
//   const x = this.x - p.x
//   const y = this.y - p.y 

//   return Math.sqrt(x * x + y * y);
// }

// const p1 = {
//   x: 0,
//   y: 4,
//   moverEnX(x) {
//     this.x = this.x + x;
//   },
//   moverEnY(y) {
//     this.y += y;
//   }
// };

// const p2 = {
//   x: 3,
//   y: 0,
//   moverEnX: function(x) {
//     this.x = this.x + x;
//   },
//   moverEnY: function(y) {
//     this.y += y;
//   }
// };

function distancia(p1, p2) {
  const x = p1.x - p2.x;
  const y = p1.y - p2.y;

  return Math.sqrt(x * x + y * y); // d = √x2 + y2  // sqrt = raiz cuadrada //
}

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moverEnX(10);
// console.log(distancia(p1, { x: 20, y: -7 }));
console.log(p1.distancia(p2));
p2.moverEnX(-4);
console.log(p1.distancia(p2));
