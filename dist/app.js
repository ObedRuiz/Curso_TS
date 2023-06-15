"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones_1 = require("./helpers/operaciones");
//calcular el area y perimetro de un cuadrado
// calcular el area y perimetro de un circulo
// calcular el area y perimetro de un triangulo
const figuras = {
    circulo: {
        radio: 10
    },
    triangulo: {
        base: 65,
        altura: 80
    },
    cuadrado: {
        lado: 80
    }
};
console.log((0, operaciones_1.areaPerimetroCuadrado)(figuras.cuadrado.lado));
console.log((0, operaciones_1.areaPerimetroCirculo)(figuras.circulo.radio, Math.PI));
console.log((0, operaciones_1.areaPerimetroTriangulo)(figuras.triangulo.base, figuras.triangulo.altura));
//# sourceMappingURL=app.js.map