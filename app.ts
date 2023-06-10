// let mensaje = 'PEDRO SE LA COME';
// let mensajeAdicional = 'La comida obviamente';
// let mensajeCompleto = mensaje +' '+ mensajeAdicional;
// let mensajeMayusculas = mensajeCompleto.toUpperCase();
// let mensajeMinisculas = mensajeCompleto.toLowerCase();
// let mensajeGuiones = mensaje.replace(/ /g,'_');
// Metodo para acceder a una posicion de letra
// console.log(mensajeCompleto.charAt(2));

import { Usuario, cancionInterface } from "./interfaces/interfaces";

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

const peliculas: string [] = ['Cars1','Cars2','Cars3'];

// console.log (peliculas[1]);

//add  datos a un arreglo

// peliculas.push('Cars4','Cars5');

// //quitar ultimo arreglo
// peliculas.pop()

// console.log (peliculas);

// peliculas.shift();

// peliculas.unshift('Alicia jijijijijij');


// console.log(peliculas.length);

//objetos

//interface

interface UsuarioInterface {
    idUser: number;
    nombre: string;
    email: string;
    edad: string;
    direccion: {
        calle: number;
    };

}

const nuevoUsuario : UsuarioInterface = {
    idUser: new Date().getTime(),
    nombre: 'Obed',
    email:'prueba@oo',
    edad:'22',
    direccion : {
        calle:56
    }

}


//desestructurar un objeto

const {nombre,direccion,email} = nuevoUsuario;

// console.log(`Nombre: ${nombre} con email ${email}$`);

interface videoJuegoInterface{
    name: string;
    restriccionEdad: string;
    desarrolladora: string;
    plataformas: string[];
}

const videoJuego :videoJuegoInterface = {

    name: 'Zelda',
    restriccionEdad: '11',
    desarrolladora: 'Nintendo',
    plataformas: ['Nintento','PC']
}







interface pokemonInterface{
    id: number;
    nombre: string;
    tipo: string[];
    habilidades: string[];
    legendario:boolean;
    evolucion:pokemonEvolucion;
    stats:pokemonStats;
}

interface pokemonEvolucion{
    nivel: number;
    nombre: string;

}

interface pokemonStats{
    hp: Number;
    ataque: Number;
    defensa: Number;
    velocidad: Number;

}



const pokemon : pokemonInterface = {
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





  const cancion : cancionInterface = {
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
   const usuario: Usuario = {};


  usuario.name = 'obed';
  usuario.lastname = 'ruiz';
  usuario.age = 25;

  Object.keys(usuario).forEach((value,key)=>{

    console.log(usuario[value]);

  })

 