export class Planta {
  id: number;
  nombre_comun: string;
  tipo: string;
  clima: string;
 
  public constructor(id: number, nombre: string, tipo: string, clima: string) {
    this.id = id;
    this.nombre_comun = nombre;
    this.tipo = tipo;
    this.clima = clima;
  }
 }