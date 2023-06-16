
const num = [1,2,3,4,5,6,7,8,9,10];
// const ParImpar = (numeros: number[])=>{

//     const numberPar = numeros.filter((numero:number) => numero % 2 ===0);
//     const numberImp = numeros.filter((numero:number) => numero % 1 !== 1);
//     return {numberImp,numberPar};

// }

// console.log(ParImpar(num));

// crear funcion que se encargue de obtener los numero impares y ``pares
num.forEach(( value ) => {
  console.log(value);
})

const pares = num.filter((numero) => numero % 2 ===0);

const obtenerCalificaicones = (num: number[]) => {
  let acumulador = 0;
  let promedio = 0;

  for (let i=0 ; i < num.length; i++){
    acumulador += num[i]    

  }

  promedio = acumulador / num.length;

}


const newArray = num.map((numero) =>{
  if(numero % 2 ===0){
    return numero;
  }
})