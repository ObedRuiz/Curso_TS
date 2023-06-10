"use strict";
// let mensaje = 'PEDRO SE LA COME';
// let mensajeAdicional = 'La comida obviamente';
// let mensajeCompleto = mensaje +' '+ mensajeAdicional;
// let mensajeMayusculas = mensajeCompleto.toUpperCase();
// let mensajeMinisculas = mensajeCompleto.toLowerCase();
// let mensajeGuiones = mensaje.replace(/ /g,'_');
// Metodo para acceder a una posicion de letra
// console.log(mensajeCompleto.charAt(2));
let mensaje = 'PEDRO SE LA COME';
let mensajeAdicional = 'La comida obviamente';
let mensajeCompleto = mensaje + ' ' + mensajeAdicional;
let mensajeMayusculas = mensajeCompleto.toUpperCase();
let mensajeMinisculas = mensajeCompleto.toLowerCase();
let mensajeGuiones = mensaje.replace(/ /g, '_');
console.log(mensajeGuiones);
//number
let edad = 19;
let numero = 10;
let numeroNegativo = -20;
let suma;
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
    popularidad: 4.5
};
//# sourceMappingURL=app.js.map