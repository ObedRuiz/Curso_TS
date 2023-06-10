export interface cancionInterface{
    titulo: string;
    artista: string;
    album: album
    duracion: string;
    genero: string;
    reproducciones: number;
    popularidad: number;
    [key : string]:any;

  }
interface album{
    nombre: string;
    lanzamiento: number;
    productor: productor;
  }

 interface productor{
    nombre: string;
    estudio: string;

  }
  export interface Usuario{
    [key : string]:any;

  }