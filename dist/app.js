"use strict";
// const num = [1,2,3,4,5,6,7,8,9,10];
// // const ParImpar = (numeros: number[])=>{
// //     const numberPar = numeros.filter((numero:number) => numero % 2 ===0);
// //     const numberImp = numeros.filter((numero:number) => numero % 1 !== 1);
// //     return {numberImp,numberPar};
// // }
// // console.log(ParImpar(num));
// // crear funcion que se encargue de obtener los numero impares y ``pares
// num.forEach(( value ) => {
//   console.log(value);
// })
// const pares = num.filter((numero) => numero % 2 ===0);
// const obtenerCalificaicones = (num: number[]) => {
//   let acumulador = 0;
//   let promedio = 0;
//   for (let i=0 ; i < num.length; i++){
//     acumulador += num[i]    
//   }
//   promedio = acumulador / num.length;
// }
// const newArray = num.map((numero) =>{
//   if(numero % 2 ===0){
//     return numero;
//   }
// })
// interface Generic<T,N>{
//   primero: T;
//   segundo: N;
// }
// const genericObject: Generic<boolean,string[]> ={
// }
// single responsibility unique
// interface InGalletas {
//   sabor: string;
// }
// class Galletas implements InGalletas {
//   public sabor: string;
//   protected forma: string;
//   private decoracion: string;
//   constructor (sabor: string, forma: string, decoracion: string){
//     this.sabor = sabor;
//     this.forma = forma;
//     this.decoracion = decoracion;
//     // console.log("hola estoy en el constructoir")
//   }
//   decorar(decoracion: string){
//     this.decoracion = decoracion;
//   }
//   set cambiarSabor(sabor: string){
//     this.sabor = sabor;
//   }
//   get obtenerGalleta(){
//     return`La galleta tiene  forma de : ${this.forma}
//             Su sabor es : ${this.sabor}
//             y su decoracion es : ${this.decoracion}`
//   }
// }
// const galletas = new Galletas('vainilla','redonda','chocolate');
// galletas.cambiarSabor ='Fresa';
// console.log(galletas.obtenerGalleta)
class Animal {
    constructor(tipo, edad) {
        this.tipo = tipo;
        this.edad = edad;
    }
}
class Veterinaria extends Animal {
    constructor(tipo, edad, cita, horario) {
        super(tipo, edad);
        this.cita = cita;
        this.servicios = ['baño', 'corte', 'anestecia'];
        this.horario = horario;
    }
    get obtenerServicios() {
        return this.servicios;
    }
    set agregarServicio(servicio) {
        this.servicios.push(servicio);
    }
    GenerarCarnet(servicios) {
        const serviciosContratados = [];
        return `
            Tipo de Mascota ${this.tipo}
            Edad de Mascota ${this.edad}
            Horario de cita ${this.cita}
            Servios contratados ${serviciosContratados}`;
    }
}
const vete = new Veterinaria('Perro', 5, 'SAbado', new Date().getTime());
console.log(vete.obtenerServicios);
//# sourceMappingURL=app.js.map