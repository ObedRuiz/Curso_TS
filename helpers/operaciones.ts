type Perimetro = {

    area:number;
    perimetro:number;
};





export const areaPerimetroCuadrado = (lado: number)=>{

    let area = lado*lado;
    let perimetro = lado*4;

    return {area,perimetro}

}


export const areaPerimetroTriangulo =(base:number,altura:number): Perimetro => ( { area: (base*altura)/2, perimetro:base*3 } )

export const areaPerimetroCirculo=(radio:number,pi:number): Perimetro => ( { area:pi*(Math.pow(radio,2)), perimetro:pi*(radio*2) } )