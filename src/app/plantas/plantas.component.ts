import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Planta } from './planta';
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  constructor(private plantasService: PlantasService) { }
  plantas: Array<Planta> = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  calcularTotales(elems: Planta[] = []) {
    return elems.reduce((acc, elem: Planta) => {
      if(elem.tipo === 'Interior') {
        acc.totalInt += 1
      }
      if(elem.tipo === 'Exterior') {
        acc.totalExt += 1
      }
      return acc
    }, {totalInt: 0, totalExt: 0})
  }
  getPlantas() {
    this.plantasService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      const {totalInt, totalExt} = this.calcularTotales(plantas);
      this.totalExterior = totalExt;
      this.totalInterior = totalInt;
    });
  }
  ngOnInit() {
    this.getPlantas();
    this.calcularTotales(this.plantas || []);
  }
}
