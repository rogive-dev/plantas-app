/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { PlantasComponent } from './plantas/plantas.component';
import { PlantasService } from './plantas/plantas.service';
import { Planta } from './plantas/planta';


describe('Componente lista de plantas', () => {
 let component: PlantasComponent;
 let fixture: ComponentFixture<PlantasComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PlantasComponent ],
     providers: [ PlantasService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PlantasComponent);
   component = fixture.componentInstance;

   component.plantas = [
     new Planta(faker.datatype.number(), faker.name.firstName(), faker.lorem.sentence(), faker.lorem.sentence()),
     new Planta(faker.datatype.number(), faker.name.firstName(), faker.lorem.sentence(), faker.lorem.sentence()),
     new Planta(faker.datatype.number(), faker.name.firstName(), faker.lorem.sentence(), faker.lorem.sentence())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('se ha creado', () => {
   expect(component).toBeTruthy();
 });

 it("El componente tiene una tabla", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('Debe tener un elemento tr', () => {
  let tableRows = fixture.nativeElement.querySelectorAll('tr');
  expect(tableRows.length).toBe(4);
 });

});
