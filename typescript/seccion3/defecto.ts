const mostrar = (nombre: string, apellido: string, edad: number = 32) => {
  return `Se llama ${nombre} su apellido es ${apellido} y tiene ${edad} anios`;
};

console.log(mostrar("Carolina", "Munoz", 40));
console.log(mostrar("Victoria", "Mas"));
