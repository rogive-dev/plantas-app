import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { dataPlantas } from './dataPlantas';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  plantas: Array<Planta> = [];
  constructor() { }
  getCourseList(): Array<Planta> {
    return dataPlantas;
  }
  ngOnInit() {
    this.plantas = this.getCourseList();
  }
}
