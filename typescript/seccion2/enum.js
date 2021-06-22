var Nombres;
(function (Nombres) {
    Nombres[Nombres["Ikki"] = 5] = "Ikki";
    Nombres[Nombres["Shun"] = 6] = "Shun";
    Nombres[Nombres["Seiya"] = 9] = "Seiya";
})(Nombres || (Nombres = {}));
var nombre = Nombres[9];
console.log(nombre);
