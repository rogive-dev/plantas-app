import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  constructor(private plantasService: PlantasService) { }
  planta: Array<Planta> = [];

  getPlantas() {
    this.plantasService.getPlantas().subscribe(planta => {
      this.planta = planta;
    });
  }
  ngOnInit() {
    this.getPlantas();
  }
}
