const p1 = {
  x: 0,
  y: 4,
  moverEnX(x) { this.x = this.x + x},
  moverEnY(y) { this.y += y }
};

const p2 = {
  x: 3,
  y: 0,
  moverEnX: function (x) { this.x = this.x + x},
  moverEnY: function (y) { this.y += y }
};

function distancia(p1, p2) {
  const x = p1.x - p2.x;
  const y = p1.y - p2.y;

  return Math.sqrt(x * x + y * y);    // d = √x2 + y2  // sqrt = raiz cuadrada //
}

console.log(distancia(p1, p2));
// console.log(distancia(p1, { x: 20, y: -7 }));
