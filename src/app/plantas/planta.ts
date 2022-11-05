export class Planta {
  name: string;
  tipo: string;
  clima: number;
 
  public constructor(name: string, tipo: string, clima: number) {
    this.name = name;
    this.tipo = tipo;
    this.clima = clima;
  }
 }