const damian = {
  nombre: 'Damian',
  apellido: 'Vigo'
};

function saludar(veces) {
  for (let i = 0; i < veces; i++) {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}

// saludar.call(damian, 3);
saludar.call(damian, 3); // apply utuliza arrays //
