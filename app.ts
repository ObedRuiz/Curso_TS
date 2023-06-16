
const num = [1,2,3,4,5,6,7,8,9,10];
const ParImpar = (numeros: number[])=>{

    const numberPar = numeros.filter((numero:number) => numero % 2 ===0);
    const numberImp = numeros.filter((numero:number) => numero % 2 !== 1);
    return {numberImp,numberPar};

}

console.log(ParImpar(num));

// crear funcion que se encargue de obtener los numero impares y ``pares