/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TotalPlantasComponent } from './total-plantas.component';

describe('TotalPlantasComponent', () => {
  let component: TotalPlantasComponent;
  let fixture: ComponentFixture<TotalPlantasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
