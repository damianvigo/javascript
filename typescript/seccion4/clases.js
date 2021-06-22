var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log("acelerando");
    };
    Vehiculo.prototype.frenar = function () {
        console.log("frenando");
    };
    return Vehiculo;
}());
var coche = new Vehiculo("Ford", "12/7/2018", 4);
coche.marca;
coche.fecha;
console.log(coche.marca);
coche.acelerar();
