// const nacimiento = new Date(año, mes - 1, dia)
const nacimiento = new Date(1988, 0, 15);
const hoy = new Date();

const tiempo = hoy - nacimiento;
const tiempoSegundos = tiempo / 1000;

const tiempoMin = tiempoSegundos / 60;

const tiempoHoras = tiempoMin / 60;

const proximoCumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

diasSemana[proximoCumpleanos.getDay()];
console.log(diasSemana[proximoCumpleanos.getDay()]);
