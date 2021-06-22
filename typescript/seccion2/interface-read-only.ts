interface Conexion {
  usuario: string;
  contrasenia: string;
  readonly id: number;
}

let conect: Conexion = {
  usuario: "Ikki",
  contrasenia: "Fenix",
  id: 1,
};

conect.usuario = "Shura";
conect.contrasenia = "Capricornio";
/* conect.id = 5 */
