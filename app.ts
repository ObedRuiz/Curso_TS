// const usuario = {

//     name: 'obed',
//     role: 'admin'
// }

// <,>,<==,>==, == === !==,!
// let numero: any = 2;
// if(numero == '2'){
//     console.log('el numero es igual')


// }else{
//     console.log('pelas no es');
// }


// funciones
// const saludar = () :void =>{
//     console.log("hola");
// }

// funcion con pareametros
// const saludarDos = (mensaje: string, numero?: number) :void =>{

// console.log('Hola '+ mensaje) + '-' numero);
// }

// saludarDos('soy Obed',2);

// const tablasMultiplicar =(base: number, limite:number): string =>{
//     let resultado = '';

//     for(let i=0;i <=limite; i++){

//         resultado += `${base} x ${i}={base*i}\n`;
//     }
//     return resultado;

// }

// let resultadoFunct=tablasMultiplicar(10,5)

interface Alumno{
    nombre: string;
    carrera: string;
    parcial: string;
    calificaciones: number[];
    promedioMinimo: number;
}

const alumno: Alumno={

    nombre:'Jesus',
    carrera: 'Ing Sistemas',
    parcial: 'Segundo',
    calificaciones: [78,56,43,67,70],
    promedioMinimo: 70


}
const alumnoDos: Alumno={

    nombre:'Juan',
    carrera: 'Ing Sistemas',
    parcial: 'Segundo',
    calificaciones: [80,90,100,67,70],
    promedioMinimo: 70


}


const calcularPromedio =(infoAlumno: Alumno): string =>{

//promedio
// console.log(infoAlumno.nombre);

    let promedio: number=0;
    let mensaje: string='';


    for(let i=0;i < infoAlumno.calificaciones.length; i++){

        promedio += infoAlumno.calificaciones[i];
    }
    
    promedio = (promedio/infoAlumno.calificaciones.length);

    if (promedio >= infoAlumno.promedioMinimo){
        // let aprobo:boolean=true;
        mensaje = `El alumno  ${infoAlumno.nombre} \n tiene el siguiente promedio = ${promedio}\n Estatus = Aprobatorio`

    }else{
        // let aprobo:boolean=false;
        mensaje = `El alumno  ${infoAlumno.nombre} \n tiene el siguiente promedio = ${promedio}\n Estatus = reprobatorio`
    }

    
    return mensaje;


}

let resultado=calcularPromedio(alumno);


console.log(resultado);

resultado=calcularPromedio(alumnoDos);
console.log(resultado);
//crear una funcion que se encargue de calcular el promedio del alumno y retornara un mensaje (debe de recibir el objeto completo)
//mencionando el promedio actual y si esta aprobado o no en el parcial 
// Alumno: Jesus, Promedio: ??, Parcial: segundo, Carrera: ??, AProbado: ??