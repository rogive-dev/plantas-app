export class Planta {
  nombre_comun: string;
  tipo: string;
  clima: string;
 
  public constructor(nombre: string, tipo: string, clima: string) {
    this.nombre_comun = nombre;
    this.tipo = tipo;
    this.clima = clima;
  }
 }