console.warn('**********this************');
console.log(this);
console.log(window);
console.log(this === window);

this.nombre = 'Contexto Global';
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: 'Contexto Objeto',
  imprimir: function () {
    // propio scope
    console.log(this.nombre);
  },
};

obj.imprimir();

const obj2 = {
  nombre: 'Contexto Objeto 2',
  imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: 'Contexto Objeto 3',
  imprimir: () => {
    // la arrow function no maneja su propio scope
    console.log(this.nombre);
  },
};

obj3.imprimir();

function Persona(nombre) {
  // this.nombre = nombre;
  const that = this; // tha hace referencia al this de la funcion constructora
  that.nombre = nombre;
  // return console.log(this.nombre);
  // return function () {
  //   // internamente esta funcion no tienen ninguna propiedad nombre por eso imprime contexto global
  //   console.log(this.nombre);
  // };

  // return () => console.log(this.nombre); // arrow no crean scope interno

  return function () {
    console.log(that.nombre);
  };
}
let damian = new Persona('dami');
damian();

console.warn('**************Métodos Call-Apply-Bind***************');

console.log(this);
this.lugar = 'Contexto Global';

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar('Hola', 'Orion'); // Contexto Global

const obj4 = {
  lugar: 'Contexto Objeto',
};

saludar.call(obj4, 'Hola', 'Dami'); // nuevo this // Contexto Objeto
saludar.call(null, 'Hola', 'DamiCallNull'); // nuevo this // Contexto Objeto // null se regresa al contexto global
saludar.call(this, 'Hola', 'DamiCallThis'); // aca estamos en el contexto global
saludar.apply(obj4, ['Adios', 'Damian']); // nuevo this // Contexto Objeto // se pueden pasar parametros
saludar.apply(null, ['Adios', 'DamianApplyNull']); // nuevo this // Contexto Objeto // se pueden pasar parametros
saludar.apply(this, ['Adios', 'DamianApplyNull']);

const persona = {
  nombre: 'damian',
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(persona), // enlaza el contexto en este caso de persona // sin el bind da undefined
};

otraPersona.saludar();
