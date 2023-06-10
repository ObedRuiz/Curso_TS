"use strict";
// let mensaje = 'PEDRO SE LA COME';
// let mensajeAdicional = 'La comida obviamente';
// let mensajeCompleto = mensaje +' '+ mensajeAdicional;
// let mensajeMayusculas = mensajeCompleto.toUpperCase();
// let mensajeMinisculas = mensajeCompleto.toLowerCase();
// let mensajeGuiones = mensaje.replace(/ /g,'_');
// Metodo para acceder a una posicion de letra
// console.log(mensajeCompleto.charAt(2));
Object.defineProperty(exports, "__esModule", { value: true });
// let mensaje: String = 'PEDRO SE LA COME';
// let mensajeAdicional: String = 'La comida obviamente';
// let mensajeCompleto: String = mensaje +' '+ mensajeAdicional;
// let mensajeMayusculas: String = mensajeCompleto.toUpperCase();
// let mensajeMinisculas: String = mensajeCompleto.toLowerCase();
// let mensajeGuiones: String = mensaje.replace(/ /g,'_');
// console.log(mensajeGuiones);
//number
// let edad: number = 19;
// let numero: number =10;
// let numeroNegativo: number =-20;
// let suma:number;
//truncar decimales
// suma  = Number((numero/3).toFixed(4));
// console.log (suma);
// // redondeo
// suma  = Math.round(numero/3);
// console.log (suma);
//boolean
let isTrue = true;
let havePass = false;
//Arrays
const peliculas = ['Cars1', 'Cars2', 'Cars3'];
const nuevoUsuario = {
    idUser: new Date().getTime(),
    nombre: 'Obed',
    email: 'prueba@oo',
    edad: '22',
    direccion: {
        calle: 56
    }
};
//desestructurar un objeto
const { nombre, direccion, email } = nuevoUsuario;
const videoJuego = {
    name: 'Zelda',
    restriccionEdad: '11',
    desarrolladora: 'Nintendo',
    plataformas: ['Nintento', 'PC']
};
const pokemon = {
    id: 1,
    nombre: 'Bulbasaur',
    tipo: ['Planta', 'Veneno'],
    evolucion: {
        nivel: 16,
        nombre: 'Ivysaur'
    },
    habilidades: ['Espesura', 'Clorofila'],
    stats: {
        hp: 45,
        ataque: 49,
        defensa: 49,
        velocidad: 45
    },
    legendario: false
};
const cancion = {
    titulo: 'Bohemian Rhapsody',
    artista: 'Queen',
    album: {
        nombre: 'A Night at the Opera',
        lanzamiento: 1975,
        productor: {
            nombre: 'Roy Thomas Baker',
            estudio: 'EMI Studios, Trident Studios'
        }
    },
    duracion: '6:07',
    genero: 'Rock',
    reproducciones: 5000000,
    popularidad: 4.5,
};
cancion.estatus = true;
const usuario = {};
usuario.name = 'obed';
usuario.lastname = 'ruiz';
usuario.age = 25;
Object.keys(usuario).forEach((value, key) => {
    console.log(usuario[value]);
});
//# sourceMappingURL=app.js.map