
import { areaPerimetroCuadrado,areaPerimetroTriangulo,areaPerimetroCirculo  } from "./helpers/operaciones";
//calcular el area y perimetro de un cuadrado

// calcular el area y perimetro de un circulo

// calcular el area y perimetro de un triangulo



const figuras ={
  circulo: {
    radio:10
  },
  triangulo: {
    base: 65,
    altura: 80
  },
  cuadrado:{
    lado:80
  }
};
console.log(areaPerimetroCuadrado(figuras.cuadrado.lado));

console.log(areaPerimetroCirculo(figuras.circulo.radio,Math.PI));

console.log(areaPerimetroTriangulo(figuras.triangulo.base,figuras.triangulo.altura))