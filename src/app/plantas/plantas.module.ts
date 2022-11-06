import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';
import { TotalPlantasComponent } from './total-plantas/total-plantas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantasComponent, TotalPlantasComponent],
  exports: [PlantasComponent, TotalPlantasComponent]
})
export class PlantasModule { }
